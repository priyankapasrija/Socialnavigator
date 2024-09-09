import { useNavigate } from "react-router-dom";
import Logo from '../assets/images/logo_social_navigator.svg';

const WelcomeToSN = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/selection");
  };

  return (
    <div className="flex flex-col items-start justify-center min-h-screen bg-[#FEF8EB]">
      <div className="p-6 bg-white shadow-lg rounded-lg text-left max-w-xl">
      <img src={Logo} alt="logo" className="h-10 mr-10"/>
        <h1 className="text-4xl font-bold mb-6">
          Welcome to Social Navigator!
        </h1>
        <h2 className="text-xl text-gray-600 mb-6">
          To better support you, we’d like to ask a few quick questions. This
          will help us tailor our feedback to fit your unique needs.
        </h2>
        <button
          onClick={handleGetStarted}
          className="px-6 py-3 bg-[#FFBB33] text-[#151B28] rounded-full hover:bg-blue-600 mb-4 shadow-md"
        >
          Get started
        </button>
        <p className="text-xs text-gray-500">
          Your privacy is our priority. The information you provide is
          confidential and is only used to customize your experience in a secure
          manner.
        </p>
      </div>
    </div>
  );
};

export default WelcomeToSN;