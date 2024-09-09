import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SelectionTwo = () => {
  const navigate = useNavigate();

  const nextQuestion = () => {
    navigate("/nextque1");
  };
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FEF8EB] ">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <p className="text-lg font-semibold mb-4 text-center">
          What kind of support or features you’d find most useful?
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mb-6">
          {options.map((option, index) => (
            <button
              key={index}
              className={`px-4 py-2 border rounded-full text-sm font-medium transition-all
                ${
                  selectedOption === option
                    ? "bg-black text-white"
                    : "bg-white border-gray-300"
                }
              `}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedOption && (
          <div className="flex justify-between items-center">
            <button className="text-gray-600 underline">Skip</button>
            <button
              className="px-6 py-2 bg-#FFBB33-500 text-#151B28 rounded-full hover:bg-blue-600"
              onClick={nextQuestion}
            >
              Next question
              <span className="ml-2">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectionTwo;
