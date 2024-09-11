import { useState } from "react";
//import { useNavigate } from "react-router-dom";

const SelectionTwo = ({onNext}) => {
  //const navigate = useNavigate();

 // const nextQuestion = () => {
 //   navigate("/nextque1");
 // };
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "Step-by-step guides",
    "Visual aids",
    "Example scenarios",
    "Direct feedback",
    "Other...",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    //<div className="flex flex-col items-start justify-center min-h-screen bg-[#FEF8EB]">
      <div className="p-6 bg-white  rounded-lg text-left max-w-xl">
        <p className="text-2xl font-semibold mb-6">
          What kind of support or features would you find most useful?
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6 flex flex-row">
          {options.map((option, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full border text-base font-medium transition-all shadow-md ${
                selectedOption === option
                  ? "bg-black text-white"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-[#FFBB33] hover:text-[#151B28]"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedOption && (
          <div className="flex justify-between items-center mt-6">
            <button className="text-base text-gray-600 text-black hover:text-gray-800 !bg-[#F0E7D5]">
              Skip
            </button>
            <button
              className="px-6 py-3 bg-[#FFBB33] text-[#151B28] rounded-full hover:bg-blue-600 text-base"
              onClick={onNext}
            >
              Next question 
              <span className="ml-2">→</span>
            </button>
          </div>
        )}

        <p className="mt-6 text-sm text-gray-500">
          Your privacy is our priority. The information you provide is
          confidential and is only used to customize your experience in a secure
          manner.
        </p>
      </div>
    //</div>
  );
};

export default SelectionTwo;