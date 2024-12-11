// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/Images/blog-image.png";
// import { FaEye } from "react-icons/fa";
// import { IoMdShare } from "react-icons/io";

// const BlogJson = () => {
//   const [blogs, setBlogs] = useState([]); // State to hold blog data
//   const navigate = useNavigate(); // React Router hook for navigation

//   useEffect(() => {
//     // Fetch the data from public/data.json
//     fetch("/data.json")
//       .then((response) => response.json())
//       .then((data) => setBlogs(data))
//       .catch((error) => console.error("Error fetching blog data:", error));
//   }, []);

//   return (
//     <div className="container mx-auto">
//       {/* Blog Logo */}
//       <div className="flex justify-center mb-8">
//         <img src={logo} alt="Blog_logo" className="h-10" />
//       </div>

//       {/* Blog-Card Section */}
//       <div className="flex justify-center items-center gap-4 my-10">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             onClick={() => navigate(`dashboard/BlogJson/${blog.id}`)} // Navigate to blog details
//             className="bg-[#fff] text-[#2D2624] relative shadow-md border-gray-border z-0 cursor-pointer overflow-hidden rounded-small"
//           >
//             <div className="relative">
//               <div className="size-10 rounded-full overflow-hidden select-none left-6 z-[9] -bottom-6 absolute">
//                 <img
//                   src={blog.profileImage}
//                   alt="profile"
//                   className="w-full h-full text-center object-cover text-transparent"
//                 />
//               </div>
//               <span className="overflow-hidden relative align-bottom inline-block w-full h-[200px]">
//                 <img
//                   src={blog.coverImage}
//                   alt="Background"
//                   className="w-full h-full object-cover top-0 left-0 absolute"
//                 />
//               </span>
//             </div>

//             <div className="pt-9 px-6">
//               <div className="space-y-1">
//                 <h1 className="text-[#2d2624] font-bold">{blog.author}</h1>
//                 <p className="text-[#919EAB] font-medium">{blog.date}</p>
//                 <p className="text-[#2D2624] text-xs leading-6">{blog.title}</p>
//               </div>
//             </div>

//             <div className="flex items-center justify-end p-8">
//               <div className="flex items-center text-[#919EAB] space-x-4">
//                 <span className="flex items-center space-x-1">
//                   <FaEye className="size-4" />
//                   <span className="text-[#919EAB] text-xs">{blog.views}</span>
//                 </span>
//                 <span className="flex items-center space-x-1">
//                   <IoMdShare className="size-4" />
//                   <span className="text-[#919EAB] text-xs">{blog.shares}</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogJson;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link component
import logo from "../../assets/Images/blog-image.png";
import { FaEye } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const BlogJson = () => {
  const [blogs, setBlogs] = useState([]); // State to hold blog data

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched blog data:", data); // Log data
        setBlogs(data);
      })
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

  return (
    <div className="container mx-auto">
      {/* Blog Logo */}
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Blog_logo" className="h-10" />
      </div>

      {/* Blog-Card Section */}
      <div className="flex justify-center items-center gap-4 my-10">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/dashboard/blogjson/${blog.id}`} // Adjusted to include the full path
            className="bg-[#fff] text-[#2D2624] relative shadow-md border-gray-border z-0 cursor-pointer overflow-hidden rounded-small"
          >
            <div className="relative">
              <div className="size-10 rounded-full overflow-hidden select-none left-6 z-[9] -bottom-6 absolute">
                <img
                  src={blog.profileImage}
                  alt="profile"
                  className="w-full h-full text-center object-cover text-transparent"
                />
              </div>
              <span className="overflow-hidden relative align-bottom inline-block w-full h-[200px]">
                <img
                  src={blog.coverImage}
                  alt="Background"
                  className="w-full h-full object-cover top-0 left-0 absolute"
                />
              </span>
            </div>

            <div className="pt-9 px-6">
              <div className="space-y-1">
                <h1 className="text-[#2d2624] font-bold">{blog.author}</h1>
                <p className="text-[#919EAB] font-medium">{blog.date}</p>
                <p className="text-[#2D2624] text-xs leading-6">{blog.title}</p>
              </div>
            </div>

            <div className="flex items-center justify-end p-8">
              <div className="flex items-center text-[#919EAB] space-x-4">
                <span className="flex items-center space-x-1">
                  <FaEye className="size-4" />
                  <span className="text-[#919EAB] text-xs">{blog.views}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <IoMdShare className="size-4" />
                  <span className="text-[#919EAB] text-xs">{blog.shares}</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogJson;
