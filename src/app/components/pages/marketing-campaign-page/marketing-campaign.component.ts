import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBarComponent } from '../../filter-bar/filter-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CalendarComponent } from '../../calendar/calendar.component';

@Component({
  selector: 'app-marketing-campaign',
  standalone: true,
  imports: [
    CommonModule,
    FilterBarComponent,
    MatToolbarModule,
    CalendarComponent,
  ],
  templateUrl: './marketing-campaign.component.html',
  styleUrls: ['./marketing-campaign.component.scss'],
})
export class MarketingCampaignComponent {}
