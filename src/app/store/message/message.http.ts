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

  getAll(): Observable<Message[]> {
    return this.http.get<Message[]>('/api/linkedin-outreach/conversation');
  }
}
