// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaAngleDown } from "react-icons/fa6";
// import bluebackground from "../../assets/Images/cyan-blur.png";
// import Dropdown from "../components/Dropdown";
// import Breadcrumb from "../components/Breadcrumb";
// import Button from "../components/Button";

// const OrderComment = () => {
//   const [selectedNumber, setSelectedNumber] = useState(""); // For storing the selected number
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Toggle dropdown visibility
//   const [link, setLink] = useState("");
//   const [comment, setComment] = useState("");
//   const [errors, setErrors] = useState({ link: "", comment: "" });
//   const [successMessage, setSuccessMessage] = useState(""); // Success message state

//   const [formData, setFormData] = useState({ speed: "", numberOfComments: "" });

//   const numbers = Array.from({ length: 50 }, (_, i) => i + 1);

//   // Validate URL function
//   const validateURL = (url) => {
//     const redditRegex = /^https?:\/\/(www\.)?reddit\.com\/.+$/;
//     return redditRegex.test(url);
//   };

//   const handleLinkChange = (e) => {
//     const value = e.target.value;
//     setLink(value);
//     if (!value) {
//       setErrors((prevErrors) => ({ ...prevErrors, link: "Link is required" }));
//     } else if (!validateURL(value)) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         link: "Invalid Reddit link",
//       }));
//     } else {
//       setErrors((prevErrors) => ({ ...prevErrors, link: "" }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let newErrors = { link: "", comment: "" };

//     // Validate Link
//     if (!link) {
//       newErrors.link = "Link is required";
//     } else if (!validateURL(link)) {
//       newErrors.link = "Invalid Reddit link";
//     }

//     // Validate Comment
//     if (!comment) {
//       newErrors.comment = "Comment content is required";
//     }

//     setErrors(newErrors);

//     // Prevent form submission if there are errors
//     if (newErrors.link || newErrors.comment) {
//       return;
//     }

//     // Form is valid, proceed with submission
//     console.log("Form submitted with:", { link, comment });

//     // Reset form
//     setLink("");
//     setComment("");
//     setErrors({ link: "", comment: "" });
//     setSuccessMessage("Order submitted successfully!");

//     // Clear success message after 3 seconds
//     setTimeout(() => {
//       setSuccessMessage("");
//     }, 2000);
//   };

//   // Toggle Dropdown
//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   // Handle Dropdown Selection
//   const handleSelect = (number) => {
//     setSelectedNumber(number);
//     setIsDropdownOpen(false);
//   };

//   const breadcrumbs = [
//     { label: "Dashboard", link: "/dashboard" },
//     { label: "Order Comments" }, // No link for the current page
//   ];

//   return (
//     <section>
//       <div className="container mx-auto">
//         <div>
//           <h1 className="mb-2 font-semibold text-sub-color text-small lg:text-basic">
//             Order Comment
//           </h1>
//           <div className="flex items-center">
//             <Breadcrumb items={breadcrumbs} />
//           </div>
//         </div>

//         <div className="my-6">
//           {/* Instructions */}
//           <div className="border border-gray-border rounded-2xl p-4 bg-white shadow-main">
//             <h1 className="text-small font-semibold text-light-red underline underline-offset-1 mb-2">
//               <u>Please read instructions carefully before placing an order:</u>
//             </h1>
//             <p className="text-sub-color text-small font-normal leading-6 mb-4">
//               This service allows you to generate and automate Reddit comments
//               using our extensive network of Reddit accounts. Each automated
//               comment will deduct 10 upvotes from your balance.
//             </p>
//             <div className="flex justify-between items-center mb-4">
//               {/* Left Side */}
//               <div className="w-1/2">
//                 <h3 className="font-medium text-small text-sub-color underline underline-offset-1">
//                   Custom comments:{" "}
//                 </h3>
//                 <div className="flex items-center my-2 space-x-20">
//                   <p className="text-small text-sub-color">
//                     Minimum quantity: <span className="font-bold">1</span>
//                   </p>
//                   <p className="text-small text-sub-color">
//                     Maximum quantity: <span className="font-bold">75</span>
//                   </p>
//                 </div>
//               </div>

//               {/* Right Side */}
//               <div className="w-1/2">
//                 <h3 className="font-medium text-small text-sub-color underline underline-offset-1">
//                   Comment upvotes (per comment):
//                 </h3>
//                 <div className="flex items-center my-2 space-x-20">
//                   <p className="text-small text-sub-color">
//                     Minimum quantity: <span className="font-bold">5</span>
//                   </p>
//                   <p className="text-small text-sub-color">
//                     Maximum quantity: <span className="font-bold">1000</span>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-center items-center mb-4">
//               <hr className="w-[80%] text-sub-color" />
//             </div>

//             <div className="flex mb-4">
//               <p className="text-sub-color text-small underline underline-offset-1 font-medium">
//                 Links can be inserted in the following format: &nbsp;
//               </p>
//               <span className="text-sub-color font-bold">
//                 [link text](https://yourlink.com)
//               </span>
//             </div>

//             <div className="flex mb-4">
//               <p className="text-sub-color text-small underline underline-offset-1 font-medium">
//                 To make a new line in the comment, include the text: &nbsp;
//               </p>
//               <span className="text-sub-color font-bold"> [newline]</span>
//             </div>

//             <p className="text-sub-color text-small font-medium mb-4">
//               Comments are made with aged but low-karma accounts and{" "}
//               <span className="font-bold">
//                 are not guaranteed to go through
//               </span>{" "}
//               due to Reddit's spam filters or a subreddit's karma requirements.
//             </p>

//             <p className="text-sub-color text-small font-medium mb-4">
//               Due to the high amount of resources spent on making a comment,{" "}
//               <span className="font-bold">we do not provide refunds</span> for
//               comment orders that do not go through. Please make sure to test
//               this service before ordering in bulk.
//             </p>
//           </div>

//           <form className="">
//             <div className="flex items-center gap-4 p-4 border-gray-border rounded-2xl bg-white shadow-main my-4">
//               <div className="flex w-[50%] flex-col relative">
//                 {/* Number of Comments filed */}
//                 <Dropdown
//                   options={numbers}
//                   selectedValue={formData.numberOfComments}
//                   onSelect={(value) =>
//                     setFormData({ ...formData, numberOfComments: value })
//                   }
//                   placeholder="Number of Comments"
//                   error={errors.numberOfComments}
//                 />
//               </div>

//               {/* Minutes filed */}
//               <div className="flex flex-col w-[50%]">
//                 <div className="flex relative">
//                   <input
//                     type="text"
//                     className="w-full p-2 rounded-full border hover:border-boldfont-bold transition-all ease-in duration-200"
//                     placeholder="1 minutes"
//                     disabled
//                   />
//                   <FaAngleDown className="absolute top-3 right-3" />
//                 </div>
//               </div>
//             </div>
//           </form>

//                   {/* Comment form */}
//           <div className="p-4 bg-white shadow-main rounded-2xl border border-gray-border py-10">
//             <h2 className="text-[20px] font-bold text-center text-[#2D2624] mb-4">
//               Comment #1
//             </h2>

//             {/* Input Fields */}
//             <div className="space-y-4">
//               {/* Link Input */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={link}
//                   onChange={handleLinkChange}
//                   placeholder="Link"
//                   className={`w-full px-4 py-2.5 border ${
//                     errors.link
//                       ? "border-[#FF5630] placeholder:text-[#FF5630] text-boldfont-bold"
//                       : "border-gray-300"
//                   } rounded-full text-[16px] hover:border-boldfont-bold transition-all ease-in duration-150`}
//                 />
//                 {errors.link && (
//                   <span className="text-[#FF5630] text-xs mt-1">
//                     {errors.link}
//                   </span>
//                 )}
//               </div>

//               {/* Comment Content Input */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={comment}
//                   onChange={(e) => setComment(e.target.value)}
//                   placeholder="Comment content"
//                   className={`w-full px-4 py-2.5 border ${
//                     errors.comment
//                       ? "border-[#FF5630] placeholder:text-[#FF5630] text-boldfont-bold"
//                       : "border-gray-300"
//                   } rounded-full text-[16px] hover:text-boldfont-bold transition-all ease-in duration-150`}
//                 />
//                 {errors.comment && (
//                   <span className="text-[#FF5630] text-xs mt-1">
//                     {errors.comment}
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center mt-6">
//               <Button onClick={handleSubmit}>Submit order</Button>
//             </div>

//             {/* Success Message */}
//             {successMessage && (
//               <div className="mt-4 text-center text-green-500 font-bold">
//                 {successMessage}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OrderComment;





import React, { useState, useRef, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropdown from "../components/Dropdown";
import InputField from "../../Dashboard/components/InputField";
import Breadcrumb from "../components/Breadcrumb";

const OrderComments = () => {
  const [formData, setFormData] = useState({
    comments: 1,
    commentSpeed: "1 minute",
  });

  const [commentInputs, setCommentInputs] = useState([
    { link: "", commentContent: "" },
  ]);
  const [errors, setErrors] = useState({});
  const firstErrorRef = useRef(null); // Ref to focus on first error

  // Moved options outside the component
  const numberOfCommentsOptions = React.useMemo(
    () => Array.from({ length: 75 }, (_, i) => i + 1),
    []
  );
  const commentSpeedOptions = React.useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) =>
        i + 1 === 1 ? `${i + 1} minute` : `${i + 1} minutes`
      ),
    []
  );

  const handleCommentNumberSelect = useCallback((value) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      comments: value,
      commentSpeed: value === 1 ? "1 minute" : previousFormData.commentSpeed,
    }));

    // Update the commentInputs array based on the selected number of comments
    setCommentInputs((previousInputs) => {
      return Array.from(
        { length: value },
        (_, i) => previousInputs[i] || { link: "", commentContent: "" }
      );
    });
  }, []);

  const handleCommentSpeedSelect = useCallback((value) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      commentSpeed: value,
    }));
  }, []);

  const handleInputChange = useCallback((index, field, value) => {
    setCommentInputs((previousInputs) => {
      const updatedInputs = [...previousInputs];
      updatedInputs[index][field] = value;
      return updatedInputs;
    });
  }, []);

  const validate = useCallback(() => {
    const newErrors = {};

    // Validate each comment's link and commentContent
    commentInputs.forEach((input, index) => {
      if (!input.link) {
        newErrors[`link-${index}`] = `Link for Comment #${
          index + 1
        } is required`;
      }
      if (!input.commentContent) {
        newErrors[`commentContent-${index}`] = `Content for Comment #${
          index + 1
        } is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [commentInputs]);

  const resetForm = useCallback(() => {
    setFormData({
      comments: 1,
      commentSpeed: "1 minute",
    });
    setCommentInputs([{ link: "", commentContent: "" }]);
    setErrors({});
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (validate()) {
        console.log("Form Data:", formData);
        console.log("Comments Data:", commentInputs);

        toast.success("Order submitted successfully!");
        resetForm();
      } else {
        toast.error("Please fix the errors before submitting.");
        // Focus on the first error if it exists
        if (firstErrorRef.current) {
          firstErrorRef.current.focus();
        }
      }
    },
    [validate, formData, commentInputs, resetForm]
  );

  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Order Comments" },
  ];

  return (
<<<<<<< HEAD
    <div className="container">
      <div className="px-6">
        <h1 className="mb-2 font-bold text-sub-color text-basic">
          Order Upvotes
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
=======
    <section className="Order Comment">
      <div className="container mx-auto">
        <div>
          <h1 className="mb-2 font-semibold text-sub-color text-small lg:text-basic">
            Order Comments
          </h1>
          <div className="flex items-center">
>>>>>>> client
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>

<<<<<<< HEAD
      <div className="p-4">
        {/* Instructions */}
        <div className="p-4 bg-white border rounded-md shadow-md border-gray-border">
          <h1 className="mb-2 font-semibold underline text-small text-light-red underline-offset-1">
            <u>Please read instructions carefully before placing an order:</u>
          </h1>
          <p className="mb-4 font-normal leading-6 text-sub-color text-small">
            This service allows you to generate and automate Reddit comments
            using our extensive network of Reddit accounts. Each automated
            comment will deduct 10 upvotes from your balance.
          </p>
          <div className="flex items-center justify-between mb-4">
            {/* Left Side */}
            <div className="w-1/2">
              <h3 className="font-medium underline text-small text-sub-color underline-offset-1">
                Custom comments:{" "}
              </h3>
              <div className="flex items-center my-2 space-x-20">
                <p className="text-small text-sub-color">
                  Minimum quantity: <span className="font-black">1</span>
                </p>
                <p className="text-small text-sub-color">
                  Maximum quantity: <span className="font-black">75</span>
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-1/2">
              <h3 className="font-medium underline text-small text-sub-color underline-offset-1">
                Comment upvotes (per comment):
              </h3>
              <div className="flex items-center my-2 space-x-20">
                <p className="text-small text-sub-color">
                  Minimum quantity: <span className="font-black">5</span>
                </p>
                <p className="text-small text-sub-color">
                  Maximum quantity: <span className="font-black">1000</span>
                </p>
=======
        <div className="mt-6">
          <div className="p-5 border shadow-main rounded-2xl space-y-4">
            <h2 className="text-light-red text-sl font-medium underline">
              Please read instructions carefully before placing an order:
            </h2>

            <p className="text-sub-color text-small">
              This service allows you to generate and automate Reddit comments
              using our extensive network of Reddit accounts. Each automated
              comment will deduct 10 upvotes from your balance. Comment upvotes
              can also be applied automatically and cost the same as a regular
              order of upvotes.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-1">
                <h3 className="text-sub-color text-sl underline">
                  Custom comments:
                </h3>
                <ul className="flex items-center gap-20 text-sub-color text-small">
                  <li>
                    Minimum quantity: <span className="font-bold ml-2">1</span>
                  </li>
                  <li>
                    Maximum quantity: <span className="font-bold ml-2">75</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-sub-color text-sl underline">
                  Comment upvotes (per comment):
                </h3>
                <ul className="flex items-center gap-20 text-sub-color text-small">
                  <li>
                    Minimum quantity: <span className="font-bold ml-2">5</span>
                  </li>
                  <li>
                    Maximum quantity:{" "}
                    <span className="font-bold ml-2">1000</span>
                  </li>
                </ul>
              </div>
            </div>

            <hr />

            <div className="text-sub-color text-small">
              <u>Links can be inserted in the following format: </u>
              <span className="font-bold tracking-wide">
                [link text](https://yourlink.com)
              </span>
            </div>

            <div className="text-sub-color text-small">
              <u>To make a new line in the comment, include the text: </u>
              <span className="font-bold">[newline]</span>
            </div>

            <div className="text-sub-color text-small">
              <p>
                Comments are made with aged but low-karma accounts and{" "}
                <span className="font-bold">are not guaranteed through</span>{" "}
                due to Reddit's spam filters or a subreddit's karma
                requirements.
              </p>
            </div>

            <div className="text-sub-color text-small">
              <p>
                Due to the high amount of resources spent on making a comment we{" "}
                <span className="font-bold">do not provide refunds</span> for
                comment orders that do not go through. Please make sure to test
                this service before ordering in bulk.
              </p>
            </div>
          </div>
        </div>
        <form className="bg-white my-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="border shadow-main rounded-2xl">
              <div className="flex flex-col items-center gap-2 p-4 border-gray-border my-4 md:flex-row">
                <div className="w-full relative">
                  <Dropdown
                    id="comments"
                    name="comments"
                    placeholder="Number of comments"
                    selectedValue={formData.comments}
                    options={numberOfCommentsOptions}
                    onSelect={handleCommentNumberSelect}
                  />
                </div>
                <div className="w-full relative">
                  <Dropdown
                    id="commentSpeed"
                    name="commentSpeed"
                    placeholder="Speed (time between comments)"
                    selectedValue={formData.commentSpeed}
                    options={commentSpeedOptions}
                    onSelect={handleCommentSpeedSelect}
                    className={
                      formData.comments === 1
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }
                    onBlur={() => {}}
                    disabled={formData.comments === 1}
                  />
                </div>
>>>>>>> client
              </div>
            </div>

<<<<<<< HEAD
          <div className="flex items-center justify-center mb-4">
            <hr className="w-[80%] text-sub-color" />
          </div>

          <div className="flex mb-4">
            <p className="font-medium underline text-sub-color text-small underline-offset-1">
              Links can be inserted in the following format: &nbsp;
            </p>
            <span className="font-black text-sub-color">
              [link text](https://yourlink.com)
            </span>
          </div>

          <div className="flex mb-4">
            <p className="font-medium underline text-sub-color text-small underline-offset-1">
              To make a new line in the comment, include the text: &nbsp;
            </p>
            <span className="font-black text-sub-color"> [newline]</span>
          </div>

          <p className="mb-4 font-medium text-sub-color text-small">
            Comments are made with aged but low-karma accounts and{" "}
            <span className="font-black">are not guaranteed to go through</span>{" "}
            due to Reddit's spam filters or a subreddit's karma requirements.
          </p>

          <p className="mb-4 font-medium text-sub-color text-small">
            Due to the high amount of resources spent on making a comment,{" "}
            <span className="font-black">we do not provide refunds</span> for
            comment orders that do not go through. Please make sure to test this
            service before ordering in bulk.
          </p>
        </div>

        <div className="flex items-center gap-4 p-4 my-4 bg-white rounded-md shadow-md border-gray-border">
          {/* Number Input */}
          <div className="flex w-[50%] flex-col relative">
            <div className="relative flex">
              <input
                type="text"
                className="w-full p-2 transition-all duration-200 ease-in border rounded-full hover:border-black"
                placeholder={selectedNumber ? "" : "Number Of Comments"}
                value={selectedNumber}
                readOnly
                onClick={toggleDropdown}
              />
              <FaAngleDown className="absolute cursor-pointer top-3 right-3" />
            </div>

            <div
              className={`absolute top-full left-0 w-full bg-white border-gray-100 z-10 rounded-medium shadow-md transition-all duration-300 ease-in-out ${
                isDropdownOpen
                  ? "scale-y-100 translate-y-0"
                  : "scale-y-0 pointer-events-none"
              }`}
              style={{
                backgroundImage: `url(${bluebackground})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <ul className="py-2 overflow-y-scroll max-h-40 no-scrollbar">
                {Array.from({ length: 50 }, (_, index) => index + 1).map(
                  (number) => (
                    <li
                      key={number}
                      onClick={() => handleSelect(number)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-hover"
                    >
                      {number}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-[50%]">
            {/* Speed Input */}
            <div className="relative flex">
              <input
                type="text"
                className="w-full p-2 transition-all duration-200 ease-in border rounded-full hover:border-black"
                placeholder="Speed"
                disabled
              />
              <FaAngleDown className="absolute top-3 right-3" />
            </div>
          </div>
        </div>

        <div className="max-w-6xl p-4 py-10 mx-auto bg-white border rounded-lg shadow-md border-gray-border">
          <h2 className="text-[20px] font-bold text-center text-[#2D2624] mb-4">
            Comment #1
          </h2>

          {/* Input Fields */}
          <div className="space-y-4">
            {/* Link Input */}
            <div className="relative">
              <input
                type="text"
                value={link}
                onChange={handleLinkChange}
                placeholder="Link"
                className={`w-full px-4 py-2.5 border ${
                  errors.link
                    ? "border-[#FF5630] placeholder:text-[#FF5630] text-black"
                    : "border-gray-300"
                } rounded-full text-[16px] hover:border-black transition-all ease-in duration-150`}
              />
              {errors.link && (
                <span className="text-[#FF5630] text-xs mt-1">
                  {errors.link}
                </span>
              )}
            </div>

            {/* Comment Content Input */}
            <div className="relative">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Comment content"
                className={`w-full px-4 py-2.5 border ${
                  errors.comment
                    ? "border-[#FF5630] placeholder:text-[#FF5630] text-black"
                    : "border-gray-300"
                } rounded-full text-[16px] hover:text-black transition-all ease-in duration-150`}
              />
              {errors.comment && (
                <span className="text-[#FF5630] text-xs mt-1">
                  {errors.comment}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6 space-x-4">
=======
            {/* Comments Input Fields */}
            <div className="flex flex-col gap-3">
              {commentInputs.map((input, index) => (
                <div
                  key={index}
                  className="p-4 border shadow-main rounded-2xl space-y-2"
                >
                  <div className="text-sub-color text-medium font-bold text-center mb-4">
                    <h2>
                      Comment <span>#{index + 1}</span>
                    </h2>
                  </div>
                  <InputField
                    id={`link-${index}`}
                    name={`link-${index}`}
                    value={input.link}
                    onChange={(e) =>
                      handleInputChange(index, "link", e.target.value)
                    }
                    placeholder={`Link for Comment #${index + 1}`}
                    error={errors[`link-${index}`]}
                    ref={errors[`link-${index}`] ? firstErrorRef : null}
                  />

                  <InputField
                    id={`commentContent-${index}`}
                    name={`commentContent-${index}`}
                    value={input.commentContent}
                    onChange={(e) =>
                      handleInputChange(index, "commentContent", e.target.value)
                    }
                    placeholder={`Comment Content #${index + 1}`}
                    error={errors[`commentContent-${index}`]}
                    as="textarea"
                    rows={4}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-4">
>>>>>>> client
            <button
              type="submit"
              className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
            >
              Submit Order
            </button>
          </div>
<<<<<<< HEAD


                  
          {/* Success Message */}
          {successMessage && (
            <div className="mt-4 font-bold text-center text-green-500">
              {successMessage}
            </div>
          )}
        </div>
=======
        </form>
>>>>>>> client
      </div>

      <ToastContainer />
    </section>
  );
};

export default OrderComments;
