// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const data = [
//   {
//     id: 1,
//     remainingVotes: 1000,
//     label: "Votes remaining",
//     link: "dashboard/fundprice",
//     icon: "fas fa-wallet",
//   },
//   {
//     id: 2,
//     remainingVotes: 0,
//     label: "Total Orders",
//     link: "dashboard/upvoteorder",
//     icon: "fas fa-chart-line",
//   },
//   {
//     id: 3,
//     remainingVotes: 0,
//     label: "Order in Progress",
//     link: "dashboard/upvoteorder",
//     icon: "fas fa-bolt",
//   },
//   {
//     id: 4,
//     label: "New Order",
//     link: "dashboard/upvoteorder",
//     icon: "fas fa-plus-circle",
//   },
//   {
//     id: 5,
//     label: "Buy Reddit Accounts",
//     link: "dashboard/account",
//     icon: "fab fa-reddit",
//   },
//   {
//     id: 6,
//     label: "API Documentation",
//     link: "",
//     icon: "fas fa-code",
//   },
// ];

// const DataSection = () => {
//   const [dataList, setDataList] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = () => {
//       setDataList(data); // Replace with fetched JSON data if necessary.
//     };
//     fetchData();
//   }, []);

//   const handleCardClick = (link) => {
//     if (link) navigate(`/${link}`);
//   };

//   return (
//     <div className="w-full py-5 lg:w-full">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {dataList.map((item) => (
//           <div
//             key={item.id}
//             className="w-full h-full cursor-pointer"
//             onClick={() => handleCardClick(item.link)}
//           >
//             <div
//               className="flex items-center justify-between w-full h-full p-4 bg-white shadow-main rounded-small"
//               style={{ minHeight: "100px" }}
//             >
//               {/* Left Section */}
//               <div>
//                 {item.remainingVotes !== undefined && (
//                   <p className="mb-2 font-bold lg:text-large text-sub-color">
//                     {item.remainingVotes}
//                   </p>
//                 )}
//                 <p className="font-normal lg:text-base text-para-color">
//                   {item.label}
//                 </p>
//               </div>

//               {/* Icon Section */}
//               <div className="p-4 text-main-color lg:text-large text-basic">
//                 <i
//                   className={`${item.icon} hover:bg-gray-hover rounded-full transition-all ease-in duration-150`}
//                 ></i>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DataSection;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const data = [
//   {
//     id: 1,
//     remainingVotes: 1000,
//     label: "Votes remaining",
//     link: "dashboard/fundprice",
//     icon: "fas fa-wallet",
//   },
//   {
//     id: 2,
//     remainingVotes: 0,
//     label: "Total Orders",
//     link: "dashboard/upvoteorder",
//     icon: "fas fa-chart-line",
//   },
//   {
//     id: 3,
//     remainingVotes: 0,
//     label: "Order in Progress",
//     link: "dashboard/upvoteorder",
//     icon: "fas fa-bolt",
//   },
//   {
//     id: 4,
//     label: "New Order",
//     link: "dashboard/upvoteorder",
//     icon: "fas fa-plus-circle",
//   },
//   {
//     id: 5,
//     label: "Buy Reddit Accounts",
//     link: "dashboard/account",
//     icon: "fab fa-reddit",
//   },
//   {
//     id: 6,
//     label: "API Documentation",
//     link: "",
//     icon: "fas fa-code",
//   },
// ];

// const DataSection = () => {
//   const [dataList, setDataList] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = () => {
//       setDataList(data); // Replace with fetched JSON data if necessary.
//     };
//     fetchData();
//   }, []);

//   const handleCardClick = (link) => {
//     if (link) navigate(`/${link}`);
//   };

//   return (
//     <div className="w-full py-5 lg:w-full">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {dataList.map((item) => (
//           <div
//             key={item.id}
//             className="w-full h-full cursor-pointer"
//             onClick={() => handleCardClick(item.link)}
//           >
//             <div
//               className="flex items-center justify-between w-full h-full p-4 bg-white shadow-main rounded-small"
//               style={{ minHeight: "100px" }}
//             >
//               {/* Left Section */}
//               <div>
//                 {item.remainingVotes !== undefined && (
//                   <p className="mb-2 font-bold lg:text-large text-sub-color">
//                     {item.remainingVotes}
//                   </p>
//                 )}
//                 <p className="font-normal lg:text-base text-para-color">
//                   {item.label}
//                 </p>
//               </div>

//               {/* Icon Section */}
//               <div className="p-4 text-main-color lg:text-large text-basic">
//                 <i
//                   className={`${item.icon} hover:bg-gray-hover rounded-full transition-all ease-in duration-150`}
//                 ></i>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DataSection;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import SkeletonDataSection from "./SkeletonDataSection"; // Import the SkeletonCard
import { FaWallet, FaChartLine, FaBolt, FaPlusCircle } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import {  FiCode  } from "react-icons/fi";

const DataSection = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          console.error("Token missing or invalid.");
          setLoading(false);
          return;
        }
        const response = await axios.get(
          `${API_BASE_URL}/auth/orders?timestamp=${new Date().getTime()}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!Array.isArray(response.data)) {
          console.error("Invalid order data format.");
          setLoading(false);
          return;
        }

        const allOrders = response.data;
        const totalOrders = allOrders.length;
        const ordersInProgress = allOrders.filter(order => order.status === "In Progress").length;

        let totalCompletedVotes = 0;
          if(Array.isArray(allOrders)){
            allOrders.forEach(order => {
              const completedVotes = Number(order.completedVotes); // Convert to Number
                if(!isNaN(completedVotes)){
                  totalCompletedVotes += completedVotes
                }
             });
        }

        let totalTokens = 0;
        try {
             const paymentResponse = await axios.get(`${API_BASE_URL}/payment`, {
               headers: { Authorization: `Bearer ${token}` }
            });
            if (Array.isArray(paymentResponse.data)) {
                  paymentResponse.data.forEach(transaction => {
                     const tokens = Number(transaction.tokens)
                    if(!isNaN(tokens)){
                         totalTokens += tokens;
                     }
                });
             }
          } catch (error) {
            console.error("Error fetching payment:", error)
        }

         const voteBalance = (totalTokens - totalCompletedVotes);


       const data = [
          {
            id: 1,
            remainingVotes: voteBalance,
            label: "Votes remaining",
            link: "dashboard/fundprice",
            icon: <FaWallet />,
          },
          {
            id: 2,
            remainingVotes: totalOrders,
            label: "Total Orders",
            link: "dashboard/upvoteorder",
            icon: <FaChartLine />,
          },
          {
            id: 3,
            remainingVotes: ordersInProgress,
            label: "Order in Progress",
            link: "dashboard/upvoteorder",
             icon: <FaBolt />,
          },
          {
            id: 4,
            label: "New Order",
            link: "dashboard/upvoteorder",
            icon: <FaPlusCircle />,
          },
          {
            id: 5,
            label: "Buy Reddit Accounts",
            link: "dashboard/account",
            icon: <FaReddit />,
          },
          {
            id: 6,
            label: "API Documentation",
            link: "",
              icon: <FiCode />,
          },
        ];


        setDataList(data);
      } catch (error) {
           console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [API_BASE_URL]);

  const handleCardClick = (link) => {
    if (link) navigate(`/${link}`);
  };

    const renderSkeletons = () => (
        Array.from({length: 6}).map((_, index) => (
            <SkeletonDataSection key={index} />
        ))
    )

  return (
    <div className="w-full py-5 lg:w-full">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
            renderSkeletons()
        ) : (
          dataList.map((item) => (
            <div
              key={item.id}
              className="w-full h-full cursor-pointer"
              onClick={() => handleCardClick(item.link)}
            >
              <div
                className="flex items-center justify-between w-full h-full p-4 bg-white shadow-main rounded-small"
                style={{ minHeight: "100px" }}
              >
                {/* Left Section */}
                <div>
                  {item.remainingVotes !== undefined && (
                    <p className="mb-2 font-bold lg:text-large text-sub-color">
                      {item.remainingVotes}
                    </p>
                  )}
                  <p className="font-normal lg:text-base text-para-color">
                    {item.label}
                  </p>
                </div>

                {/* Icon Section */}
               <div className="p-4 text-main-color lg:text-large text-basic">
                     {item.icon && React.cloneElement(item.icon, {
                        className: "transition-all ease-in duration-150"
                       })}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DataSection;