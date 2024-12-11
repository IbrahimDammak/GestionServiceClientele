// src/services/laptopService.js
import axios from 'axios';

// Set the base URL for the API (make sure to change this to your actual API URL)
const API_URL = 'http://localhost:80/api/appareils';

const laptopService = {
  // Fetch all laptops
  getLaptops: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data; // This should now include the 'client' field
    } catch (error) {
      console.error('Error fetching laptops', error);
      throw error;
    }
  },

  async getEtatLaptopByClientId() {
    try {
      const response = await axios.get(`${API_URL}/etat-appareil`);

      // Check if the response contains data
      if (response.data) {
        // You can directly return the data or you can parse it here
        return response.data; // Since axios already parses JSON, no need to parse it again
      } else {
        console.error("No data found in the response");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data from API:", error);
      return [];
    }},
  

  // Get a laptop by ID
  getLaptopById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data; // returns the laptop details
    } catch (error) {
      console.error(`Error fetching laptop with ID ${id}`, error);
      throw error;
    }
  },

  // Update an existing laptop
  updateLaptop: async (id, updatedLaptop) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedLaptop);
      return response.data; // returns the updated laptop
    } catch (error) {
      console.error('Error updating laptop', error);
      throw error;
    }
  },

  // Create a new laptop
  createLaptop: async (newLaptop) => {
    try {
      const response = await axios.post(API_URL, newLaptop);
      return response.data; // returns the created laptop
    } catch (error) {
      console.error('Error creating laptop', error);
      throw error;
    }
  },

  // Delete a laptop
  deleteLaptop: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id; // returns the ID of the deleted laptop
    } catch (error) {
      console.error('Error deleting laptop', error);
      throw error;
    }
  },
};

export default laptopService;
