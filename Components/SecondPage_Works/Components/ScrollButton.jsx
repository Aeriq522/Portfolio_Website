import React, { useEffect, useState } from "react";
import classNames from "classnames";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

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
      {scrollDirection === "down" ? (
        <ArrowCircleDownIcon
        className={classNames(
          "fixed bottom-8 right-8 bg-blue-900 text-white scale-150 rounded-lg",
          {
            "bg-red-900": scrollDirection === "up",
          }
        )}
          onClick={toggleScrollDirection}
        />
      ) : (
        <ArrowCircleUpIcon
          onClick={toggleScrollDirection}
          className={classNames(
            "fixed bottom-8 right-8 bg-blue-900 text-white scale-150 rounded-lg",
            {
              "bg-red-900": scrollDirection === "up",
            }
          )}
        ></ArrowCircleUpIcon>
      )}
    </div>
  );
};

export default ScrollButton;
