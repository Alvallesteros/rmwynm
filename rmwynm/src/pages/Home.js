import React, { useState } from "react";
import FeelingSelector from "../components/FeelingSelector";
import MessageCard from "../components/MessageCard";

const Home = () => {
  const [mood, setMood] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-amber-100">
      <h1 className="text-3xl font-bold text-white mb-4">READ ME WHEN YOU...</h1>
      <FeelingSelector setMood={setMood} />
      <MessageCard mood={mood} />
    </div>
  );
};

export default Home;
