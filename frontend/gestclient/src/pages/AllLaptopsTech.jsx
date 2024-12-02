import React, { useState } from "react";
import TechnicianSidebar from "../components/TechnicianSidebar";

const AllLaptopsTech = () => {
  // Sample data
  const [laptops, setLaptops] = useState([
    {
      id: 1,
      name: "Dell Inspiron",
      reference: "REF12345",
      status: "Waiting for Repair",
      symptoms: "The laptop won't power on.",
    },
    {
      id: 2,
      name: "HP EliteBook",
      reference: "REF67890",
      status: "Waiting for Repair",
      symptoms: "Overheating and shutting down randomly.",
    },
    {
      id: 3,
      name: "Lenovo ThinkPad",
      reference: "REF11223",
      status: "Waiting for Repair",
      symptoms: "Keyboard not functioning properly.",
    },
  ]);

  const [selectedLaptop, setSelectedLaptop] = useState(null);

  const handleShowMoreInfo = (laptopId) => {
    // Find the laptop by ID and set it as the selected laptop
    const laptop = laptops.find((laptop) => laptop.id === laptopId);
    setSelectedLaptop(laptop);
  };

  const closeInfoModal = () => {
    setSelectedLaptop(null); // Close the modal
  };

  return (
    <div className="flex bg-gray-800 min-h-screen">
      <div className="w-64 h-screen">
        <TechnicianSidebar />
      </div>
      <div className="flex-grow p-6">
        <h2 className="text-2xl font-bold text-white mb-6">
          Laptops Waiting for Repair
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {laptops.map((laptop) => (
            <div
              key={laptop.id}
              className="bg-white p-4 rounded shadow-lg text-black"
            >
              <h3 className="font-bold">{laptop.name}</h3>
              <p>Reference: {laptop.reference}</p>
              <p>Status: {laptop.status}</p>
              <button
                onClick={() => handleShowMoreInfo(laptop.id)}
                className="mt-4 bg-blue-600 text-white p-2 rounded"
              >
                Show More Info
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Info Modal */}
      {selectedLaptop && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeInfoModal}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">{selectedLaptop.name}</h3>
            <p className="mb-4">
              <strong>Reference:</strong> {selectedLaptop.reference}
            </p>
            <p className="mb-4">
              <strong>Symptoms:</strong> {selectedLaptop.symptoms}
            </p>
            <button
              onClick={closeInfoModal}
              className="bg-gray-400 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllLaptopsTech;
