// src/pages/LaptopsRepairedPage.jsx
import React from 'react';

const LaptopsRepairedPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Laptops Repaired</h2>
      {/* Display a list of laptops that have been repaired */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <p>Laptop Reference: DEF789</p>
          <p>Client: John Doe</p>
          <p>Status: Repaired</p>
          <p>Completion Date: 2024-10-18</p>
        </div>
        {/* Additional repaired laptop details can be added here */}
      </div>
    </div>
  );
};

export default LaptopsRepairedPage;
