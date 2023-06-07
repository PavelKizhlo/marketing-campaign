import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from "@angular/material/badge";

export interface FilterGroup {
  name: string;
  filters?: Filter[];
}

export interface Filter {
  name: string;
}

@Component({
  selector: 'ns-lo-chat-filter',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './lo-chat-filter.component.html',
  styleUrls: ['./lo-chat-filter.component.scss'],
})
export class LoChatFilterComponent {
   savedFilterGroups: FilterGroup[] = [
    { name: 'Иван Иванович' },
    { name: 'Иван Иванович' },
    { name: 'Иван Иванович' },
    { name: 'Иван Иванович' },
    { name: 'Иван Иванович' },
    { name: 'Иван Иванович' },
    { name: 'Иван Иванович' },
    { name: 'Иван Иванович' },
    { name: 'Иван Иванович' },
    { name: 'Иван Иванович' },
    { name: 'Иван Иванович' },
  ];
}
