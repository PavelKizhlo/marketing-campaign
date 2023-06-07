import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { reducers } from './store/state.model';
import { LoginPageComponent } from "./login-page/login-page.component";
import { VacanciesPageComponent } from "./vacancy/vacancy-page/vacancies-page.component";
import { MainLayoutComponent } from "./ui/layouts/main-layout/main-layout.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { LeadEffect } from "./store/lead/lead.effect";
import { MessageEffect } from "./store/message/message.effect";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginPageComponent,
    VacanciesPageComponent,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([LeadEffect, MessageEffect]),
    EntityDataModule.forRoot(entityConfig),
    MainLayoutComponent,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
