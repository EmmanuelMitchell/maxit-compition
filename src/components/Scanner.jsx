import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PhoneForm from './PhoneForm';
import { shops } from '../data/shops';

function Scanner() {
  const { shopId } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(true);

  const shop = shops.find(s => s.id === shopId);

  if (!shop) {
    return <div>Invalid shop ID</div>;
  }

  const handlePhoneSubmit = (phoneNumber) => {
    // Get existing data
    const scanData = JSON.parse(localStorage.getItem('scanData') || '{}');
    
    // Update data for this shop
    const shopData = scanData[shopId] || { count: 0, phoneNumbers: [] };
    shopData.count += 1;
    if (!shopData.phoneNumbers.includes(phoneNumber)) {
      shopData.phoneNumbers.push(phoneNumber);
    }
    
    // Save updated data
    scanData[shopId] = shopData;
    localStorage.setItem('scanData', JSON.stringify(scanData));
    
    // Redirect to store
    window.location.href = shop.url;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {showForm && <PhoneForm shopId={shopId} onSubmit={handlePhoneSubmit} />}
    </div>
  );
}

export default Scanner;