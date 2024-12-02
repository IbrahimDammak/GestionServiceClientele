// src/pages/LaptopsRepairedPage.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const LaptopsRepairedPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [laptops, setLaptops] = useState([
    { id: 1, reference: 'XYZ456', client: 'Jane Smith', status: 'Repaired' },
    { id: 2, reference: 'ABC123', client: 'John Doe', status: 'Repaired' },
    { id: 3, reference: 'DEF789', client: 'Alice Brown', status: 'Repaired' },
  ]);

  // Filter laptops based on search query
  const filteredLaptops = laptops.filter((laptop) =>
    laptop.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
    laptop.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-gray-800 min-h-screen">
      {/* Sidebar */}
      
      <div className='flex h-screen'>
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="p-6 flex-grow">
        <h2 className="text-2xl font-bold text-white mb-6">Laptops Repaired</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search laptops..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded border border-gray-600 bg-white text-black"
          />
        </div>

        {/* List of Repaired Laptops */}
        <div className="space-y-4">
          {filteredLaptops.length > 0 ? (
            filteredLaptops.map((laptop) => (
              <div
                key={laptop.id}
                className="bg-white textblack p-4 rounded shadow"
              >
                <p>
                  <strong>Reference:</strong> {laptop.reference}
                </p>
                <p>
                  <strong>Client:</strong> {laptop.client}
                </p>
                <p>
                  <strong>Status:</strong> {laptop.status}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No laptops found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaptopsRepairedPage;
