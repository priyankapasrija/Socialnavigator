export default function ReviewingScreen ()  {
  return (
    <div className="flex flex-col items-start justify-center min-h-100vh bg-[#FEF8EB]">
      <div className="loader mb-4">
        <svg
          className="animate-spin h-12 w-12 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
          ></path>
        </svg>
      </div>
      <h2 className="text-xl font-semibold mb-2">We’re Reviewing Your Story</h2>
      <p className="text-center text-gray-700">
        Thanks for sharing! We’re taking a moment to review your input and generate useful insights.
      </p>
    </div>
  );
};

