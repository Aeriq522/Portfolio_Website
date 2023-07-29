import React, { useState } from "react";
import classNames from "classnames";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const ScrollButton = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  const toggleScrollDirection = () => {
    setScrollDirection(scrollDirection === "down" ? "up" : "down");
    const scrollHeight = window.innerHeight;
    const currentPosition = window.scrollY;
    const scrollPosition =
      scrollDirection === "down"
        ? currentPosition + scrollHeight
        : currentPosition - scrollHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ArrowCircleUpIcon
        onClick={toggleScrollDirection}
        className={classNames(
          "fixed bottom-8 right-8 bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg",
          {
            "bg-red-500": scrollDirection === "up",
          }
        )}
      >
        {scrollDirection === "down" ? "Scroll Down" : "Scroll Up"}
      </ArrowCircleUpIcon>
      {/* Rest of your content */}
    </div>
  );
};

export default ScrollButton;
