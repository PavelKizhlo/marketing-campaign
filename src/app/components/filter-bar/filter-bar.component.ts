import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface FilterGroup {
  name: string;
  filters?: Filter[];
}

export interface Filter {
  name: string;
}

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatButtonModule, MatIconModule],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
  public savedFilterGroups: FilterGroup[] = [
    { name: 'New Search' },
    {
      name: 'Angular',
      filters: [
        {
          name: 'Primary tech stack - any of Angular',
        },
        {
          name: 'Indusrty - any of Some ID',
        },
        {
          name: 'Other filter',
        },
      ],
    },
    {
      name: 'React',
      filters: [
        {
          name: 'Primary tech stack - any of React',
        },
        {
          name: 'Indusrty - any of Some ID',
        },
      ],
    },
  ];
}
