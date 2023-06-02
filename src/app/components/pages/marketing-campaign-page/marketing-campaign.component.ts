import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-marketing-campaign',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './marketing-campaign.component.html',
  styleUrls: ['./marketing-campaign.component.scss'],
})
export class MarketingCampaignComponent {}
