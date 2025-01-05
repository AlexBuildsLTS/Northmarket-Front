import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import AdvertisementSection from '../../components/seller/AdvertisementSection';

const AdvertisementListPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Advertisement Campaigns</h1>
        <Link to="/dashboard/ads/create">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Campaign
          </Button>
        </Link>
      </div>

      <AdvertisementSection />
    </div>
  );
};

export default AdvertisementListPage;