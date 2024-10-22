// src/components/ClientItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ClientItem = ({ id, name, laptopRef, status }) => {
  return (
    <div className="flex justify-between p-2 bg-gray-700 rounded bg-opacity-40">
      <div>
        <p>Client Name: {name}</p>
        <p>Laptop Ref: {laptopRef}</p>
        <p>Status: {status}</p>
      </div>
      <Link to={`/client-details/${id}`} className="text-blue-400 hover:text-blue-600">
        More Info
      </Link>
    </div>
  );
};

export default ClientItem;
