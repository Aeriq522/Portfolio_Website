import React from "react";
import FirstHoverCard from "./ThirdPageComponents/FirstHoverCard";
import SecondHoverCard from "./ThirdPageComponents/SecondHoverCard";
import ThirdCardHover from "./ThirdPageComponents/ThirdCardHover";

const ThirdPage_Test = () => {
  return (
    <div>
      <div id="cards" className="md:scale-50">
        <FirstHoverCard/>
        <SecondHoverCard/>
        <ThirdCardHover/>
      </div>
    </div>
  );
};

export default ThirdPage_Test;
