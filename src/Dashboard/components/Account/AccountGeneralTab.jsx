// // src/Dashboard/components/Account/AccountGeneralTab.jsx
// import React from "react";
// import Button from "../Button";

// const AccountGeneralTab = ({
//   userData,
//   isEditing,
//   handleInputChange,
//   handleEditClick,
//   handleCancelClick,
//   handleSaveChanges,
//   isSaving,
// }) => {
//   return (
//     <div className="w-full space-y-4">
//       <div>
//         <input
//           type="email"
//           name="email"
//           value={userData.email || ""}
//           disabled
//           className={`block w-full lg:w-1/2 border-gray-300 rounded-full opacity-50`}
//           placeholder="Your Email"
//         />
//       </div>
//       <div className="flex flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
//         <div className="w-full lg:w-1/4 md:w-1/2">
//           <input
//             type="text"
//             name="firstName"
//             value={userData.firstName || ""}
//             onChange={handleInputChange}
//             disabled={!isEditing}
//             placeholder="First Name"
//             className={`block w-full border-gray-300 rounded-full  ${
//               isEditing
//                 ? "opacity-100 hover:border-black transition-all ease-in duration-150"
//                 : "opacity-50 "
//             }`}
//           />
//           {isEditing && !userData.firstName && (
//             <p className="text-[#FF0000] font-medium text-sm mt-1">
//               First name is required.
//             </p>
//           )}
//         </div>
//         <div className="w-full lg:w-1/4 md:w-1/2">
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={userData.lastName || ""}
//             onChange={handleInputChange}
//             disabled={!isEditing}
//             className={`block w-full border-gray-300 rounded-full ${
//               isEditing
//                 ? "opacity-100 hover:border-black transition-all ease-in duration-150"
//                 : "opacity-50"
//             }`}
//           />
//           {isEditing && !userData.lastName && (
//             <p className="text-[#FF0000] font-medium text-sm mt-1">
//               Last name is required.
//             </p>
//           )}
//         </div>
//       </div>
//       <div className="flex justify-end w-full pt-4 space-x-4 lg:w-1/2">
//         {!isEditing ? (
//           <Button onClick={handleEditClick}>Edit</Button>
//         ) : (
//           <>
//             <button
//               className="px-6 py-1 font-semibold border border-gray-300 rounded-full text-sub-color"
//               onClick={handleCancelClick}
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSaveChanges}
//               className={`px-6 py-1 border text-green-500 border-green-500 hover:shadow-newShadow transition-all ease-in duration-150 font-semibold rounded-full ${
//                 isSaving ? "opacity-100" : ""
//               }`}
//               disabled={isSaving}
//             >
//               {isSaving ? "Saving..." : "Save Changes"}
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AccountGeneralTab;



import React from "react";
import Button from "../Button";
import InputField from "../InputField"; // Adjust the path if necessary

const AccountGeneralTab = ({
  userData,
  isEditing,
  handleInputChange,
  handleEditClick,
  handleCancelClick,
  handleSaveChanges,
  isSaving,
}) => {
  return (
    <div className="lg:w-1/2 w-full space-y-4">
      <div className="relative">
        <InputField
          type="email"
          name="email"
          value={userData.email || ""}
          disabled
          className="block text-gray-400"
          placeholder="Your Email"
           isEditing={false}
        />
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
        <div className="w-full lg:w-1/2">
          <InputField
            type="text"
            name="firstName"
            value={userData.firstName || ""}
            onChange={handleInputChange}
             disabled={!isEditing}
            placeholder="First Name"
            className={`block w-full ${
              isEditing
                ? "opacity-100"
                : "text-gray-400"
            }`}
             isEditing={isEditing}
          />
          {isEditing && !userData.firstName && (
            <p className="text-[#FF0000] font-medium text-sm mt-1">
              First name is required.
            </p>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <InputField
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={userData.lastName || ""}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`block w-full ${
              isEditing
                ? "opacity-100"
                : "text-gray-400"
            }`}
             isEditing={isEditing}
          />
          {isEditing && !userData.lastName && (
            <p className="text-[#FF0000] font-medium text-sm mt-1">
              Last name is required.
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-end w-full pt-4 space-x-4">
        {!isEditing ? (

          <button onClick={handleEditClick} className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600">Edit</button>
        ) : (
          <>
            <button
              className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium transition-colors duration-300 bg-white border border-gray-300 rounded-lg text-balck hover:bg-gray-100 hover:border-gray-400"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button
              onClick={handleSaveChanges}
              className={`inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600 ${
                isSaving ? "opacity-100" : ""
              }`}
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountGeneralTab;