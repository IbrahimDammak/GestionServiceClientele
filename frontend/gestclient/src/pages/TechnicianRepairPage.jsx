import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TechnicianSidebar from "../components/TechnicianSidebar";
import RepairSheetForm from "../components/RepairSheetForm";
import RepairInvoice from "../components/RepairInvoice";
import { getDemandeReparationById } from "../service/ReparationFactrueApiService";

const TechnicianRepairPage = () => {
  const { reparationDemandeId } = useParams();
  const [demandeReparation, setDemandeReparation] = useState(null);
  const [componentsChanged, setComponentsChanged] = useState([""]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDemandeReparation = async () => {
      try {
        console.log("Fetching demande de reparation for ID:", reparationDemandeId);
        const response = await getDemandeReparationById(reparationDemandeId);
        if (response.data) {
          console.log("Fetched data:", response.data);
          setDemandeReparation(response.data);
        } else {
          setError("No data returned from API.");
        }
      } catch (error) {
        console.error("Error fetching demande de reparation:", error);
        setError("Failed to load repair details.");
      }
    };

    fetchDemandeReparation();
  }, [reparationDemandeId]);

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  if (!demandeReparation) {
    return <p className="text-white">Loading repair details...</p>;
  }

  return (
    <div className="flex h-screen bg-gray-900">
      <TechnicianSidebar />
      <div className="flex-grow p-6 pt-20 flex">
        <div className="flex w-full space-x-8">
          <div className="w-2/3 rounded-lg shadow-lg bg-gray-800 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Repair Sheet</h2>
            <RepairSheetForm
              demandeReparation={demandeReparation}
              componentsChanged={componentsChanged}
              setComponentsChanged={setComponentsChanged}
            />
          </div>

          <div className="w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Repair Invoice</h2>
            <RepairInvoice
              selectedLaptop={`${demandeReparation.appareil.marque} ${demandeReparation.appareil.modele}`}
              numSerie={demandeReparation.appareil.numSerie}
              componentsChanged={componentsChanged}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianRepairPage;
