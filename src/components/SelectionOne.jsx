//import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SelectionOne = ({onNext}) => {
  //const navigate = useNavigate();

  //const nextQuestion = () => {
  //  navigate("/nextque");
  //};
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    "Autism (ASD)",
    "ADHD",
    "Dyslexia",
    "Dyspraxia",
    "Dyscalculia",
    "Social anxiety",
    "Sensory sensitivity",
    "Other...",
  ];

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    //<div className="flex flex-col items-start justify-center min-h-screen bg-[#FEF8EB]">
    <div className="p-6 bg-white rounded-lg text-left max-w-xl">
        <h1 className="text-2xl font-semibold mb-4">
          Do you identify as neurodivergent?
        </h1>
        <p className="text-gray-600 mb-4">
          (Select all that apply or choose 'No' or 'Prefer not to say')
        </p>

        <div className="flex flex-wrap gap-4 mb-6">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => toggleOption(option)}
              className={`px-4 py-2 rounded-full border ${
                selectedOptions.includes(option)
                  ? "bg-black text-white"
                  : "bg-white text-gray-800 hover:bg-[#FFBB33] hover:text-[#151B28]"
              } shadow-md`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setSelectedOptions([])}
            className="px-6 py-3 rounded-lg bg-white border border-gray-300 shadow-sm text-gray-700 hover:bg-gray-100"
          >
            No, I'm not neurodivergent
          </button>
          <button
            onClick={() => setSelectedOptions(["Prefer not to say"])}
            className="px-6 py-3 rounded-lg bg-white border border-gray-300 shadow-sm text-gray-700 hover:bg-gray-100"
          >
            Prefer not to say
          </button>
        </div>

        {selectedOptions.length > 0 && (
          <div className="flex justify-end mt-6">
            <button
              onClick={onNext}
              className="px-6 py-2 bg-#FFBB33-500 text-#151B28 rounded-full hover:bg-blue-600"
            >
              Next Question
              <span className="ml-2">→</span>
            </button>
          </div>
        )}

        <p className="mt-6 text-xs text-gray-500">
          Your privacy is our priority. The information you provide is
          confidential and is only used to customize your experience in a secure
          manner.
        </p>
      </div>
    //</div>
  );
};

export default SelectionOne;
