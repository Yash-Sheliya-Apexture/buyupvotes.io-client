// import React from "react";
// import { Link } from "react-router-dom";
// import { IoIosArrowDown } from "react-icons/io";
// import { motion, AnimatePresence } from "framer-motion";

// const UserDropdown = ({ isOpen, toggleDropdown, dropdownRef, userMenuItems }) => {
//   const dropdownVariants = {
//     initial: { opacity: 0, y: -10, scale: 0.95 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.2, ease: "easeInOut" },
//     },
//     exit: {
//       opacity: 0,
//       y: -10,
//       scale: 0.95,
//       transition: { duration: 0.15, ease: "easeInOut" },
//     },
//   };

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button className="flex items-center gap-1" onClick={toggleDropdown}>
//         <img
//           className="h-8 w-8 rounded-full object-cover"
//           src="https://randomuser.me/api/portraits/men/3.jpg"
//           alt="User Avatar"
//         />
//         <span className="ml-2 text-gray-700">Albert Flores</span>
//         <motion.div animate={{ rotate: isOpen ? 0 : -180 }} transition={{ duration: 0.2 }}>
//           <IoIosArrowDown className="w-4 h-4" />
//         </motion.div>
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="absolute top-12 right-0 mt-0.5 w-52 bg-white border border-gray-200 rounded-xl shadow-main z-10 p-2"
//             variants={dropdownVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             <nav>
//               {userMenuItems.map((item) => (
//                 <Link
//                   to={item.path}
//                   key={item.label}
//                   className={`flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg ${
//                     item.isLogout ? "text-red-600 hover:bg-red-100" : ""
//                   }`}
//                 >
//                   <span className="mr-3">{item.icon}</span>
//                   {item.label}
//                 </Link>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default UserDropdown;


// UserDropdown.js
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const UserDropdown = ({
  isOpen,
  toggleDropdown,
  dropdownRef,
  userMenuItems,
  user,
  logout,
}) => {
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

  const getInitials = (firstName) => {
    if (!firstName) return "";
    return firstName.charAt(0).toUpperCase();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button className="flex items-center gap-1" onClick={toggleDropdown}>
        {user ? (
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center uppercase font-semibold text-gray-700">
            {getInitials(user.firstName)}
          </div>
        ) : (
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
            {/* Default avatar or initial here if user is null */}
            U
          </div>
        )}

        <span className="ml-2 text-gray-700">
          {user ? user.firstName : "User"}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 0 : -180 }}
          transition={{ duration: 0.2 }}
        >
          <IoIosArrowDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-12 right-0 mt-0.5 w-52 bg-white border border-gray-200 rounded-xl shadow-main z-10 p-2"
            variants={dropdownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <nav>
              {userMenuItems.map((item) =>
                item.isLogout ? (
                  <button
                    key={item.label}
                    className={`flex items-center px-4 py-2 text-red-600 hover:bg-red-100 rounded-lg w-full text-left`}
                    onClick={item.onClick}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    key={item.label}
                    className={`flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserDropdown;