import axios from 'axios';

const API_URL = "http://localhost:80/api/pieces-rechange"; // Change this to your backend URL if different

export const getAllParts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (error) {
    console.error("Error fetching parts:", error);
    throw error;
  }
};

export const savePart = async (part) => {
  try {
    const response = await axios.post(API_URL, part);
    return response.data;
  } catch (error) {
    console.error("Error saving part:", error);
    throw error;
  }
};

export const deletePart = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting part:", error);
    throw error;
  }
};
