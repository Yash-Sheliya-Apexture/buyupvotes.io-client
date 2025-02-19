// import React from "react";
// import payment_logos from "../assets/Images/allPaymentIcons.png";
// import Customize_Payment from "../Dashboard/components/Customize_Payment";
// import { useAuth } from "../auth/AuthContext";
// import { Link } from "react-router-dom";

// const Currency = () => {
//   const { user } = useAuth();

//   return (
//     <section className="Currency-Exchange bg-white pb-10">
//       <div className="container mx-auto space-y-5">
//         <div className="flex items-center justify-center">
//           <img src={payment_logos} alt="" className="rounded-lg lg:max-w-3xl" />
//         </div>
//         {!user ? (
//           <div className="Currency-main">
//             <div className="relative flex items-center justify-center space-x-4">
//               <Link
//                 to="/signin"
//                 className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium transition-colors duration-300 bg-white border border-gray-300 rounded-lg text-balck hover:bg-gray-100 hover:border-gray-400"
//               >
//                 Sign-In
//               </Link>
//               <Link
//                 to="/signup"
//                 className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
//               >
//                 Sign-Up
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <Customize_Payment />
//         )}
//       </div>
//     </section>
//   );
// };

// export default Currency;




import React from "react";
import payment_logos from "../assets/Images/allPaymentIcons.png";
import Customize_Payment from "../Dashboard/components/Customize_Payment";
import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom";

const Currency = () => {
  const auth = useAuth(); // Get the entire auth context
  const { user, loading } = auth || {}; //Destructure user, loading from context

  return (
    <section className="Currency-Exchange bg-white pb-10">
      <div className="container mx-auto space-y-5">
        <div className="flex items-center justify-center">
          <img src={payment_logos} alt="" className="rounded-lg lg:max-w-3xl" />
        </div>
        {loading ? null : !auth?.user ? (  // Check if auth is defined and then user
          <div className="Currency-main">
            <div className="relative flex items-center justify-center space-x-4">
              <Link
                to="/signin"
                className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium transition-colors duration-300 bg-white border border-gray-300 rounded-lg text-balck hover:bg-gray-100 hover:border-gray-400"
              >
                Sign-In
              </Link>
              <Link
                to="/signup"
                className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
              >
                Sign-Up
              </Link>
            </div>
          </div>
        ) : (
          <Customize_Payment />
        )}
      </div>
    </section>
  );
};

export default Currency;
