import { useNavigate } from 'react-router-dom';
import ndSelection from '../components/ndSelection';

const WelcomeToSN = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/story-submission');
  };

  return (
    <div className="flex flex-col items-start justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Social Navigator!</h1>
      <h2 className='text-1xl font-bold mb-4'>To better support you, we’d like to ask a few quick questions. This will help us tailor our feedback to fit your unique needs. </h2>
      <button
        onClick={handleGetStarted}
        className="px-6 py-2 bg-#FFBB33-500 text-#151B28 rounded-full hover:bg-blue-600"
      >
        Get started
      </button>
      <p>Your privacy is our priority. The information you provide is confidential and and is only used to customize your experience in a secure manner.</p>
    </div>
  );
};

export default WelcomeToSN;