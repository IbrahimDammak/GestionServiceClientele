import axios from 'axios';

const API_URL = 'http://localhost:80/api/clients';

const ClientPageService = {

  // Get all clients
  getAllClients: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching clients:', error);
      throw error;
    }
  },

  // Save or update a client
  saveClient: async (client) => {
    try {
      const response = await axios.post(API_URL, client);
      return response.data;
    } catch (error) {
      console.error('Error saving client:', error);
      throw error;
    }
  },

  
  // Get client by ID
  getClientById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching client by ID:', error);
      throw error;
    }
  },

  // Delete a client by ID
  deleteClient: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error('Error deleting client:', error);
      throw error;
    }
  }
};

export default ClientPageService;
