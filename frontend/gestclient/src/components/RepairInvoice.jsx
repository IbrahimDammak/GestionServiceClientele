// src/components/RepairInvoice.jsx
import React from 'react';

const RepairInvoice = ({ selectedLaptop, hoursSpent, repairDescription, componentsChanged }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Repair Invoice</h3>
      <div className="space-y-2">
        <div>
          <p className="font-semibold">Laptop:</p>
          <p>{selectedLaptop ? selectedLaptop : 'No laptop selected'}</p>
        </div>
        <div>
          <p className="font-semibold">Hours Spent:</p>
          <p>{hoursSpent ? `${hoursSpent} hours` : 'Not specified'}</p>
        </div>
        <div>
          <p className="font-semibold">Repair Description:</p>
          <p>{repairDescription ? repairDescription : 'No description provided'}</p>
        </div>
        <div>
          <p className="font-semibold">Components Changed:</p>
          <ul>
            {componentsChanged.length > 0 ? (
              componentsChanged.map((component, index) => (
                <li key={index}>{component}</li>
              ))
            ) : (
              <p>No components changed</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RepairInvoice;
