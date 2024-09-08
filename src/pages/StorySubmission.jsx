import Chatbot from '../components/Chatbot';

const StorySubmission = () => {
  return (
    <div className="story-submission-page flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Hi there! Welcome to Social Navigator. </h1>
      <p className="text-center mb-6">
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