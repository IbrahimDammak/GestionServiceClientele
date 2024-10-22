// src/pages/ClientDetails.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
// import { useParams } from 'react-router-dom';

const ClientDetails = () => {
//   const { id } = useParams();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
        <Sidebar/>
      <h2 className="text-2xl font-bold mb-4">Client Details</h2>
      {/* Fetch and display details for client with the given ID */}
      <div className="bg-white p-4 rounded shadow">
        <p>Client Name: John Doe</p>
        <p>Laptop Reference: ABC123</p>
        <p>Status: In Repair</p>
        <p>Repair Start Date: 2024-10-15</p>
        <p>Estimated Completion Date: 2024-10-25</p>
        {/* Additional client details can be added here */}
      </div>
    </div>
  );
};

export default ClientDetails;
