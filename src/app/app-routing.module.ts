import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacanciesPageComponent } from "./pages/vacancies-page/vacancies-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'vacancies-page',
    pathMatch: 'full',
  },
  {
    path: 'vacancies-page',
    component: VacanciesPageComponent,
  },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: 'marketing-campaign' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
