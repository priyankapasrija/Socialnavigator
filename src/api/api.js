import axios from 'axios';

let BASE_URL;
BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_BACKEND_DEV
    : import.meta.env.VITE_BACKEND_DEPLOY;

export const fetchSimulatedReview = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/reviews/simulated-review`);
    return response.data;
      console.log(chalk.green(`Simulated Review is fetched🥰’));
  } catch (error) {
    console.error('Error fetching the simulated review:', error);
    throw error;
  }
};