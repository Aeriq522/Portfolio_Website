import React from "react";

import ScrollEffect from "./ScrollEffect";



const FirstPage_Welcome = () => {
  return (
    <div className="flex justify-center h-[100vh] w-[100vw]">
      <div className="absolute top-1/2 ">
        <h1 className="text-4xl font-bold text-blue-900 text-center italic font-serif">
          Erik <span className="text-blue-500 font-sans">Sanchez</span>
        </h1>
      </div>
      <ScrollEffect></ScrollEffect>
    </div>
  );
};

export default FirstPage_Welcome;
