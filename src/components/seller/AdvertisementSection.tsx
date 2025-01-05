import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { advertisementService } from '../../services/advertisementService';
import type { Advertisement } from '../../types/advertisement';

const AdvertisementSection = () => {
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAds = async () => {
      try {
        const data = await advertisementService.getSellerAdvertisements();
        setAds(data);
      } catch (error) {
        console.error('Failed to load advertisements:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAds();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Your Advertisements</h2>
        <Link to="/dashboard/ads/create">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Ad
          </Button>
        </Link>
      </div>

      {ads.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          No advertisements yet. Create your first campaign!
        </div>
      ) : (
        <div className="bg-navy-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                    Campaign
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                    Budget
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                    Impressions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                    Clicks
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                    CTR
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-700">
                {ads.map((ad) => (
                  <tr key={ad.id} className="hover:bg-navy-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {ad.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        ad.status === 'active' 
                          ? 'bg-green-100 text-green-800'
                          : ad.status === 'paused'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {ad.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      ${ad.budget}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {ad.impressions.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {ad.clicks.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {ad.ctr}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertisementSection;