import Chatbot from '../components/Chatbot';
import Navigation from '../assets/images/navigation.svg';


const StorySubmission = () => {
  return (
    <div className="flex flex-col items-start ml-10 h-100 max-h-screen">
        <img src={Navigation} className="w-1/12 m-2"></img>
      <h1 className="text-2xl mb-4 ml-4">Hi there! Welcome to Social Navigator. </h1>
      <p className="text-left mb-4 ml-4">
      Need help navigating a tricky situation? Share your story with us. 
<br /> We're here to listen, understand, and offer insights.
      </p>
      <div>
        <Chatbot />
      </div>
    </div>
  );
};

export default StorySubmission;