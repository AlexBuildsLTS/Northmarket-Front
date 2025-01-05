import { supabase } from './supabaseClient';
import type { Advertisement, AdvertisementRequest } from '../types/advertisement';

export const advertisementService = {
  async createAdvertisement(data: AdvertisementRequest): Promise<Advertisement> {
    const { data: ad, error } = await supabase
      .from('advertisements')
      .insert([{
        title: data.title,
        description: data.description,
        budget: data.budget,
        start_date: data.startDate,
        end_date: data.endDate,
        status: 'active'
      }])
      .select()
      .single();

    if (error) throw error;
    return ad;
  },

  async getSellerAdvertisements(): Promise<Advertisement[]> {
    const { data: ads, error } = await supabase
      .from('advertisements')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return ads;
  },

  async updateAdvertisement(id: string, data: Partial<AdvertisementRequest>): Promise<void> {
    const { error } = await supabase
      .from('advertisements')
      .update({
        title: data.title,
        description: data.description,
        budget: data.budget,
        start_date: data.startDate,
        end_date: data.endDate
      })
      .eq('id', id);

    if (error) throw error;
  },

  async updateStatus(id: string, status: string): Promise<void> {
    const { error } = await supabase
      .from('advertisements')
      .update({ status })
      .eq('id', id);

    if (error) throw error;
  },

  async recordImpression(id: string): Promise<void> {
    const { error } = await supabase.rpc('increment_ad_impression', { ad_id: id });
    if (error) throw error;
  },

  async recordClick(id: string): Promise<void> {
    const { error } = await supabase.rpc('increment_ad_click', { ad_id: id });
    if (error) throw error;
  }
};