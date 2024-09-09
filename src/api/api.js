import axios from 'axios';

const BASE_URL = process.env.BACKEND_URL;

export const fetchSimulatedReview = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/reviews/simulated-review`);
    return response.data;
  } catch (error) {
    console.error('Error fetching the simulated review:', error);
    throw error;
  }
};