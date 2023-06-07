import { Component } from '@angular/core';
import { LeadService } from "./store/lead/lead.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(leadService: LeadService) {
    setInterval(() => {
      leadService.loadCountNewMessages();
    }, 2000)
  }
}
