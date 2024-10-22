// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col space-y-6">
      <h2 className="text-2xl font-bold p-4">Dep Client</h2>
      <nav className="flex flex-col p-4 space-y-4">
        <Link to="/clients" className="hover:bg-gray-700 p-2 rounded">All Clients</Link>
        <Link to="/laptops-in-repair" className="hover:bg-gray-700 p-2 rounded">Laptops in Repair</Link>
        <Link to="/notifications" className="hover:bg-gray-700 p-2 rounded">Notifications</Link>
        <Link to="/laptops-repaired" className="hover:bg-gray-700 p-2 rounded">Laptops Repaired</Link>
        <Link to="/add-client" className="mt-auto hover:bg-green-500 p-2 rounded bg-green-600 text-center">Add Client</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
