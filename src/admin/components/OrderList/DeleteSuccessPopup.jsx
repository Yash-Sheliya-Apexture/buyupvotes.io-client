// DeleteSuccessPopup.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdDeleteForever, MdOutlineErrorOutline } from "react-icons/md";

const DeleteSuccessPopup = ({ onClose }) => {
  const backdropVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const popupVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
        variants={backdropVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md p-6"
          variants={popupVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                <MdOutlineErrorOutline className="text-emerald-600 text-3xl" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Deletion Successful!
            </h2>
            <p className="text-gray-700">The order has been deleted.</p>
            <button
              className="mt-4 bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              OK
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DeleteSuccessPopup;
