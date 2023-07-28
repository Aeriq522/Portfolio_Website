import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

const TopMenuBar = () => {
  const iconVariants = {
    default: {
      rotate: 0,
    },
    hovered: {
      rotate: 305,
    },
    clicked: {
      rotate: 305,
    },
  };

  return (
    <div>
      <div className="bw-[100vw] flex justify-between shadow-gray-800 shadow-lg">
        <div className="px-8 flex items-center justify-center">
          Logo
        </div>
        <p className="p-8"></p>
        <div className="px-8 flex items-center justify-center">
          <motion.div
            whileHover="hovered"
            initial="default"
            variants={iconVariants}
            transition={{ duration: .25, ease: "easeInOut" }}
          >
            <MenuIcon className="active:scale-125 ease-in-out transition-all" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TopMenuBar;
