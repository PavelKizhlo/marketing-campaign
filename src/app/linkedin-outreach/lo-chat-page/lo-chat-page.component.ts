import { Component } from '@angular/core';
import { MainLayoutComponent } from "../../ui/layouts/main-layout/main-layout.component";
import { LoChatFilterComponent } from "./components/lo-chat-filter/lo-chat-filter.component";
import { LoChatListComponent } from "./components/lo-chat-list/lo-chat-list.component";

@Component({
  selector: 'ns-lo-chat-page',
  standalone: true,
  imports: [
    MainLayoutComponent,
    LoChatFilterComponent,
    LoChatListComponent
  ],
  templateUrl: './lo-chat-page.component.html',
  styleUrls: ['./lo-chat-page.component.scss']
})
export class LoChatPageComponent {

}
