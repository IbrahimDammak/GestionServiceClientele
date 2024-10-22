// src/components/TechnicianSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TechnicianSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4 fixed">
      <h2 className="text-2xl font-bold mb-6">Technician Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/technician/all-laptops" className="hover:text-blue-400">All Laptops</Link>
        </li>
        <li>
          <Link to="/technician/create-repair-sheet" className="hover:text-blue-400">Créer Fiche Réparation</Link>
        </li>
        <li>
          <Link to="/technician/laptops-not-repaired" className="hover:text-blue-400">Laptops Not Repaired</Link>
        </li>
        <li>
          <Link to="/technician/notifications" className="hover:text-blue-400">Notifications</Link>
        </li>
      </ul>
    </div>
  );
};

export default TechnicianSidebar;
