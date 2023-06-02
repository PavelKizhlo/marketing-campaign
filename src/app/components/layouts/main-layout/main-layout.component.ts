import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { HeaderComponent } from '../../header/header.component';
import { selectSidenavOpened } from '../../../ngRx/selectors/sidenav/sidenav.selector';
import { StateModel } from '../../../ngRx/state.model';
import { MatIconModule } from '@angular/material/icon';

export interface SidenavLink {
  text: string;
  link: string;
  matIcon: string;
}

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  public sidenavOpened$: Observable<boolean> =
    this.store.select(selectSidenavOpened);

  public sidenavLinks: SidenavLink[] = [
    {
      text: 'Search',
      link: '#',
      matIcon: 'search',
    },
    {
      text: 'My Profile',
      link: '#',
      matIcon: 'account_circle',
    },
    {
      text: 'Integrations',
      link: '#',
      matIcon: 'extension',
    },
    {
      text: 'Export History',
      link: '#',
      matIcon: 'download',
    },
  ];

  constructor(private store: Store<StateModel>) {}
}
