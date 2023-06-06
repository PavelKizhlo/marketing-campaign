import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { StateModel } from '../../store/state.model';
import { toggleSidenavAction } from '../../store/actions/sidenav/sidenav.action';
import { Observable } from 'rxjs';
import { selectSidenavOpened } from '../../store/selectors/sidenav/sidenav.selector';

@Component({
  selector: 'ns-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    NgOptimizedImage,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public sidenavOpened$: Observable<boolean> =
    this.store.select(selectSidenavOpened);

  constructor(private store: Store<StateModel>) {}

  public toggleSidenav() {
    this.store.dispatch(toggleSidenavAction());
  }
}
