// // // src/admin/components/Header.jsx

// import React from 'react';
// import UserAvatar from './UserAvatar';
// import { CiSearch } from "react-icons/ci";
// import { BsCart3 } from "react-icons/bs";
// import { HiOutlineBellAlert } from "react-icons/hi2";
// import { BsArrowsFullscreen } from "react-icons/bs";
// import { IoSettingsOutline } from "react-icons/io5";


// const Header = () => {
//     return (
//         <header className="bg-white py-4 shadow-md sticky top-0 z-10 px-4">
//             <div className="container mx-auto flex items-center justify-between">
//                 {/* Left Side: Search Field */}
//                 <div className="w-1/2">
//                     <div className="relative">
//                         <input
//                             type="text"
//                             placeholder="Search for Results..."
//                             className="py-2 pl-10 pr-4 w-3/5 rounded-md border text-[#61748f] text-sm border-[#e2e6f1] focus:outline-none hover:border-black transition-colors duration-200 ease-in"
//                         />
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <CiSearch className="size-5 text-gray-700" aria-hidden="true" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side: Buttons */}
//                 <div className="flex items-center space-x-3 cursor-pointer">
//                     <a className="relative rounded-md p-1.5 border border-[#e2e6f1]">
//                         <BsCart3 className='h-6 w-6 text-gray-700' />
//                         <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white rounded-full text-xxs px-1.5 font-normal">
//                             5
//                         </span>
//                     </a>
//                     <a className="relative rounded-md p-1.5 border border-[#e2e6f1]">
//                         <HiOutlineBellAlert className="h-6 w-6 text-gray-700" />
//                         <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white rounded-full text-xxs px-1.5 font-normal">
//                             3
//                         </span>
//                     </a>
//                     {/* FullScreen-Icon */}
//                     <a className="rounded-md p-1.5 border border-[#e2e6f1]">
//                         <BsArrowsFullscreen className="h-6 w-6 p-0.5 text-gray-700" />
//                     </a>
//                     <UserAvatar /> {/*  Assume UserAvatar component displays the user avatar  */}

//                     <a className="rounded-md p-1.5 border border-[#e2e6f1]">
//                         <IoSettingsOutline className="h-6 w-6 text-gray-700" />
//                     </a>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;


import React, { useState, useEffect, useRef } from 'react';
import UserAvatar from './UserAvatar';
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { BsArrowsFullscreen, BsArrowsAngleContract } from "react-icons/bs"; // Import contract icon
import { IoSettingsOutline } from "react-icons/io5";
const Header = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const fullscreenRef = useRef(null);
    const handleFullscreen = () => {
        if (!isFullscreen) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
                document.documentElement.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { /* Firefox */
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE/Edge */
                document.msExitFullscreen();
            }
        }
    };
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement || !!document.mozFullScreenElement || !!document.webkitFullscreenElement || !!document.msFullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        };
    }, []);
    const IconButton = ({ icon: Icon, count, color = "bg-indigo-500" }) => (
        <button
            className="relative p-2 rounded-lg transition-all duration-300 bg-gray-100
                 group"
        >
            <Icon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 
                      transition-transform duration-300" />
            {count && (
                <span className={`absolute -top-1.5 -right-1.5 ${color} size-4 rounded-full 
                         flex items-center justify-center text-xxs text-white
                         animate-bounce`}>
                    {count}
                </span>
            )}
        </button>
    );
    return (
        <header className="bg-white py-4 shadow-md sticky top-0 z-10 px-4" ref={fullscreenRef}>
            <div className="container mx-auto flex items-center justify-between">
                {/* Left Side: Search Field */}
                <div className="w-1/2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for Results..."
                            className="py-2 pl-10 pr-4 w-3/5 rounded-full border text-[#61748f] text-sm border-gray-500 focus:outline-none hover:border-black transition-colors duration-200 ease-in"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <CiSearch className="size-5 text-gray-700" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <IconButton icon={BsCart3} count={5} color="bg-indigo-500" />
                    <IconButton icon={HiOutlineBellAlert} count={3} color="bg-pink-500" />
                    <div className="rounded-lg bg-gray-100 p-1.5 cursor-pointer" onClick={handleFullscreen}>
                        {isFullscreen ? (
                            <BsArrowsAngleContract className="h-6 w-6 p-0.5 text-gray-500 hover:text-gray-900" />
                        ) : (
                            <BsArrowsFullscreen className="h-6 w-6 p-0.5 text-gray-500 hover:text-gray-900" />
                        )}
                    </div>
                    {/* User Avatar */}
                    <UserAvatar />
                    <IconButton icon={IoSettingsOutline} />
                </div>
            </div>
        </header>
    );
};

export default Header;

