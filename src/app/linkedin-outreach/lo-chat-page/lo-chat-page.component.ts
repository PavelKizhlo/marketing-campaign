import { Component } from '@angular/core';
import { MainLayoutComponent } from "../../ui/layouts/main-layout/main-layout.component";
import { LoChatFilterComponent } from "./components/lo-chat-filter/lo-chat-filter.component";
import { LoChatListComponent } from "./components/lo-chat-list/lo-chat-list.component";
import { LeadService } from "../../store/lead/lead.service";
import { Observable } from "rxjs";
import { Lead } from "../../store/lead/lead.model";
import { AsyncPipe } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";

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
export class LoChatPageComponent {
  openSidebar = false;
  constructor(private leadService: LeadService) {
    leadService.loadConversations()
  }
}
