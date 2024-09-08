import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/story-submission');
  };

  return (
    <div className="home-page flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Navigate Social Situations with Confidence</h1>
      <p className="text-lg mb-6 text-center">
      We understand that social situations can be challenging for everyone, especially for those who are neurodivergent. Our AI offers personalized feedback to help you navigate interactions with ease—at your own pace.
      </p>
      <button
        onClick={handleGetStarted}
        className="px-6 py-2 bg-#FFBB33-500 text-#151B28 rounded hover:bg-blue-600"
      >
        Try It Now
      </button>
    </div>
  );
};

export default Home;