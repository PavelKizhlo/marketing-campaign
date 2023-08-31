import { MainLayoutComponent } from "../../ui/layouts/main-layout/main-layout.component";
import { LoChatFilterComponent } from "./components/lo-chat-filter/lo-chat-filter.component";
import { LoChatListComponent } from "./components/lo-chat-list/lo-chat-list.component";
import { LeadService } from "../../store/lead/lead.service";
import { AsyncPipe } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as cytoscape from 'cytoscape';
// @ts-ignore
import nodeHtmlLabel from "cytoscape-node-html-label";
// declare var nodeHtmlLabel: any
// @ts-ignore
import dagre from "cytoscape-dagre";
import * as tippy from 'tippy.js';

cytoscape.use(dagre);

@Component({
  selector: 'ns-lo-chat-page',
  standalone: true,
  imports: [
    MainLayoutComponent,
    LoChatFilterComponent,
    LoChatListComponent,
    AsyncPipe,
    RouterOutlet,
    MatSidenavModule
  ],
  templateUrl: './lo-chat-page.component.html',
  styleUrls: ['./lo-chat-page.component.scss']
})
export class LoChatPageComponent implements AfterViewInit {
  openSidebar = false;

  constructor(private leadService: LeadService, private http: HttpClient) {
    leadService.loadConversations()
  }

  @ViewChild('network') el: ElementRef | undefined;
  private networkInstance: any;

  ngAfterViewInit() {
    this.http.get<{ nodes: any[], edges: any[] }>('/api/linkedin-outreach/flow/1/item').subscribe((_) => {
      console.log(_);
      if (this.el) {
        if (typeof cytoscape("core", "nodeHtmlLabel") === "undefined") {
          nodeHtmlLabel(cytoscape);
        }


        // @ts-ignore
        // @ts-ignore
        const cy = cytoscape({
          container: this.el.nativeElement,

          elements: [..._.nodes, ..._.edges],
          style: [
            {
              selector: "core",
              // @ts-ignore
              css: {

                "active-bg-size": 0 //The size of the active background indicator.
              },

            },
            {
              selector: "node",
              css: {
                width: "200px",
                height: "50px",
                shape: "rectangle",
              }
            },
            {
              selector: "node[type='checkConnection']",
              css: {
                width: "200px",
                height: "120px",
                shape: "rectangle",
              }
            },
            // {
            //   selector: "node[type='sendMessage']",
            //   css: {
            //     width: "200px",
            //     height: "120px",
            //     shape: "rectangle",
            //   }
            // },
            {
              selector: "edge[type='edge__true']",
              style: {
                width: 1,
                "line-color": "#b8b8b8",
                "taxi-turn": "50%",
                "curve-style": "taxi",
                "taxi-direction": "rightward",
                "line-style": "dashed",
                events: "no",
                "target-arrow-color": "#ccc",
                "target-arrow-shape": "triangle",
                "label": "data(label)",
                "font-size": "12px",
              }
            },
            {
              selector: "edge[type='edge__false']",
              style: {
                width: 1,
                "line-color": "#f2545b",
                "taxi-turn": "50%",
                "curve-style": "taxi",
                "taxi-direction": "rightward",
                "line-style": "dashed",
                events: "no",
                "font-size": "12px",
                "target-arrow-color": "#f2545b",
                "target-arrow-shape": "triangle",
                "label": "data(label)",
              }
            },

          ],
          layout: {
            // @ts-ignore
            nodeSep: 100,
            rankSep: 100,
            fit: true,
            // @ts-ignore
            name: "dagre",
            padding: 10,
            spacingFactor: 1
          },
          zoom: 1.1,
          zoomingEnabled: true,
          userZoomingEnabled: true,
          minZoom: 0.8,
          maxZoom: 1.2,
          autoungrabify: true,
          panningEnabled: true,
          wheelSensitivity: 0.1
        });

        cy.on('tap', 'node', (event) => {
          const node = event.target;
          console.log(node)
          const label = node.data('data').message;
          // Создайте и отобразите попап с текстом метки
          alert(label);
        });

        // @ts-ignore
        cy.nodeHtmlLabel([
          {
            query: ".node",
            halign: "center",
            halignBox: "center",
            valignBox: "center",
            tpl: function (data: { label: any; id: any; stepKey: any, data: any }) {
              if (data.stepKey === 'checkConnection') {
                return `<div class="node-element">
                    <div class="node-element__graphic node-element__graphic_${data.stepKey}">
                      <div class="node-element__label">${data.id} ${data.label}</div>
                      <div class="node-element__text">Enable: ${data.data.wait.enable}</div>
                      <div class="node-element__text">Unti: ${data.data.wait.unit}</div>
                      <div class="node-element__text">Value: ${data.data.wait.value}</div>
                      <div class="node-element__text">Visit page: ${data.data.wait.visitPage}</div>
                   </div>
                </div>
              </div>`;
              } else if (data.stepKey === 'sendMessage') {
                return `<div class="node-element">
                    <div class="node-element__graphic node-element__graphic_${data.stepKey}">
                      <div class="node-element__label">${data.id} ${data.label}</div>
<!--                      <div class="node-element__text">Enable: ${data.data.message}</div>-->
                   </div>
                </div>
              </div>`;
              } else {
                return `<div class="node-element">
                    <div class="node-element__graphic">
                        <div class="node-element__label">${data.id} ${data.label}</div>
                  </div>
              </div>`;
              }
            }
          }
        ]);

      }
    })
  }
}
