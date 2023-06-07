import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { HeaderComponent } from '../../header/header.component';
import { selectSidenavOpened } from '../../../store/selectors/sidenav/sidenav.selector';
import { StateModel } from '../../../store/state.model';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatLineModule } from "@angular/material/core";

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
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  sidenavOpened$: Observable<boolean> =
    this.store.select(selectSidenavOpened);

  sidenavLinks: SidenavLink[] = [
    {
      text: 'Vacancies',
      link: '#',
      matIcon: 'search',
    },
    {
      text: 'Messages',
      link: '#',
      matIcon: 'account_circle',
    },
    {
      text: 'Campaigns',
      link: '#',
      matIcon: 'download',
    },
    {
      text: 'Flows',
      link: '#',
      matIcon: 'download',
    },
    {
      text: 'Bots',
      link: '#',
      matIcon: 'extension',
    },

  ];

  constructor(private store: Store<StateModel>) {}
}
