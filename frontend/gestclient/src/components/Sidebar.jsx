// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaLaptop,
  FaBell,
  FaCheckCircle,
  FaPlus,
  FaAddressCard,
  FaBook,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    // h-screen w-64 bg-gray-900 text-white flex flex-col justify-between
    <div className="w-64 bg-gray-900 text-white h-full p-6 flex flex-col shadow-lg ">
      <Link to="/dashboard-rsc">
        <h2 className="text-2xl font-bold mb-8 text-center border-b pb-4 border-gray-700">
          Dep Client
        </h2>
      </Link>
      <ul className="space-y-6">
        <li>
          <Link
            to="/clients"
            className="flex items-center gap-4 text-lg hover:text-blue-400 transition-all"
          >
            <FaUsers className="text-blue-500" />
            <span>All Clients</span>
          </Link>
        </li>
        <li>
          <Link
            to="/laptops-in-repair"
            className="flex items-center gap-4 text-lg hover:text-blue-400 transition-all"
          >
            <FaLaptop className="text-green-500" />
            <span>Laptops in Repair</span>
          </Link>
        </li>
        <li>
          <Link
            to="/rsc/catalogue"
            className="flex items-center gap-4 text-lg hover:text-blue-400 transition-all"
          >
            <FaBook className="text-yellow-500" />
            <span>Catalogue</span>
          </Link>
        </li>
        <li>
          <Link
            to="/laptops-repaired"
            className="flex items-center gap-4 text-lg hover:text-blue-400 transition-all"
          >
            <FaCheckCircle className="text-red-500" />
            <span>Laptops Repaired</span>
          </Link>
        </li>
      </ul>
      <div className="mt-auto">
        <Link
          to="/add-client"
          className="flex items-center justify-center w-full p-3 bg-green-600 rounded hover:bg-green-500 transition-all"
        >
          <FaPlus className="text-lg mr-2" />
          <span>Add Client</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
