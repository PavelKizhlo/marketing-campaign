import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import { NgIf } from "@angular/common";
import { LeadService } from "../../../../store/lead/lead.service";
import { RouterLink } from "@angular/router";
@Component({
  selector: 'ns-lo-chat-list',
  templateUrl: './lo-chat-list.component.html',
  styleUrls: ['./lo-chat-list.component.scss'],
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatIconModule,
    NgIf,
    RouterLink
  ],
  standalone: true
})
export class LoChatListComponent {
  displayedColumns: string[] = ['select', 'avatar', 'name', 'lastMessageCreatedAt', 'marketingCampaign'];
  constructor(public leadService: LeadService) {
  }
}
