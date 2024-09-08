import Chatbot from '../components/Chatbot';

const StorySubmission = () => {
  return (
    <div className="story-submission-page flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Share Your Story</h1>
      <p className="text-center mb-6">
        Our navigator will guide you through sharing your experience. Describe your situation and receive tailored insights.
      </p>
      <div className="chatbot-container w-full max-w-2xl">
        <Chatbot />
      </div>
    </div>
  );
};

export default StorySubmission;