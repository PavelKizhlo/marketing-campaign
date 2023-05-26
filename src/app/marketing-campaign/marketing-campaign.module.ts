import { NgModule } from '@angular/core';

import { MarketingCampaignComponent } from './marketing-campaign.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MarketingCampaignComponent],
  imports: [SharedModule],
})
export class MarketingCampaignModule {}
