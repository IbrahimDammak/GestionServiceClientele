// src/components/ClientsSection.jsx
import React from 'react';
import ClientItem from './ClientItem';

const ClientsSection = ({ clients }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded bg-opacity-40">
      <h3 className="text-xl font-bold mb-4">All Clients</h3>
      <div className="space-y-4">
        {clients.map((client) => (
          <ClientItem 
            key={client.client.id} 
            id={client.client.id} 
            name={client.client.nom} 
            laptopRef={client.appareil.numSerie} 
            status={client.etat} 
          />
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
