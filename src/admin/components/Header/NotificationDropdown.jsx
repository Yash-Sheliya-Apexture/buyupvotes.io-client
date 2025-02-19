import React from "react";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NotificationDropdown = ({
  notifications,
  isOpen,
  toggleDropdown,
  dropdownRef,
}) => {
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
        className="rounded-full h-10 w-10 bg-gray-100 flex items-center justify-center"
        onClick={toggleDropdown}
      >
        <FaBell className="text-gray-700" size={18} />
        {notifications.length > 0 && (
          <span className="absolute -top-2 -right-2 h-5 w-5 bg-red-600 text-[12px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
            {notifications.length}
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
                <span className="text-gray-800 font-semibold">
                  Notifications
                </span>
                <Link
                  to="#"
                  className="relative text-gray-800 text-sm font-medium after:block after:h-[2px] after:bg-gray-800 after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  View all
                </Link>
              </div>
            </div>
            <div>
              {notifications.map((notification) => (
                <a
                  key={notification.id}
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 border-b last:border-b-0"
                >
                  <div className="flex items-start gap-2">
                    <img
                      src={notification.avatar}
                      alt="Notification Avatar"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="w-full">
                      <p className="text-gray-800 font-semibold">
                        {truncateText(notification.message)}
                      </p>
                      <p className="text-gray-600 text-xs">
                        {truncateText(notification.details)}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {notification.time}
                      </p>
                    </div>
                    {/* Dot:-  Unread notification */}
                    {!notification.isRead && (
                      <div>
                        <span className="h-[10px] w-[10px] bg-red-500 border border-white dark:border-slate-400 rounded-full inline-block"></span>
                      </div>
                    )}
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

export default NotificationDropdown;