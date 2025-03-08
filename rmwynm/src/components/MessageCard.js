import React from "react";
import messages from "../data";

const MessageCard = ({ mood }) => {
  if (!mood) return <p className="text-center text-gray-600">Select a mood to see a message.</p>;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto mt-4 text-center">
      <h2 className="text-lg font-semibold capitalize">{mood}</h2>
      <p className="text-gray-700 mt-2">{messages[mood]}</p>
    </div>
  );
};

export default MessageCard;
