import { useNavigate } from 'react-router-dom';

function NewStoryAlert() {
  const navigate = useNavigate();

  const handleStartNewStory = () => {
    navigate('/story-submission');
  };

  const handleSaveAndSignup = () => {
    navigate('/signup');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-start justify-center min-h-screen bg-[#FEF8EB]">
      <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-xl text-left">
        <h2 className="text-2xl font-semibold mb-4">Heads Up!</h2>
        <p className="text-gray-600 mb-4">
          If you <strong>start a new story</strong> now, the one you’re currently working on and its review will be cleared.
        </p>
        <p className="text-gray-600 mb-6">
          To keep your current story and review, you can <strong>save them by registering.</strong> This way, you can come back to them anytime.
        </p>
        <div className="flex flex-row justify-around ">
          
          <button 
            onClick={handleStartNewStory} 
            className="px-6 py-3 bg-[#FFBB33] text-[#151B28] rounded-full hover:bg-blue-600"
          >
            Start New Story
          </button>
          <button 
            onClick={handleSaveAndSignup} 
            className="px-6 py-3 bg-[#FFBB33] text-[#151B28] rounded-full hover:bg-blue-600"
          >
            Save & Sign Up
          </button>
          <button 
            onClick={handleCancel} 
            className="px-6 py-3 rounded-full  bg-white border border-gray-300 shadow-sm text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewStoryAlert;