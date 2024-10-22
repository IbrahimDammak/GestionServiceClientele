import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../src/pages/LoginPage';
import Dashboard from './components/Dashboard';
import TechnicianDashboard from './components/TechnicianDashboard';
import ClientsPage from './pages/ClientsPage';
import LaptopsInRepairPage from './pages/LaptopsInRepairPage';
import NotificationsPage from './pages/NotificationsPage';
import LaptopsRepairedPage from './pages/LaptopsRepairedPage';
import ClientDetails from './pages/ClientDetails';
import AddClientPage from './pages/AddClientPage';
import TechnicianRepairPage from './pages/TechnicianRepairPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/dashboard-rsc" element={<Dashboard />} />
        <Route path="/technician/dashboard" element={<TechnicianDashboard />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/clients" element={<ClientsPage />} />
        <Route path="/laptops-in-repair" element={<LaptopsInRepairPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/laptops-repaired" element={<LaptopsRepairedPage />} />
        <Route path="/client-details/:id" element={<ClientDetails />} />
        <Route path="/add-client" element={<AddClientPage />} />
        <Route path="/technician/create-repair-sheet" element={<TechnicianRepairPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
