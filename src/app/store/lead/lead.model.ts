export interface Lead {
  id: number;
  firstName: string;
  lastName: string;
  linkedinUuid: string;
  linkedinUuidSystem: string;
  createdAt: Date;
  updatedAt: Date;
  lastContactAt: string;
  lifeCycleStatus: string;
  marketingCampaignId: number;
  botId: number;
  lastMessage: string;
  jobTitle: string;
  countNewMessages: number;
  avatar: string;
  confirmLeadFlowItemId: number | null;
}
