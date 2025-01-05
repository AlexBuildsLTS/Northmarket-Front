import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { advertisementService } from '../../services/advertisementService';
import type { AdvertisementRequest } from '../../types/advertisement';

const CreateAdvertisementForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AdvertisementRequest>({
    title: '',
    description: '',
    budget: 0,
    startDate: '',
    endDate: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await advertisementService.createAdvertisement(formData);
      navigate('/dashboard/ads');
    } catch (error) {
      console.error('Failed to create advertisement:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Campaign Title
        </label>
        <Input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg p-2.5 focus:ring-2 focus:ring-emerald-500 min-h-[100px]"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Budget
        </label>
        <Input
          type="number"
          min="0"
          step="0.01"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: parseFloat(e.target.value) })}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Start Date
          </label>
          <Input
            type="datetime-local"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            End Date
          </label>
          <Input
            type="datetime-local"
            value={formData.endDate}
            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="button" variant="secondary" onClick={() => navigate(-1)}>
          Cancel
        </Button>
        <Button type="submit" className="flex-1">
          Create Campaign
        </Button>
      </div>
    </form>
  );
};

export default CreateAdvertisementForm;