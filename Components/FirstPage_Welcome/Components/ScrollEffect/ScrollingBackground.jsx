import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollingBackground = () => {
  const buttons = [
    { id: 1, text: "Python" },
    { id: 2, text: "HTML" },
    { id: 3, text: "CSS" },
    { id: 4, text: "Javascript" },
    { id: 5, text: "React" },
    { id: 6, text: "Framer Motion" },
    { id: 7, text: "Firebase" },
    { id: 8, text: "Firestore" },
    { id: 9, text: "threeJS" },
    { id: 10, text: "Vercel" },
    { id: 11, text: "Github" },
    { id: 12, text: "TailwindCSS" },
    // Add more buttons as needed
  ];

  // Duplicate the buttons to create a loop
  const buttonsLoop = [...buttons];

  const containerRef = React.useRef(null);
  const controls = useAnimation();
  let totalWidth = 0;

  const calculateTotalWidth = () => {
    const buttonsWidth = buttonsLoop.length * 40; // Assuming each button has a width of 40px
    const marginsWidth = (buttonsLoop.length - 1) * 20; // Assuming each button has a right margin of 20px
    totalWidth = buttonsWidth + marginsWidth;
  };

  const scrollButtons = () => {
    controls.start({
      x: -totalWidth,
      transition: {
        duration: totalWidth / 15, // Adjust the duration based on the total width
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    calculateTotalWidth();
    scrollButtons();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      calculateTotalWidth();
      scrollButtons();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-8">
      <div
        ref={containerRef}
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            width: "fit-content",
          }}
          animate={controls}
        >
          {buttonsLoop.map((button) => (
            <motion.button
              key={button.id}
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                borderRadius: "5px",
                backgroundColor: "",
                color: "white",
                cursor: "pointer",
              }}
            >
              {button.text}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingBackground;
