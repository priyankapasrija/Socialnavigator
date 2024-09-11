import { useNavigate } from 'react-router-dom';

function NewStoryAlert() {
  const navigate = useNavigate();

  const handleStartNewStory = () => {
    navigate('/story-submission');
  };

  const handleCancel = () => {
    navigate('/');
  };

 // const handleSaveAndSignup = () => {
 //   navigate('/signup');
 // };

  return (
   // <div className="flex flex-col items-start justify-center min-h-screen bg-[#FEF8EB]">
      <div className="p-6 bg-white  rounded-lg text-left max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Heads Up!</h2>
        <p className="text-gray-600 mb-4">
          If you <strong>start a new story</strong> now, the one you’re currently working on and its review will be cleared.
        </p>
        <p className="text-gray-600 mb-6">
          To keep your current story and review, you can <strong>save them by registering.</strong> This way, you can come back to them anytime.
        </p>

        <div className="flex flex-col gap-4 mb-6 justify-center">
        <button 
            /*onClick={handleSaveAndSignup} */
            className="px-6 py-3 bg-[#FFBB33] text-[#151B28] rounded-full hover:bg-blue-600 shadow-md"
          >
            Save & Sign Up
          </button>
          <button 
            onClick={handleStartNewStory} 
            className="px-6 py-3 bg-[#FFBB33] text-[#151B28] rounded-full hover:bg-blue-600 shadow-md"
          >
            Start New Story
          </button>
          
          <button 
            onClick={handleCancel} 
            className="px-6 py-3 rounded-full border bg-white text-gray-800 hover:bg-gray-100 shadow-md"
          >
            Cancel
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Your privacy is our priority. The information you provide is confidential and is only used to customize your experience in a secure manner.
        </p>
      </div>
    //</div>
  );
}

export default NewStoryAlert;