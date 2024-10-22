// src/pages/ClientsPage.jsx
import React from 'react';

const ClientsPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Clients</h2>
      {/* List all clients here */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <p>Client Name: John Doe</p>
          <p>Laptop Reference: ABC123</p>
          <p>Status: In Repair</p>
        </div>
        {/* Additional client details can be added here */}
      </div>
    </div>
  );
};

export default ClientsPage;
