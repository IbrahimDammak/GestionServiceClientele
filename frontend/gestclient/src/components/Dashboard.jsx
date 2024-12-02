// src/components/Dashboard.jsx
import React from "react";
import Sidebar from "./Sidebar";
import ClientsSection from "./ClientsSection";
import LaptopsInRepairSection from "./LaptopsInRepairSection";
import NotificationsSection from "./NotificationsSection";
import LaptopsRepairedSection from "./LaptopsRepairedSection";

const Dashboard = () => {
  const clients = [
    { id: 1, name: "John Doe", laptopRef: "ABC123", status: "In Repair" },
    {
      id: 2,
      name: "Jane Smith",
      laptopRef: "XYZ789",
      status: "Awaiting Parts",
    },
    { id: 3, name: "Alice Johnson", laptopRef: "DEF456", status: "Repaired" },
    { id: 4, name: "Bob Brown", laptopRef: "GHI012", status: "In Repair" },
    { id: 5, name: "Charlie Black", laptopRef: "JKL345", status: "Completed" },
  ];
  const handleLogout = () => {
    console.log("User logged out");
  };
  return (
    <div className="flex h-screen bg-gray-800">
      <Sidebar />
      <div className="relative flex-grow grid grid-cols-4 gap-6 p-6 pt-20 w-full">
        {/* Deconnexion Button */}
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 px-4 py-2 text-white bg-red-600 rounded hover:bg-red-500"
        >
          Deconnexion
        </button>
        <div className="col-span-3 h-full">
          <ClientsSection clients={clients} />
        </div>
        <div className="col-span-1 flex flex-col space-y-6 h-full">
          <NotificationsSection />
          <LaptopsInRepairSection />
          <LaptopsRepairedSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
