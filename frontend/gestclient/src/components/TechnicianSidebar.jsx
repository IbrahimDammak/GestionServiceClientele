import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptop, FaClipboardList, FaBook, FaBell } from 'react-icons/fa';

const TechnicianSidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-full p-6 fixed shadow-lg">
      <Link to="/dashboard-tech">
      <h2 className="text-2xl font-bold mb-8 text-center border-b pb-4 border-gray-700">
        Technician Dashboard
      </h2>
      </Link>
      <ul className="space-y-6">
        <li>
          <Link
            to="/tech/all-laptops"
            className="flex items-center gap-4 text-lg hover:text-blue-400 transition-all"
          >
            <FaLaptop className="text-blue-500" />
            <span>All Laptops</span>
          </Link>
        </li>
        <li>
          <Link
            to="/technician/create-repair-sheet"
            className="flex items-center gap-4 text-lg hover:text-blue-400 transition-all"
          >
            <FaClipboardList className="text-green-500" />
            <span>Créer Fiche Réparation</span>
          </Link>
        </li>
        <li>
          <Link
            to="/tech/catalogue"
            className="flex items-center gap-4 text-lg hover:text-blue-400 transition-all"
          >
            <FaBook className="text-yellow-500" />
            <span>Catalogue</span>
          </Link>
        </li>
        {/* <li>
          <Link
            to="/technician/laptops-not-repaired"
            className="flex items-center gap-4 text-lg hover:text-blue-400 transition-all"
          >
            <FaTools className="text-yellow-500" />
            <span>Laptops Not Repaired</span>
          </Link>
        </li> */}
        <li>
          <Link
            to="/technician/Facture"
            className="flex items-center gap-4 text-lg hover:text-blue-400 transition-all"
          >
            <FaBell className="text-red-500" />
            <span>Facture</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TechnicianSidebar;
