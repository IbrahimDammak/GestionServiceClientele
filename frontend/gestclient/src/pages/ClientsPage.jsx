import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import ClientPageService from '../service/ClientPageService';

const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);

  // Fetch all clients from the backend when the component mounts
  useEffect(() => {
    ClientPageService.getAllClients()
      .then((data) => setClients(data))
      .catch((error) => console.error('Error fetching clients:', error));
  }, []);

  // Filter clients based on search query
  const filteredClients = clients.filter(client =>
    client.nom.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle Modify button click
  const handleModifyClick = (client) => {
    setCurrentClient(client);
    setShowPopup(true);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Save or update the client
    ClientPageService.saveClient(currentClient)
      .then((updatedClient) => {
        setClients(clients.map(client =>
          client.id === updatedClient.id ? updatedClient : client
        ));
        setShowPopup(false);
      })
      .catch((error) => console.error('Error saving client:', error));
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="flex w-64">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-auto p-6 bg-gray-100 bg-opacity-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Clients</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredClients.map((client) => (
            <div key={client.id} className="bg-white p-4 rounded shadow">
              <p><strong>Client Name:</strong> {client.nom}</p>
              <p><strong>Adresse:</strong> {client.adresse}</p>
              <p><strong>Num telephone:</strong> {client.numTel}</p>
              <button
                onClick={() => handleModifyClick(client)}
                className="mt-2 bg-blue-600 hover:bg-blue-500 text-white p-2 rounded"
              >
                Modify
              </button>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h3 className="text-xl font-bold mb-4">Modify Client</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Nom</label>
                <input
                  type="text"
                  value={currentClient.name}
                  onChange={(e) =>
                    setCurrentClient({ ...currentClient, nom: e.target.value })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Adresse</label>
                <input
                  type="text"
                  value={currentClient.laptopRef}
                  onChange={(e) =>
                    setCurrentClient({ ...currentClient, adresse: e.target.value })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Num Telephone</label>
                <input
                  type="text"
                  value={currentClient.status}
                  onChange={(e) =>
                    setCurrentClient({ ...currentClient, numTel: e.target.value })
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

export default ClientsPage;
