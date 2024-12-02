// src/pages/TechnicianRepairPage.jsx
import React, { useState } from 'react';
import TechnicianSidebar from '../components/TechnicianSidebar';
import RepairSheetForm from '../components/RepairSheetForm';
import RepairInvoice from '../components/RepairInvoice';

const TechnicianRepairPage = () => {
  const [selectedLaptop, setSelectedLaptop] = useState('');
  const [hoursSpent, setHoursSpent] = useState('');
  const [repairDescription, setRepairDescription] = useState('');
  const [componentsChanged, setComponentsChanged] = useState(['']);

  // Handlers for form data updates
  const handleComponentChange = (index, value) => {
    const updatedComponents = [...componentsChanged];
    updatedComponents[index] = value;
    setComponentsChanged(updatedComponents);
  };

  const addComponentField = () => {
    setComponentsChanged([...componentsChanged, '']);
  };

  const deleteComponentField = (index) => {
    setComponentsChanged(componentsChanged.filter((_, i) => i !== index));
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <TechnicianSidebar />

      {/* Main content area */}
      <div className="flex-grow p-6 pt-20 flex">
        <div className="flex w-full space-x-8">
          {/* Left column - Repair Sheet Form */}
          <div className="w-2/3 rounded-lg shadow-lg bg-gray-800 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Repair Sheet</h2>
            <RepairSheetForm
              selectedLaptop={selectedLaptop}
              setSelectedLaptop={setSelectedLaptop}
              hoursSpent={hoursSpent}
              setHoursSpent={setHoursSpent}
              repairDescription={repairDescription}
              setRepairDescription={setRepairDescription}
              componentsChanged={componentsChanged}
              handleComponentChange={handleComponentChange}
              addComponentField={addComponentField}
              deleteComponentField={deleteComponentField} // Pass delete function
            />
          </div>

          {/* Right column - Real-Time Invoice */}
          <div className="w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Repair Invoice</h2>
            <RepairInvoice
              selectedLaptop={selectedLaptop}
              hoursSpent={hoursSpent}
              repairDescription={repairDescription}
              componentsChanged={componentsChanged}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianRepairPage;
