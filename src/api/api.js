import axios from 'axios';

let BASE_URL;
BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_BACKEND_DEV
    : import.meta.env.VITE_BACKEND_DEPLOY;

export const fetchSimulatedReview = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/reviews/simulated-review`);
    console.log('Simulated Review is fetched🥰');
    return response.data;
     
  } catch (error) {
    console.error('Error fetching the simulated review:', error);
    throw error;
  }
};
