import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const Home = () => {
  const [mood, setMood] = useState(null);

  return (
    <div className="overflow-y-hidden">
      <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center fade-in-up" style={{ backgroundImage: "url('photos/Zyka-5.jpg')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dimmed overlay */}
        <div className="relative z-10 text-center text-white">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Home;
