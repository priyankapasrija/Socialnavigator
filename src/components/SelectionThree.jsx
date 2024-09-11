import { useNavigate } from "react-router-dom";

const SelectionThree = () => {
  const navigate = useNavigate();

  const nextQuestion = () => {
    navigate("/story-submission");
  };
  return (
    //<div className="flex flex-col items-start justify-center min-h-screen bg-[#FEF8EB]">
    <div className="p-10 bg-[#FEF8EB] rounded-lg text-left max-w-xl">
        <h1 className="text-3xl font-semibold mb-4">Thank you!</h1>
        <p className="text-lg  mb-6 text-gray-600">
          Your responses will help us create a more personalized and supportive
          experience for you. You can update your preferences anytime in your
          profile settings.
        </p>

        <button
          onClick={nextQuestion}
          className="px-6 py-3 shadow-md bg-#FFBB33-500 text-#151B28 rounded-full hover:bg-blue-600"
        >
          Start exploring
        </button>

        <p className="mt-6 text-xs text-gray-500">
          Your privacy is our priority. The information you provide is
          confidential and is only used to customize your experience in a secure
          manner.
        </p>
      </div>
    //</div>
  );
};

export default SelectionThree;
