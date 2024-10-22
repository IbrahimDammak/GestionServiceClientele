// src/components/TechnicianDashboard.jsx
import React from 'react';
import TechnicianSidebar from './TechnicianSidebar';
import AllLaptopsSection from './AllLaptopsSection';
import LaptopsInRepairSection from './LaptopsInRepairSection';
import NotificationsSection from './NotificationsSection';

const TechnicianDashboard = () => {
  const laptops = [
    { id: 1, ref: 'ABC123', status: 'In Repair', description: 'Screen issue' },
    { id: 2, ref: 'XYZ789', status: 'Awaiting Parts', description: 'Battery replacement' },
    // Add more laptop entries as needed
  ];

  return (
    <div className="flex h-screen bg-blue-950">
      <TechnicianSidebar />
      <div className="grid grid-cols-4 gap-6 p-6 w-full pt-20 ml-64">
        <div className="col-span-3 h-full">
          <AllLaptopsSection laptops={laptops} />
        </div>
        <div className="col-span-1 flex flex-col space-y-6 h-full">
          <NotificationsSection />
          <LaptopsInRepairSection />
        </div>
      </div>
    </div>
  );
};

export default TechnicianDashboard;
