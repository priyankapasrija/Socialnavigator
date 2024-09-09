import { useNavigate } from "react-router-dom";

const SelectionThree = () => {
  const navigate = useNavigate();

  const nextQuestion = () => {
    navigate("/story-submission");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FEF8EB] p-6">
      <div className="p-6 bg-white shadow-lg rounded-lg text-center max-w-xl">
        <h1 className="text-3xl font-semibold mb-4">Thank you!</h1>
        <p className="text-lg text-center mb-6 text-gray-600">
          Your responses will help us create a more personalized and supportive
          experience for you. You can update your preferences anytime in your
          profile settings.
        </p>

        <button
          onClick={nextQuestion}
          className="px-6 py-2 bg-#FFBB33-500 text-#151B28 rounded-full hover:bg-blue-600"
        >
          Start exploring
        </button>

        <p className="mt-6 text-xs text-gray-500 text-center">
          Your privacy is our priority. The information you provide is
          confidential and is only used to customize your experience in a secure
          manner.
        </p>
      </div>
    </div>
  );
};

export default SelectionThree;
