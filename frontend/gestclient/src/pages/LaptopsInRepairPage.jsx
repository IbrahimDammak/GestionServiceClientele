// src/pages/LaptopsInRepairPage.jsx
import React from 'react';

const LaptopsInRepairPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Laptops in Repair</h2>
      {/* Display a list of laptops being repaired */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <p>Laptop Reference: XYZ456</p>
          <p>Client: Jane Smith</p>
          <p>Status: In Repair</p>
        </div>
        {/* Additional laptops in repair details can be added here */}
      </div>
    </div>
  );
};

export default LaptopsInRepairPage;
