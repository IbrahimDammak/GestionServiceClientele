import React, { useState, useEffect } from 'react';
import { getComponentOptions, createFacture, createReparation } from '../service/ReparationFactrueApiService';

const RepairSheetForm = ({ demandeReparation, componentsChanged, setComponentsChanged }) => {
  const [componentOptions, setComponentOptions] = useState([]);
  const [hoursSpent, setHoursSpent] = useState('');
  const [repairDescription, setRepairDescription] = useState('');

  // Fetch Component Options
  useEffect(() => {
    const fetchComponentOptions = async () => {
      try {
        console.log("Fetching component options...");
        const response = await getComponentOptions();
        console.log("API Response (Component Options):", response.data);
        if (Array.isArray(response.data) && response.data.length > 0) {
          setComponentOptions(response.data);
          console.log("Component Options Set:", response.data);
        } else {
          console.error("No component options returned.");
        }
      } catch (error) {
        console.error("Error fetching component options:", error);
      }
    };

    fetchComponentOptions();
  }, []);

  const addMoreComponent = () => {
    setComponentsChanged([...componentsChanged, '']);
    console.log("Components Changed (After Adding):", componentsChanged);
  };

  const handleComponentChange = (index, value) => {
    const updatedComponents = [...componentsChanged];
    updatedComponents[index] = value;
    setComponentsChanged(updatedComponents);
    console.log("Components Changed (After Update):", componentsChanged);
  };

  const deleteComponent = (index) => {
    const updatedComponents = componentsChanged.filter((_, i) => i !== index);
    setComponentsChanged(updatedComponents);
    console.log("Components Changed (After Deletion):", componentsChanged);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!demandeReparation) {
      alert('Demande de reparation not loaded.');
      return;
    }
  
    const reparationData = {
      description: repairDescription, // Repair description
      // Hourly labor rate (set as a constant or from user input)
      tempsMO: parseFloat(hoursSpent), // Hours spent on labor
      demandeReparation: {
        id: demandeReparation.id, // Link to demande reparation
        client: {
          id: demandeReparation.client.id,
        },
        appareil: {
          id: demandeReparation.appareil.id,
        },
      },
      reparationPieces: componentsChanged
        .filter((component) => component !== '') // Ensure no empty selections
        .map((component) => ({
          id: componentOptions.find((option) => option.nom === component)?.id, // Find the ID for the component
          qte: 1, // Set default quantity or allow user input
        })),
    };
  
    console.log("Submitting Reparation Data:", reparationData);
  
    try {
      const reparationResponse = await createReparation(reparationData);
      const reparationId = reparationResponse.id;
  
      // Create facture
      const factureData = {
        reparationId
      };
  
      await createFacture(factureData);
  
      alert('Reparation and Facture created successfully!');
    } catch (error) {
      console.error("Error submitting repair sheet:", error);
      alert('Failed to create reparation or facture.');
    }
  };
  



  if (!demandeReparation) {
    return <p className="text-white">Repair details not provided.</p>;
  }

  return (
    <div className="text-white p-10 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Repair Sheet</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Laptop Details */}
        <div>
          <label className="block mb-2">Selected Laptop:</label>
          <input
            type="text"
            value={`${demandeReparation?.appareil?.marque || ''} ${demandeReparation?.appareil?.modele || ''}`}
            readOnly
            className="w-full p-2 bg-gray-700 text-gray-400 rounded cursor-not-allowed"
          />
        </div>

        {/* Serial Number */}
        <div>
          <label className="block mb-2">Serial Number:</label>
          <input
            type="text"
            value={demandeReparation?.appareil?.numSerie || ''}
            readOnly
            className="w-full p-2 bg-gray-700 text-gray-400 rounded cursor-not-allowed"
          />
        </div>

        {/* Hours Spent */}
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

        {/* Repair Description */}
        <div>
          <label className="block mb-2">Repair Description:</label>
          <textarea
            value={repairDescription}
            onChange={(e) => setRepairDescription(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
            placeholder="Enter repair description"
          />
        </div>

        {/* Components Changed */}
        {componentsChanged.map((component, index) => (
          <div key={index} className="flex items-center gap-2">
            <select
              value={component}
              onChange={(e) => handleComponentChange(index, e.target.value)}
              className="p-2 bg-gray-700 text-white rounded w-full"
            >
              <option value="">Select a component</option>
              {componentOptions?.map((option) => (
                <option key={option.id} value={option.nom}>
                  {option.nom}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => deleteComponent(index)}
              className="bg-red-600 p-2 rounded text-white"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addMoreComponent}
          className="bg-blue-600 p-2 rounded text-white"
        >
          Add Component
        </button>

        <button type="submit" className="bg-green-600 p-2 rounded text-white w-full">
          Submit Repair Sheet
        </button>
      </form>
    </div>
  );
};

export default RepairSheetForm;
