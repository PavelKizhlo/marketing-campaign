import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lead } from "./lead.model";

@Injectable({
  providedIn: 'root'
})
export class LeadHttp {
  constructor(private http: HttpClient) {
  }

  getAllConversations(): Observable<Lead[]> {
    return this.http.get<Lead[]>('/api/linkedin-outreach/conversation');
  }

  getCountNewMessages(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>('/api/linkedin-outreach/conversation/count-new-messages');
  }

  getOneLead(id: number): Observable<Lead> {
    return this.http.get<Lead>(`/api/linkedin-outreach/lead/${id}`);
  }

  continueFlow(id: number, status: boolean, leadId: number) {
    return this.http.put<Lead>(`/api/linkedin-outreach/flow-lo-handler/continue/${id}`, {
      status,
      leadId
    });
  }
}
