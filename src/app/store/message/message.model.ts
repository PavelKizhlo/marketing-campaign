import { Lead } from "../lead/lead.model";

export enum MessageTypes {
  incoming = 'incoming',
  outgoingManual = 'outgoingManual',
  outgoingAutomation = 'outgoingAutomation',
  log = 'log',
}
export interface Message {
  id: number;
  hash: string;
  message: string;
  leadId: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  lead: Lead | undefined;
  type: MessageTypes
}
