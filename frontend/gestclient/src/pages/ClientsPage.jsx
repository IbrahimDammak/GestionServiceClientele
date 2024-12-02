import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const ClientsPage = () => {
  const [clients, setClients] = useState([
    { id: 1, name: 'John Doe', laptopRef: 'ABC123', status: 'In Repair' },
    { id: 2, name: 'Jane Smith', laptopRef: 'XYZ789', status: 'Repaired' },
    { id: 3, name: 'Alice Brown', laptopRef: 'DEF456', status: 'In Repair' },
    { id: 4, name: 'Bob White', laptopRef: 'GHI012', status: 'Pending' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);

  // Filter clients based on search query
  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle Modify button click
  const handleModifyClick = (client) => {
    setCurrentClient(client); // Set the client being modified
    setShowPopup(true); // Show the popup
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Update the client in the list
    setClients(clients.map(client =>
      client.id === currentClient.id ? currentClient : client
    ));
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className=" flex w-64 ">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6 bg-gray-100 bg-opacity-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Clients</h2>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>

        {/* List of Clients */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredClients.map((client) => (
            <div key={client.id} className="bg-white p-4 rounded shadow">
              <p><strong>Client Name:</strong> {client.name}</p>
              <p><strong>Laptop Reference:</strong> {client.laptopRef}</p>
              <p><strong>Status:</strong> {client.status}</p>
              {/* Modify Button */}
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

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h3 className="text-xl font-bold mb-4">Modify Client</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Client Name</label>
                <input
                  type="text"
                  value={currentClient.name}
                  onChange={(e) =>
                    setCurrentClient({ ...currentClient, name: e.target.value })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Laptop Reference</label>
                <input
                  type="text"
                  value={currentClient.laptopRef}
                  onChange={(e) =>
                    setCurrentClient({ ...currentClient, laptopRef: e.target.value })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Status</label>
                <input
                  type="text"
                  value={currentClient.status}
                  onChange={(e) =>
                    setCurrentClient({ ...currentClient, status: e.target.value })
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
