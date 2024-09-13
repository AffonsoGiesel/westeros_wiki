import axios from 'axios';

const API_URL = 'http://localhost:3000/api/continents/1/kingdoms';

export const fetchKingdoms = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching kingdoms:', error);
    throw error;
  }
};
