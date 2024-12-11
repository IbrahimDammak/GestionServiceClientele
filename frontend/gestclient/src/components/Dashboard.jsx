import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ClientsSection from "./ClientsSection";
import LaptopsInRepairSection from "./LaptopsInRepairSection";
import NotificationsSection from "./NotificationsSection";
import LaptopsRepairedSection from "./LaptopsRepairedSection";
import laptopService from "../service/laptopService";
const Dashboard = () => {
  const [clients, setClients] = useState([]);
  const [laptopsInRepair, setLaptopsInRepair] = useState(0);
  const [laptopsRepaired, setLaptopsRepaired] = useState(0);

  useEffect(() => {
    // Fetch clients
    const fetchClients = async () => {
      try {
        const clientData = await laptopService.getEtatLaptopByClientId();
        setClients(clientData);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    // Fetch laptop statuses
    const fetchLaptopStats = async () => {
      try {
        const laptops = await laptopService.getEtatLaptopByClientId();
        setLaptopsInRepair(laptops.filter((laptop) => laptop.etat === "non réparé").length);
        setLaptopsRepaired(laptops.filter((laptop) => laptop.etat === "réparé").length);
      } catch (error) {
        console.error("Error fetching laptops:", error);
      }
    };

    fetchClients();
    fetchLaptopStats();
  }, []);

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <div className="flex h-screen bg-gray-800">
      <Sidebar />
      <div className="relative flex-grow grid grid-cols-4 gap-6 p-6 pt-20 w-full">
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
          <LaptopsInRepairSection count={laptopsInRepair} />
          <LaptopsRepairedSection count={laptopsRepaired} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
