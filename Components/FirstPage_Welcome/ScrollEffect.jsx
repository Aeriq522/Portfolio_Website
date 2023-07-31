import React from "react";
import ScrollingBackground from "./Components/ScrollEffect/ScrollingBackground";
import Scrolling2 from "./Components/ScrollEffect/Scrolling2";
import EmptyScrollforName from "./Components/ScrollEffect/EmptyScrollforName";

const ScrollEffect = () => {
  return (
    <div className="p-12 -z-1 opacity-20">
      <div className="bx-2">
        <ScrollingBackground />
      </div>
      <div className="bx-4">
        <Scrolling2 />
      </div>
      <div className="bx-6">
        <ScrollingBackground />
      </div>
      <Scrolling2 />
      <ScrollingBackground />
      <Scrolling2 />

    </div>
  );
};

export default ScrollEffect;
