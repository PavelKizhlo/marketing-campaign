import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';

import { HeaderComponent } from '../../header/header.component';
import { selectSidenavOpened } from '../../../store/selectors/sidenav/sidenav.selector';
import { StateModel } from '../../../store/state.model';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatLineModule } from "@angular/material/core";
import { MatBadgeModule } from "@angular/material/badge";
import { LeadService } from "../../../store/lead/lead.service";

export interface SidenavLink {
  text: string;
  link: string;
  matIcon: string;
}

@Component({
  selector: 'ns-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatLineModule,
    MatBadgeModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  sidenavOpened$ = this.store.select(selectSidenavOpened);
  countNewMessages$ = this.leadService.countNewMessages$();

  constructor(
    private store: Store<StateModel>,
    private leadService: LeadService
  ) {
  }
}
