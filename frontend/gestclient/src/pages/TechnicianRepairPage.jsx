// src/pages/TechnicianRepairPage.jsx
import React from 'react';
import TechnicianSidebar from '../components/TechnicianSidebar';
import RepairSheetForm from '../components/RepairSheetForm';

const TechnicianRepairPage = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <TechnicianSidebar />
      
      {/* Main content area */}
      <div className="flex-grow p-6 pt-20">
        <RepairSheetForm />
      </div>
    </div>
  );
};

export default TechnicianRepairPage;
