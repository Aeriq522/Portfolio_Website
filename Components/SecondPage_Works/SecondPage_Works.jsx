import React from "react";
import { Link } from 'react-scroll';
import ScrollButton from "./Components/ScrollButton";

const SecondPage_Works = () => {
    
  return (
    <div className="border border-blue-700 h-[100vh]">
      <div className="w-[100vw] border border-red-400 h-1/3 flex items-center pl-12">
        <div className="h-48 w-48 border flex items-center justify-center ">Spotify App</div>
      </div>
      <div className="w-[100vw] border border-red-400 h-1/3 flex items-center pl-12">
        <div className="h-48 w-48 border flex items-center justify-center ">Pokemon App</div>
      </div>
      <div className="w-[100vw] border border-red-400 h-1/3 flex items-center pl-12">
        <div className="h-48 w-48 border flex items-center justify-center ">Spotify App</div>
      </div>
      <ScrollButton />
    </div>
  );
};

export default SecondPage_Works;
