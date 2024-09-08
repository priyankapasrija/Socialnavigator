import axios from 'axios';

const BASE_URL = 'http://localhost:26000'; 

export const fetchSimulatedReview = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/reviews/simulated-review`);
    return response.data;
  } catch (error) {
    console.error('Error fetching the simulated review:', error);
    throw error;
  }
};