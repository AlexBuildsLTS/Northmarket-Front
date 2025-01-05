import React from 'react';
import CreateAdvertisementForm from '../../components/seller/CreateAdvertisementForm';

const CreateAdvertisementPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white mb-8">Create Advertisement Campaign</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-navy-800 rounded-lg p-6">
          <CreateAdvertisementForm />
        </div>
      </div>
    </div>
  );
};

export default CreateAdvertisementPage;