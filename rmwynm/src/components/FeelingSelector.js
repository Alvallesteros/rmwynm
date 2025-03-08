import React from "react";

const FeelingSelector = ({ setMood }) => {
  const moods = ["sad", "stressed", "insecure", "tired", "happy"];

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {moods.map((mood) => (
        <button
          key={mood}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          onClick={() => setMood(mood)}
        >
          {mood.charAt(0).toUpperCase() + mood.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FeelingSelector;
