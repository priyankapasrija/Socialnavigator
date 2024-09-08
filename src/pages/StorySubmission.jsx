import Chatbot from '../components/Chatbot';

const StorySubmission = () => {
  return (
    <div className="flex flex-col items-start p-4">
      <h1 className="text-2xl font-bold mb-2">Hi there! Welcome to Social Navigator. </h1>
      <p className="text-left mb-2">
      Need help navigating a tricky situation? Share your story with us. 
We're here to listen, understand, and offer insights.
      </p>
      <div>
        <Chatbot />
      </div>
    </div>
  );
};

export default StorySubmission;