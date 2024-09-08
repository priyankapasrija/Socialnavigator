import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/welcome-to-sn');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Navigate Social Situations with Confidence</h1>
      <h2 className='text-1xl font-bold mb-4'>Personalized, AI-Powered Insights for Your Unique Social Journey</h2>
      <p className="text-md mb-6 text-center">
      We understand that social situations can be challenging for everyone, especially for those who are neurodivergent. Our AI offers personalized feedback to help you navigate interactions with ease—at your own pace.
      </p>
      <button
        onClick={handleGetStarted}
        className="px-6 py-2 bg-#FFBB33-500 text-#151B28 rounded-full hover:bg-blue-600"
      >
        Try It Now
      </button>
      <p>– No Registration Needed</p>
    </div>
  );
};

export default Home;