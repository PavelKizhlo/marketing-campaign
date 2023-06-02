import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { HeaderComponent } from '../../header/header.component';
import { selectSidenavOpened } from '../../../ngRx/selectors/sidenav/sidenav.selector';
import { StateModel } from '../../../ngRx/state.model';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    MatSidenavModule,
    MatButtonModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  public sidenavOpened$: Observable<boolean> =
    this.store.select(selectSidenavOpened);

  constructor(private store: Store<StateModel>) {}

  ngOnInit(): void {
    console.log('\x1b[36m%s\x1b[0m', '11');
    // this.sidenavStatus$ = this.store.select('sidenavStatus');
  }
}
