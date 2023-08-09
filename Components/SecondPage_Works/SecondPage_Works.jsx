import React, { useState } from "react";
import ScrollButton from "./Components/ScrollButton";

const SecondPage_Works = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const handleAnimationToggle = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="border border-blue-700 h-[100vh] relative">
      <div
        className={`h-48 w-48 border border-red-400 sm:border-blue-300 md:border-green-300 lg:border-yellow-300 flex items-center pl-12 absolute right-1/4 top-24 ${
          isAnimating ? "swaying" : " "
        }`}
        onMouseEnter={handleAnimationToggle}
        onMouseLeave={handleAnimationToggle}
        onClick={handleAnimationToggle}
      >
        <div className="h-48 w-48 flex items-center justify-center text-white ">
          Spotify App
        </div>
      </div>
      <div
        className={`h-48 w-48 border  border-red-400 sm:border-blue-300 md:border-green-300 lg:border-yellow-300 flex items-center pl-12 absolute right-1/4 bottom-96 ${
          isAnimating ? "swaying" : " "
        }`}
        onMouseEnter={handleAnimationToggle}
        onMouseLeave={handleAnimationToggle}
        onClick={handleAnimationToggle}
      >
        <div className="h-48 w-48 flex items-center justify-center ">
          Spotify App
        </div>
      </div>
      <div
        className={`h-48 w-48 border  border-red-400 sm:border-blue-300 md:border-green-300 lg:border-yellow-300 flex items-center pl-12 absolute right-1/4 bottom-24 ${
          isAnimating ? "swaying" : " "
        }`}
        onMouseEnter={handleAnimationToggle}
        onMouseLeave={handleAnimationToggle}
        onClick={handleAnimationToggle}
      >
        <div className="h-48 w-48 flex items-center justify-center ">
          Spotify App
        </div>
      </div>
      <ScrollButton />
    </div>
  );
};

export default SecondPage_Works;
