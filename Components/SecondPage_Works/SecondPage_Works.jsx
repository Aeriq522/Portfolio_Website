import React, { useState } from "react";
import ScrollButton from "./Components/ScrollButton";

const SecondPage_Works = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const handleAnimationToggle = () => {
    setIsAnimating(!isAnimating);
  };

  const redirectToArtistTrackerApp = () => {
    // Change the URL to the desired website
    window.location.href = "https://artist-tracker.vercel.app/";
  };
  const redirectToSiteSurveyApp = () => {
    // Change the URL to the desired website
    window.location.href = "https://site-survey-code.vercel.app/";
  };
  const redirectToPokemonApp = () => {
    // Change the URL to the desired website
    window.location.href = "https://pokemon-card-0522.web.app/";
  };

  return (
    <div className="border border-blue-700 h-[100vh] flex justify-evenly place-items-center">
      <div
        className={`h-48 w-48 border border-red-400 sm:border-blue-300 md:border-green-300 lg:border-yellow-300 flex items-center pl-4 ${
          isAnimating ? "swaying" : " "
        }`}
        // onMouseEnter={handleAnimationToggle}
        // onMouseLeave={handleAnimationToggle}
        onClick={handleAnimationToggle}
      >
        <div
          onClick={redirectToArtistTrackerApp}
          className="h-48 w-48 flex items-center justify-center text-white "
        >
          Artist Tracker
        </div>
      </div>
      <div
        className={`h-48 w-48 border border-red-400 flex items-center pl-12 ${
          isAnimating ? "swaying" : " "
        }`}
        // onMouseEnter={handleAnimationToggle}
        // onMouseLeave={handleAnimationToggle}
      >
        <div
          onClick={redirectToPokemonApp}
          className="h-48 w-48 flex items-center justify-center text-white"
        >
          Pokemon App
        </div>
      </div>
      <div
        className={`h-48 w-48 border border-red-400 flex items-center pl-12 ${
          isAnimating ? "swaying" : " "
        }`}
        // onMouseEnter={handleAnimationToggle}
        // onMouseLeave={handleAnimationToggle}
        onClick={handleAnimationToggle}
      >
        <div
          onClick={redirectToSiteSurveyApp}
          className="h-48 w-48 flex items-center justify-center text-white"
        >
          Work - Site Survey App
        </div>
      </div>
      <ScrollButton />
    </div>
  );
};

export default SecondPage_Works;
