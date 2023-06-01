import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { MarketingCampaignComponent } from './components/pages/marketing-campaign-page/marketing-campaign.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'marketing-campaign',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/layouts/main-layout/main-layout.component').then(
        (comp) => comp.MainLayoutComponent,
      ),
    children: [
      { path: 'marketing-campaign', component: MarketingCampaignComponent },
    ],
  },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: 'marketing-campaign' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
