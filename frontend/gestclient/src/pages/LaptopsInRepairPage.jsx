import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import laptopService from "../service/laptopService";

// Parser Function
const parseLaptopsResponse = (data) => {
  try {
    if (Array.isArray(data)) {
      return data.map((item) => ({
        id: item.id || null,
        numSerie: item.appareil?.numSerie || "Unknown Serial",
        etat: item.etat || "Unknown Status",
        clientName: item.client?.nom || "No Client Assigned",
        symptoms: item.symptomesPanne || "No Symptoms Provided",
      }));
    } else {
      console.error("Unexpected data format:", data);
      return [];
    }
  } catch (error) {
    console.error("Error parsing laptops response:", error);
    return [];
  }
};

const LaptopsInRepairPage = () => {
  const [laptops, setLaptops] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const data = await laptopService.getEtatLaptopByClientId();
        console.log("Raw API response:", data);
        const parsedData = parseLaptopsResponse(data);
        console.log("Parsed laptops data:", parsedData);
        setLaptops(parsedData);
      } catch (error) {
        console.error("Error fetching laptops:", error);
        setLaptops([]);
      }
    };

    fetchLaptops();
  }, []);

  const filteredLaptops = laptops.filter(
    (laptop) =>
      laptop.etat === "non réparé" &&
      (laptop.numSerie || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-gray-800 min-h-screen">
      <div className="flex h-screen">
        <Sidebar />
      </div>
      <div className="p-6 flex-grow w-64">
        <h2 className="text-2xl font-bold text-white mb-6">Laptops in Repair</h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search laptops by reference..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded border border-gray-600 bg-white text-black"
          />
        </div>

        <div className="space-y-4">
          {filteredLaptops.length > 0 ? (
            filteredLaptops.map((laptop) => (
              <div key={laptop.id} className="bg-white text-black p-4 rounded shadow">
                <p>
                  <strong>Laptop Reference:</strong> {laptop.numSerie}
                </p>
                <p>
                  <strong>Client Name:</strong> {laptop.clientName}
                </p>
                <p>
                  <strong>Status:</strong> {laptop.etat}
                </p>
                <p>
                  <strong>Symptoms:</strong> {laptop.symptoms}
                </p>
              </div>
            ))
          ) : (
            <p className="text-white">No laptops with status "non réparé" found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaptopsInRepairPage;

{/*  zou baram baram akra maghir stress byeeee */}