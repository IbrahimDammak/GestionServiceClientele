// src/pages/LaptopsInRepairPage.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const LaptopsInRepairPage = () => {
  const [laptops, setLaptops] = useState([
    { id: 1, ref: 'XYZ456', client: 'Jane Smith', status: 'In Repair' },
    { id: 2, ref: 'ABC123', client: 'John Doe', status: 'In Repair' },
    { id: 3, ref: 'DEF789', client: 'Alice Brown', status: 'In Repair' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [currentLaptop, setCurrentLaptop] = useState(null);

  // Filter laptops based on search query
  const filteredLaptops = laptops.filter((laptop) =>
    laptop.ref.toLowerCase().includes(searchQuery.toLowerCase()) ||
    laptop.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle Modify button click
  const handleModifyClick = (laptop) => {
    setCurrentLaptop(laptop); // Set the laptop being modified
    setShowPopup(true); // Show the popup
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Update the laptop in the list
    setLaptops(laptops.map((laptop) =>
      laptop.id === currentLaptop.id ? currentLaptop : laptop
    ));
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="flex bg-gray-800 min-h-screen">
      {/* Sidebar */}
      <div className='flex h-screen'>
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="p-6 flex-grow w-64">
        <h2 className="text-2xl font-bold text-white mb-6">Laptops in Repair</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search laptops or clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded border border-gray-600 bg-white text-black"
          />
        </div>

        {/* List of Laptops in Repair */}
        <div className="space-y-4">
          {filteredLaptops.map((laptop) => (
            <div
              key={laptop.id}
              className="bg-white text-black p-4 rounded shadow"
            >
              <p><strong>Laptop Reference:</strong> {laptop.ref}</p>
              <p><strong>Client:</strong> {laptop.client}</p>
              <p><strong>Status:</strong> {laptop.status}</p>
              {/* Modify Button */}
              <button
                onClick={() => handleModifyClick(laptop)}
                className="mt-2 bg-blue-600 hover:bg-blue-500 text-white p-2 rounded"
              >
                Modify
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h3 className="text-xl font-bold mb-4">Modify Laptop Details</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Laptop Reference</label>
                <input
                  type="text"
                  value={currentLaptop.ref}
                  onChange={(e) =>
                    setCurrentLaptop({ ...currentLaptop, ref: e.target.value })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Client</label>
                <input
                  type="text"
                  value={currentLaptop.client}
                  onChange={(e) =>
                    setCurrentLaptop({ ...currentLaptop, client: e.target.value })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Status</label>
                <input
                  type="text"
                  value={currentLaptop.status}
                  onChange={(e) =>
                    setCurrentLaptop({ ...currentLaptop, status: e.target.value })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="bg-red-600 hover:bg-red-500 text-white p-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 text-white p-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaptopsInRepairPage;
