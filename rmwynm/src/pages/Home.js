import React, { useState } from "react";
import FeelingSelector from "../components/FeelingSelector";
import MessageCard from "../components/MessageCard";

const Home = () => {
  const [mood, setMood] = useState(null);

  return (
    <div className="overflow-y-hidden">
      <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center fade-in-up" style={{ backgroundImage: "url('photos/Zyka-5.jpg')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dimmed overlay */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-8xl drop-shadow-md font-bold mb-4">READ ME WHEN YOU...</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
