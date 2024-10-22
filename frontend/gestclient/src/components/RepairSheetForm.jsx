// src/components/RepairSheetForm.jsx
import React, { useState } from 'react';

const RepairSheetForm = () => {
  // Sample data for laptop options
  const laptopOptions = [
    { name: 'Lenovo', ref: 'ABC123' },
    { name: 'HP', ref: 'XYZ789' },
    { name: 'Dell', ref: 'DEF456' },
    { name: 'Acer', ref: 'GHI012' },
  ];

  // Sample data for component options
  const componentOptions = ['Battery', 'Hard Drive', 'Motherboard', 'RAM', 'Screen'];

  // State for form fields
  const [selectedLaptop, setSelectedLaptop] = useState('');
  const [hoursSpent, setHoursSpent] = useState('');
  const [repairDescription, setRepairDescription] = useState('');
  const [componentsChanged, setComponentsChanged] = useState(['']);

  // Handler for adding more component dropdowns
  const addMoreComponent = () => {
    setComponentsChanged([...componentsChanged, '']);
  };

  // Handler for updating component values
  const handleComponentChange = (index, value) => {
    const updatedComponents = [...componentsChanged];
    updatedComponents[index] = value;
    setComponentsChanged(updatedComponents);
  };

  // Handler for submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Repair Sheet Submitted', {
      selectedLaptop,
      hoursSpent,
      repairDescription,
      componentsChanged,
    });
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Repair Sheet</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Dropdown for Laptop selection */}
        <div>
          <label className="block mb-2">Select Laptop:</label>
          <select
            value={selectedLaptop}
            onChange={(e) => setSelectedLaptop(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
          >
            <option value="">Select a laptop</option>
            {laptopOptions.map((laptop, index) => (
              <option key={index} value={`${laptop.name}-${laptop.ref}`}>
                {laptop.name} - {laptop.ref}
              </option>
            ))}
          </select>
        </div>

        {/* Input for Hours Spent */}
        <div>
          <label className="block mb-2">Number of Hours Spent:</label>
          <input
            type="number"
            value={hoursSpent}
            onChange={(e) => setHoursSpent(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
            placeholder="Enter hours spent on repair"
          />
        </div>

        {/* Textarea for Repair Description */}
        <div>
          <label className="block mb-2">Repair Description:</label>
          <textarea
            value={repairDescription}
            onChange={(e) => setRepairDescription(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
            placeholder="Describe the repair..."
          />
        </div>

        {/* Dropdown for Components Changed */}
        <div>
          <label className="block mb-2">Component Changed:</label>
          {componentsChanged.map((component, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <select
                value={component}
                onChange={(e) => handleComponentChange(index, e.target.value)}
                className="w-full p-2 bg-gray-700 text-white rounded"
              >
                <option value="">Select a component</option>
                {componentOptions.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <button
            type="button"
            onClick={addMoreComponent}
            className="bg-green-600 hover:bg-green-500 text-white p-2 rounded"
          >
            Add More
          </button>
        </div>

        {/* Buttons for Save and Cancel */}
        <div className="flex space-x-4">
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded">
            Save
          </button>
          <button type="button" className="bg-red-600 hover:bg-red-500 text-white p-2 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RepairSheetForm;
