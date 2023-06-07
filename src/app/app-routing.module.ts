import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacanciesPageComponent } from "./vacancy/vacancy-page/vacancies-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { LoChatPageComponent } from "./linkedin-outreach/lo-chat-page/lo-chat-page.component";
import { LoChatComponent } from "./linkedin-outreach/lo-chat/lo-chat.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'vacancies',
    pathMatch: 'full',
  },
  {
    path: 'vacancies',
    component: VacanciesPageComponent,
  },
  {
    path: 'messages',
    component: LoChatPageComponent,
    children: [
      {path: 'create', component: LoChatComponent, outlet: 'side'}
    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: 'marketing-campaign' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
