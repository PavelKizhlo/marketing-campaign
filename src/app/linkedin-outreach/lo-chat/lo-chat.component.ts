import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'ns-lo-chat',
  templateUrl: './lo-chat.component.html',
  styleUrls: ['./lo-chat.component.scss'],
  imports: [
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  standalone: true
})
export class LoChatComponent {

}
