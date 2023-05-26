import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { MarketingCampaignComponent } from './marketing-campaign/marketing-campaign.component';

const routes: Routes = [
  { path: '', redirectTo: 'marketing-campaign', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'marketing-campaign', component: MarketingCampaignComponent },
  { path: '**', redirectTo: 'marketing-campaign' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
