import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from "./message.model";

@Injectable({
  providedIn: 'root'
})
export class MessageHttp {
  constructor(private http: HttpClient) {
  }

  getAll(leadId: number): Observable<Message[]> {
    console.log(leadId);
    return this.http.get<Message[]>(`/api/linkedin-outreach/lead/${leadId}/message`);
  }
}
