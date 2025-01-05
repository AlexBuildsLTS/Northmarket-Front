export interface Advertisement {
  id: string;
  title: string;
  description: string;
  budget: number;
  status: 'active' | 'paused' | 'ended';
  impressions: number;
  clicks: number;
  ctr: number;
  sellerName: string;
  startDate: string;
  endDate: string;
  createdAt: string;
}

export interface AdvertisementRequest {
  title: string;
  description: string;
  budget: number;
  startDate?: string;
  endDate?: string;
}