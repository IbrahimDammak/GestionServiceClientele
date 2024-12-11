import axios from 'axios';

const API_BASE_URL = 'http://localhost:80/api';

// Service for Clients
export const clientService = {
    async addClient(clientData) {
      try {
        const response = await axios.post(`${API_BASE_URL}/clients`, clientData, {
          headers: { 'Content-Type': 'application/json' },
        });
        return response.data; // Should return client object including ID
      } catch (error) {
        throw error.response?.data?.message || 'Failed to add client.';
      }
    },
  };
  
  // Service for Devices (Appareils)
  export const deviceService = {
    async addDevice(deviceData) {
      try {
        const response = await axios.post(`${API_BASE_URL}/appareils`, deviceData, {
          headers: { 'Content-Type': 'application/json' },
        });
        return response.data; // Should return device object including ID
      } catch (error) {
        throw error.response?.data?.message || 'Failed to add device.';
      }
    },
  };
  
  // Service for Repair Requests (DemandeReparation)
  export const repairService = {
    async addRepairRequest(repairData) {
      try {
        const response = await axios.post(`${API_BASE_URL}/demandes-reparation`, repairData, {
          headers: { 'Content-Type': 'application/json' },
        });
        return response.data;
      } catch (error) {
        throw error.response?.data?.message || 'Failed to add repair request.';
      }
    },
  };
  