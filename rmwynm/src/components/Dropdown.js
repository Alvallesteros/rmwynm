import React, { useEffect, useState, useRef } from "react";
import { when_you } from "../data";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
    const navigate = useNavigate();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [moveTitle, setMoveTitle] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [slideDirection, setSlideDirection] = useState(""); // "up" or "down"
    const [nextIndexToShow, setNextIndexToShow] = useState(null);
    
    // Convert when_you object to array for easier navigation
    const carouselItems = Object.entries(when_you);
    
    const nextItem = () => {
        if (animating) return;
        setAnimating(true);
        setSlideDirection("up");
        
        const nextIndex = currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
        setNextIndexToShow(nextIndex);
        
        setTimeout(() => {
            setCurrentIndex(nextIndex);
            setNextIndexToShow(null);
            setSlideDirection("");
            setAnimating(false);
        }, 300);
    };
    
    const prevItem = () => {
        if (animating) return;
        setAnimating(true);
        setSlideDirection("down");
        
        const prevIndex = currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
        setNextIndexToShow(prevIndex);
        
        setTimeout(() => {
            setCurrentIndex(prevIndex);
            setNextIndexToShow(null);
            setSlideDirection("");
            setAnimating(false);
        }, 300);
    };

    const handleReadThis = () => {
        if (carouselItems.length > 0) {
            const key = carouselItems[currentIndex][0];
            // Replace underscores with hyphens for the URL
            const formattedKey = key.replace(/_/g, '-');
            
            console.log(`Navigating to: /${formattedKey}`);
            navigate(`/message/${formattedKey}`);
        }
    };

    useEffect(() => {
        const timer=setTimeout(() => {
            setDropdownVisible(true);
        }, 2000);

        return () => clearTimeout(timer);;
    }, []);

    return (
      <div className="relative text-center text-white">
        <h1 className={`text-8xl drop-shadow-md font-bold mb-4 cursor-pointer transition-transform duration-1000 ease-in-out ${dropdownVisible ? 'transform translate-y-0' : 'transform translate-y-40'}`}>
        READ ME WHEN YOU...
        </h1>
        <div className={`relative mt-4 bg-transparent transition-all duration-1000 ease-in-out ${dropdownVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
            
            <div className="w-full relative h-56 overflow-hiddenrounded-lg flex items-center justify-center">              
                {/* Up arrow inside carousel */}
                <button 
                  onClick={prevItem}
                  className="absolute top-0 w-full px-4 py-1 transition-colors duration-300 z-10 flex justify-center hover:bg-white hover:text-black rounded-t-lg"
                  disabled={animating}
                >
                  <span className="transform scale-75">▲</span>
                </button>

                {/* Main carousel container */}
                <div className="w-full h-40 relative flex items-center justify-center overflow-hidden text-5xl border-t-2 border-b-2">
                {/* Current item */}
                <div 
                  className={`absolute w-full h-full flex items-center justify-center px-8 transition-all duration-300 ease-in-out ${
                    slideDirection === "up" ? "transform -translate-y-full opacity-0" : 
                    slideDirection === "down" ? "transform translate-y-full opacity-0" : 
                    "transform translate-y-0 opacity-100"
                  }`}
                >
                  {carouselItems.length > 0 && carouselItems[currentIndex][1]}
                </div>
                
                {/* Next item that will slide in */}
                {nextIndexToShow !== null && (
                  <div 
                    className={`absolute w-full h-full flex items-center justify-center px-8 transition-all duration-300 ease-in-out ${
                      slideDirection === "up" ? "transform translate-y-full opacity-100" : 
                      slideDirection === "down" ? "transform -translate-y-full opacity-100" : 
                      "transform translate-y-0 opacity-0"
                    }`}
                  >
                    {carouselItems[nextIndexToShow][1]}
                  </div>
                )}
              </div>

              {/* Down arrow inside carousel */}
              <button 
                onClick={nextItem}
                className="absolute bottom-0 w-full px-4 py-1 transition-colors duration-300 z-10 flex justify-center hover:bg-white hover:text-black rounded-b-lg"
                disabled={animating}
              >
                <span className="transform scale-75">▼</span>
              </button>
            </div>
            
          </div>
          
          <button
            onClick={handleReadThis}
            className="mt-6 px-6 py-3 bg-transparent hover:bg-white hover:text-black border-2 transition-all duration-300 rounded-lg font-bold hover:scale-105"
          >
            READ THIS
          </button>
        </div>
      </div>
    );
};

export default Dropdown;