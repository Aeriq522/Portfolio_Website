import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";

const TopMenuBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between shadow-gray-800 shadow-lg absolute w-[100vw] text-white">
        <div className="px-8 flex items-center justify-center">
          Logo
        </div>
        <p className="p-8"></p>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default TopMenuBar;
