import { useNavigate } from 'react-router-dom';
import Navigation from '../assets/images/navigation.svg';
import PopUp from '../components/PopUp';

const Home = () => {
  const navigate = useNavigate();

  const handleTryItNow = () => {
    navigate('/welcome-to-sn');
  };

  return (
    < div className='flex justify-around mr-20 ml-20'>
    <div className="flex flex-col items-start justify-center h-screen ml-10 w-1/2">
      <h1 className="text-5xl font-bold mb-4 leading-snug">Navigate Social Situations with Confidence</h1>
      <p className='text-lg mb-4'>Personalized, <span className='rounded-underline underline underline-offset-4 font-bold decoration-4' style={{textDecorationColor: '#CCD4FF'}}>AI-Powered</span> Insights for Your Unique Social Journey</p>
      <p className="text-md mb-6 text-left">
      We understand that social situations can be challenging for everyone, especially for those who are neurodivergent. Our AI offers personalized feedback to help you navigate interactions with ease—at your own pace.
      </p>
      {/*<button
        onClick={handleTryItNow}
        className="px-6 py-2 bg-#FFBB33-500 text-#151B28 rounded-full hover:bg-blue-600"
      >
        Try It Now
  </button>*/}
     
        <PopUp/>
     
      <p className='text-sm mt-6'>– No Registration Needed</p>
    </div>
    <img src={Navigation} alt="navigation drawing" className='w-1/5 h-100 mr-20' />
    </div>
  );
};

export default Home;