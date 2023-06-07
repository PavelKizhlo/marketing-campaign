import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBarComponent } from '../components/filter-bar/filter-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CalendarComponent } from '../../ui/calendar/calendar.component';
import { MainLayoutComponent } from "../../ui/layouts/main-layout/main-layout.component";

@Component({
  selector: 'ns-marketing-campaign',
  standalone: true,
  imports: [
    CommonModule,
    FilterBarComponent,
    MatToolbarModule,
    CalendarComponent,
    MainLayoutComponent,
  ],
  templateUrl: './vacancies-page.component.html',
  styleUrls: ['./vacancies-page.component.scss'],
})
export class VacanciesPageComponent {}
