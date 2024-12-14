import React, { useState } from "react";
import { clientService, deviceService, repairService } from "../service/ApiServiceAddDemandeReparation";
import Sidebar from "../components/Sidebar";

const AddClientPage = () => {
  const [formData, setFormData] = useState({
    nom: "",
    numtel: "",
    adresse: "",
    marque: "",
    modele: "",
    numSerie: "",
    dateDepotAppareil: "",
    datePreuveRep: "",
    symptomesPanne: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddClient = async () => {
    const {
      nom,
      numtel,
      adresse,
      marque,
      modele,
      numSerie,
      dateDepotAppareil,
      datePreuveRep,
      symptomesPanne,
    } = formData;

    if (!nom || !numtel || !adresse || !marque || !modele || !numSerie || !dateDepotAppareil || !datePreuveRep || !symptomesPanne) {
      setError("Please fill all fields correctly.");
      setIsPopupVisible(true);
      return;
    }

    try {
      // Step 1: Add Client
      const client = await clientService.addClient({ nom, numTel: numtel, adresse });
      const clientId = client.id;

      // Step 2: Add Device
      const device = await deviceService.addDevice({
        client: { id: clientId },
        marque,
        modele,
        numSerie,
      });
      const deviceId = device.id;

      // Step 3: Add Repair Request
      await repairService.addRepairRequest({
        client: { id: clientId },
        appareil: { id: deviceId },
        dateDepotAppareil,
        datePreuveRep,
        etat: "non réparé", // Default value
        symptomesPanne,
      });

      setSuccessMessage("Client, device, and repair request added successfully!");
      setFormData({
        nom: "",
        numtel: "",
        adresse: "",
        marque: "",
        modele: "",
        numSerie: "",
        dateDepotAppareil: "",
        datePreuveRep: "",
        symptomesPanne: "",
      });
      setError("");
    } catch (err) {
      console.error(err);
      setError(err);
      setIsPopupVisible(true);
    }
  };

  const handleCancel = () => {
    setFormData({
      nom: "",
      numtel: "",
      adresse: "",
      marque: "",
      modele: "",
      numSerie: "",
      dateDepotAppareil: "",
      datePreuveRep: "",
      symptomesPanne: "",
    });
    setError("");
    setSuccessMessage("");
    setIsPopupVisible(false);
  };

  return (
    <div className="flex h-screen bg-gray-800">
      <Sidebar />
      <div className="flex-grow p-6 w-full pt-20">
        <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-6">Add Client</h2>
          <form className="space-y-4">
            {["nom", "numtel", "adresse", "marque", "modele", "numSerie"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-black rounded"
                  required
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium mb-1">Fault Description</label>
              <textarea
                name="symptomesPanne"
                value={formData.symptomesPanne}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded"
                rows="3"
                required
              />
            </div>

            {["dateDepotAppareil", "datePreuveRep"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1">
                  {field === "dateDepotAppareil" ? "Date Depot" : "Date Prevue Rep"}
                </label>
                <input
                  type="date"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-black rounded"
                  required
                />
              </div>
            ))}

            <div className="flex space-x-4 mt-6">
              <button
                type="button"
                onClick={handleAddClient}
                className="px-4 py-2 bg-green-600 rounded hover:bg-green-500"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-red-600 rounded hover:bg-red-500"
              >
                Cancel
              </button>
            </div>
          </form>
          {successMessage && <p className="mt-4 text-green-500 font-semibold">{successMessage}</p>}
        </div>

        {isPopupVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">Error</h3>
              <p>{error}</p>
              <button
                onClick={() => setIsPopupVisible(false)}
                className="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-500"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddClientPage;
