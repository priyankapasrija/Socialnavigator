import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/story-submission');
  };

  return (
    <div className="home-page flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Social Navigator</h1>
      <p className="text-lg mb-6 text-center">
        A compass to help neurodivergent individuals navigate social interactions in a neurotypical world.
      </p>
      <button
        onClick={handleGetStarted}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try It Now
      </button>
    </div>
  );
};

export default Home;