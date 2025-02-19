// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import imageUrl from "../../assets/Images/Char.jpg";
// import { FaUser, FaEnvelope, FaFile, FaCog, FaQuestionCircle, FaLock } from 'react-icons/fa';

// const UserAvatar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     return (
//         <div className="relative" ref={dropdownRef}>
//             <button onClick={toggleDropdown} className="rounded-md overflow-hidden">
//                 <img src={imageUrl} alt="userImage" className="object-cover w-10" />
//             </button>
//             {isOpen && (
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute -right-2 mt-4 w-44 rounded-md shadow-main bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
//                     role="menu"
//                     aria-orientation="vertical"
//                     aria-labelledby="menu-button"
//                     tabIndex="-1"
//                 >
//                     <div className="py-1" role="none">
//                         <div className="text-xs text-sub-color text-center" role="menuitem">Mr.Kartavya</div>
//                         <div className="text-xs text-gray-500 text-center" role="menuitem">Fronted Devloper</div>
//                         <hr className="border-gray-200 my-1" />
//                         {[
//                             { icon: FaUser, label: "Profile" },
//                             { icon: FaEnvelope, label: "Mail Inbox" },
//                             { icon: FaCog, label: "Settings" },
//                             { icon: FaQuestionCircle, label: "Help" },
//                             { icon: FaLock, label: "Log Out" }
//                         ].map(({ icon: Icon, label }, index) => (
//                             <a
//                                 key={index}
//                                 href="#"
//                                 className="text-gray-700 gap-3 flex items-center px-4 py-2 text-small hover:bg-gray-100 hover:text-main-color transition-colors duration-200"
//                             >
//                                 <div className='p-2 bg-[#ffe2d3] rounded-full'>
//                                     <Icon className='text-main-color size-4' />
//                                 </div>
//                                 <span className="text-para-color hover:text-main-color">
//                                     {label}
//                                 </span>
//                             </a>
//                         ))}
//                     </div>
//                 </motion.div>
//             )}
//         </div>
//     );
// };

// export default UserAvatar;




// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import imageUrl from "../../assets/Images/Char.jpg";
// import { FaUser, FaEnvelope, FaFile, FaCog, FaQuestionCircle, FaLock } from 'react-icons/fa';

// const UserAvatar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     return (
//         <div className="relative" ref={dropdownRef}>
//             <button onClick={toggleDropdown} className="rounded-md overflow-hidden">
//                 <img src={imageUrl} alt="userImage" className="object-cover h-9" />
//             </button>
//             {isOpen && (
//                 <motion.div
//                     initial={{ opacity: 0, y: 60 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 60 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute -right-2 mt-5 w-44 rounded-md shadow-main bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
//                     role="menu"
//                     aria-orientation="vertical"
//                     aria-labelledby="menu-button"
//                     tabIndex="-1"
//                 >
//                     <div className="py-1" role="none">
//                         <div className="text-xs text-sub-color text-center" role="menuitem">Mr.Kartavya</div>
//                         <div className="text-xs text-gray-500 text-center" role="menuitem">Fronted Devloper</div>
//                         <hr className="border-gray-200 my-1" />
//                         {[
//                             { icon: FaUser, label: "Profile" },
//                             { icon: FaEnvelope, label: "Mail Inbox" },
//                             { icon: FaCog, label: "Settings" },
//                             { icon: FaQuestionCircle, label: "Help" },
//                             { icon: FaLock, label: "Log Out" }
//                         ].map(({ icon: Icon, label }, index) => (
//                             <a
//                                 key={index}
//                                 href="#"
//                                 className="text-gray-700 gap-3 flex items-center px-4 py-2 text-small hover:bg-gray-100 hover:text-main-color transition-colors duration-200"
//                             >
//                                 <div className='p-2 bg-[#ffe2d3] rounded-full'>
//                                     <Icon className='text-main-color size-4' />
//                                 </div>
//                                 <span className="text-para-color hover:text-main-color">
//                                     {label}
//                                 </span>
//                             </a>
//                         ))}
//                     </div>
//                 </motion.div>
//             )}
//         </div>
//     );
// };


// export default UserAvatar;


import React from 'react';

const UserAvatar = () => {
    return (
        <div className="flex items-center space-x-2 cursor-pointer">
            <img
                src="https://randomuser.me/api/portraits/men/8.jpg"
                alt="User Avatar"
                className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-700 hidden md:block">Albert Flores</span>
        </div>
    );
};

export default UserAvatar;