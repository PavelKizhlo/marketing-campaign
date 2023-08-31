import { Component, OnDestroy } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatButtonModule } from "@angular/material/button";
import { MessageService } from "../../store/message/message.service";
import { AsyncPipe, DatePipe, NgForOf, NgIf } from "@angular/common";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { MessageTypes } from "../../store/message/message.model";
import { LeadService } from "../../store/lead/lead.service";

@Component({
  selector: 'ns-lo-chat',
  templateUrl: './lo-chat.component.html',
  styleUrls: ['./lo-chat.component.scss'],
  imports: [
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    MatButtonModule,
    NgForOf,
    AsyncPipe,
    DatePipe,
    NgIf
  ],
  standalone: true
})
export class LoChatComponent implements OnDestroy {
  messages$ = this.messageService.messagesWithLead$()
  lead$ = this.leadService.lead$()

  protected readonly messageTypes = MessageTypes;

  constructor(
    private messageService: MessageService,
    private leadService: LeadService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const id = params.get('leadId');
        if (id !== null) {
          this.leadService.selectLead(+id);
          this.messageService.load(+id)
        }
      })
  }

  continueFlow(id: number, status: boolean, leadId: number) {
    this.leadService.continueFlow(id, status, leadId);
  }

  ngOnDestroy() {
    this.leadService.selectLead(null);
  }

}

//@todo scroll https://stackblitz.com/edit/angular-auto-scroll?file=src%2Fapp%2Fapp.component.ts
