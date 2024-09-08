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
    <div className="alert-container">
      <h2>Heads Up!</h2>
      <p>
        If you <strong>start a new story</strong> now, the one you’re currently working on and its review will be cleared.
      </p>
      <p>
        To keep your current story and review, you can <strong>save them by registering.</strong> This way, you can come back to them anytime.
      </p>
      <div >
        <button onClick={handleCancel} className="button ">
          Cancel
        </button>
        <button onClick={handleStartNewStory} className="button ">
          Start new story
        </button>
        <button onClick={handleSaveAndSignup} className="button">
          Save & Sign up
        </button>
      </div>
    </div>
  );
}

export default NewStoryAlert;