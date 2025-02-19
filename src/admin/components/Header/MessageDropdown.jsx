import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MessageDropdown = ({ messages, isOpen, toggleDropdown, dropdownRef }) => {
  const truncateText = (text, limit = 8) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return text;
  };
  const dropdownVariants = {
    initial: { opacity: 0, y: -10, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="rounded-full h-10 w-10 bg-gray-100 flex items-center justify-center relative"
        onClick={toggleDropdown}
      >
        <FaEnvelope className="text-gray-700" size={18} />
        {messages.filter((message) => message.unread > 0).length > 0 && (
          <span className="absolute -top-2 -right-2 h-5 w-5 bg-red-600 text-[12px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
            {messages.filter((message) => message.unread > 0).length}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-12 right-0 mt-2 w-96 bg-white border border-gray-200 rounded-xl shadow-main z-10"
            variants={dropdownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="py-4 px-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-semibold">Messages</span>
                <Link
                  to="#"
                  className="relative text-gray-800 text-sm font-medium after:block after:h-[2px] after:bg-gray-800 after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  View all
                </Link>
              </div>
            </div>
            <div>
              {messages.map((message) => (
                <a
                  key={message.id}
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 border-b last:border-b-0"
                >
                  <div className="flex items-start gap-2">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={message.avatar}
                      alt={message.name}
                    />

                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-800 font-semibold">
                          {message.name}
                        </span>
                        {message.unread > 0 && (
                          <span className="h-4 w-4 bg-red-600 text-[12px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
                            {message.unread}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">
                        {truncateText(message.message)}
                      </p>
                      <p className="text-gray-500 text-xs">{message.time}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MessageDropdown;