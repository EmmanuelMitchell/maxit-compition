import React from 'react';
import { shops } from '../data/shops';
import { Smartphone, Phone } from 'lucide-react';

function Dashboard() {
  const androidShops = shops.filter(shop => shop.platform === 'android');
  const iphoneShops = shops.filter(shop => shop.platform === 'iphone');

  const getShopData = (shopId) => {
    const scanData = JSON.parse(localStorage.getItem('scanData') || '{}');
    return scanData[shopId] || { count: 0, phoneNumbers: [] };
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">QR Code Scan Dashboard</h1>
        
        {/* Android Shops */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Smartphone className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Android Shops</h2>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shop</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scans</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Numbers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QR URL</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {androidShops.map((shop) => {
                  const data = getShopData(shop.id);
                  return (
                    <tr key={shop.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{shop.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.count}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.phoneNumbers.length}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{`${window.location.origin}/scan/${shop.id}`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* iPhone Shops */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Phone className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">iPhone Shops</h2>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shop</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scans</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Numbers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QR URL</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {iphoneShops.map((shop) => {
                  const data = getShopData(shop.id);
                  return (
                    <tr key={shop.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{shop.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.count}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.phoneNumbers.length}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{`${window.location.origin}/scan/${shop.id}`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;