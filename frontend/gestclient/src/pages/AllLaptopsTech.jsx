import React, { useState, useEffect } from "react";
import TechnicianSidebar from "../components/TechnicianSidebar";
import laptopService from "../service/laptopService";
import { useNavigate } from "react-router-dom"; // Import for navigation

const AllLaptopsTech = () => {
  const [laptops, setLaptops] = useState([]);
  const [selectedLaptop, setSelectedLaptop] = useState(null);
  const navigate = useNavigate();

  // Fetch laptops data using the service
  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const data = await laptopService.getEtatLaptopByClientId();
        setLaptops(data);
      } catch (error) {
        console.error("Error fetching laptop data:", error);
      }
    };

    fetchLaptops();
  }, []);

  const handleShowMoreInfo = (laptopId) => {
    const laptop = laptops.find((laptop) => laptop.id === laptopId);
    setSelectedLaptop(laptop);
  };

  const handleSendToRepair = (reparationDemandeId) => {
    navigate(`/technician/create-repair-sheet/${reparationDemandeId}`);
  };

  const closeInfoModal = () => {
    setSelectedLaptop(null);
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
        {laptops.length > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            {laptops.map((laptop) => (
              <div
                key={laptop.id}
                className="bg-white p-4 rounded shadow-lg text-black"
              >
                <h3 className="font-bold">{laptop.appareil.marque} {laptop.appareil.modele}</h3>
                <p><strong>Client:</strong> {laptop.client.nom}</p>
                <p><strong>Status:</strong> {laptop.etat}</p>
                <button
                  onClick={() => handleShowMoreInfo(laptop.id)}
                  className="mt-4 bg-blue-600 text-white p-2 rounded"
                >
                  Show More Info
                </button>
                <button
                  onClick={() => handleSendToRepair(laptop.id)}
                  className=" bg-green-600 text-white p-2 rounded"
                >
                  Send to Repair
                </button>  
              </div>
              
            ))}
          </div>
        ) : (
          <p className="text-white">No laptops found.</p>
        )}
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
            <h3 className="text-xl font-bold mb-4">
              {selectedLaptop.appareil.marque} {selectedLaptop.appareil.modele}
            </h3>
            <p className="mb-4">
              <strong>Serial Number:</strong> {selectedLaptop.appareil.numSerie}
            </p>
            <p className="mb-4">
              <strong>Client:</strong> {selectedLaptop.client.nom}, {selectedLaptop.client.adresse}
            </p>
            <p className="mb-4">
              <strong>Symptoms:</strong> {selectedLaptop.symptomesPanne}
            </p>
            <p className="mb-4">
              <strong>Status:</strong> {selectedLaptop.etat}
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


// 