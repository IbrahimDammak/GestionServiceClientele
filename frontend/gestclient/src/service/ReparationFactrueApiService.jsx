import axios from 'axios';

const API_BASE_URL = "http://localhost:80/api"; // Base URL for the backend

export const getDemandeReparationById = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/demandes-reparation/${id}`);
      return response;
    } catch (error) {
      console.error("Error fetching Demande Reparation by ID:", error);
      throw error;
    }
  };
  

export const getAppareilById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/appareils/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Appareil by ID:", error);
    throw error;
  }
};

export const getComponentOptions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pieces-rechange`);
    return response;
  } catch (error) {
    console.error("Error fetching component options:", error);
    throw error;
  }
};

export const createReparation = async (reparationData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reparations`, reparationData);
    return response.data;
  } catch (error) {
    console.error("Error creating reparation:", error);
    throw error;
  }
};

export const createFacture = async (factureData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/factures`, factureData);
    return response.data;
  } catch (error) {
    console.error("Error creating facture:", error);
    throw error;
  }
};
