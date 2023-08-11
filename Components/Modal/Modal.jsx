import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    <>
      {/* Button to open the modal */}
      <div className="px-8 flex items-center justify-center z-10">
        <motion.div
          whileHover="hovered"
          onClick={openModal}
          initial="default"
          variants={iconVariants}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <MenuIcon
            onClick={openModal}
            className="active:scale-125 ease-in-out transition-all"
          />
        </motion.div>
      </div>

      {/* The Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
            <p>Modal content goes here.</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
