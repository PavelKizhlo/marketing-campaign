import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";


export interface PeriodicElement {
  avatar: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  shortMessage: string;
  lastMessage: string;
  marketingCampaign: string;
  countNewMessages: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
  {
    avatar: 'https://app.getsales.io/leads/v1/avatars/sj/xl/73dcb11a-1ec3-4964-b276-7114ba64137a.jpeg',
    firstName: 'Иван',
    lastName: 'Иванович',
    jobTitle: 'Chief Executive Officer / Founder',
    shortMessage: 'Thanks but we are mainly looking for more work before we continue hiring additional developers.',
    lastMessage: '29 min ago',
    marketingCampaign: 'Leads 15.05.2023 / NodeJs / Glassdoor / Company up to 50',
    countNewMessages: 4
  },
];


@Component({
  selector: 'ns-lo-chat-list',
  templateUrl: './lo-chat-list.component.html',
  styleUrls: ['./lo-chat-list.component.scss'],
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatIconModule
  ],
  standalone: true
})
export class LoChatListComponent {
  displayedColumns: string[] = ['select', 'avatar', 'name', 'lastMessage', 'marketingCampaign'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    return '';
    // if (!row) {
    //   return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    // }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
