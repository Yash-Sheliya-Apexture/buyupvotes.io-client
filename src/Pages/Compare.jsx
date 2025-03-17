// import React from 'react';
// import { IoClose } from "react-icons/io5";
// import { RiShieldCheckLine } from "react-icons/ri";
// import { FaCheck } from "react-icons/fa";

// const Compare = () => {

//     const competitorFeatures = [
//         "No incentives to sign up for their services",
//         "No regular updates",
//         "Limited technical support",
//         "Inability to cancel stuck orders",
//         "Zero refunds to your account",
//         "Expensive SMM services",
//         "Limited support channels",
//         "Confusing set up of sales applications"
//     ];

//     const smmflareFeatures = [
//         "First deposit bonuses when you take advantage of our services",
//         "Services updated on a daily basis for your convenience",
//         "Round the clock customer service for the fastest troubleshooting",
//         "Ability to cancel stuck orders after 3 days",
//         "Payment refunds available to you any time there is a balance on your account",
//         "Most Affordable SMM Panel on the web",
//         "Fully integrated API for ease of use and adaptability"
//     ];


//     const FeatureItem = ({ text, icon, iconColor, bgColor, textColor }) => (
//         <li className={`flex items-center text-${textColor} gap-2 text-xs`}>
//             <span className={`size-6 flex items-center justify-center rounded-full bg-[${bgColor}] border border-[${iconColor}]`}>
//                 {icon}
//             </span>
//             {text}
//         </li>
//     );


//     return (
//         <section className='Compare-panal pb-10'>
//             <div className='container mx-auto'>
//                 <div className='text-center'>
//                     <h1 className='text-para-color font-medium text-medium'>What makes us different?</h1>
//                     <div className='flex justify-center mt-4'>
//                         <p className='text-para-color font-medium text-xlarge max-w-5xl leading-10'>SMMFlare gives you the best <span className='pe-3 text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color'>SMM Panel</span>  so you can topple the Competition </p>
//                     </div>
//                     <p className='text-para-color font-medium text-small mt-4'>A comparative list of what SMMFlare offers vs Competition </p>
//                 </div>


//                 <div className="flex flex-col lg:flex-row w-full mt-10 max-w-5xl mx-auto p-4 border border-gray-300/50  bg-gray-50 rounded-3xl">

//                     {/* <!-- Competitor Section --> */}
//                     <div className="w-full lg:w-1/2 rounded-lg p-6">
//                         <h2 className="text-xl font-semibold text-black flex items-center mb-4">
//                             <div className='flex items-center gap-5'>
//                                 <span className="size-6 flex items-center justify-center rounded-full bg-[#3e1d0f] border border-[#ff6b57]">
//                                     <IoClose className='text-[#ff6b57]' />
//                                 </span>
//                                 Competitor
//                             </div>
//                         </h2>

//                         <ul className="space-y-3 my-8">
//                             {competitorFeatures.map((feature, index) => (
//                                 <FeatureItem
//                                     key={index}
//                                     text={feature}
//                                     icon={<IoClose className='size-5 text-[#ff6b57]' />}
//                                     iconColor="#ff6b57"
//                                     bgColor="#3e1d0f"
//                                     textColor="#000"
//                                 />
//                             ))}
//                         </ul>

//                         <div className="text-start space-y-0.5">
//                             <h1 className='text-black text-basic font-medium'>Result</h1>
//                             <h3 className="text-3xl font-bold text-red-500">10% Success X</h3>
//                             <p className="text-black gap-2">Not offering tempting bonuses</p>
//                         </div>
//                     </div>

//                     {/* <!-- smmflare.com Section --> */}
//                     <div className="w-full lg:w-1/2 rounded-3xl p-6 border border-green-500 Home relative overflow-hidden">
//                         <h2 className="text-xl font-semibold text-black flex items-center mb-4 gap-5">
//                             <RiShieldCheckLine className='text-green-500 size-7' />
//                             smmflare.com
//                         </h2>

//                         <ul className="space-y-3 my-8">
//                             {smmflareFeatures.map((feature, index) => (
//                                 <FeatureItem
//                                     key={index}
//                                     text={feature}
//                                     icon={<FaCheck className='p-0.5 text-green-500' />}
//                                     iconColor="#0e9f6e"
//                                     bgColor="green"
//                                     textColor="black"
//                                 />
//                             ))}
//                         </ul>

//                         <div className="text-start space-y-0.5 pt-1.5">
//                             <h1 className='text-black text-basic font-medium'>Result</h1>
//                             <h3 className="text-3xl font-bold text-green-500 flex items-center gap-2">99%+ Success <span> <FaCheck /> </span></h3>
//                             <p className="text-black">Claim your first 10% deposit bonus.</p>
//                         </div>

//                         <div className='home-item'>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Compare


// import React from 'react';
// import { IoClose } from "react-icons/io5";
// import { RiShieldCheckLine } from "react-icons/ri";
// import { FaCheck } from "react-icons/fa";

// const Compare = () => {

//     const competitorFeatures = [
//         "No incentives to sign up for their services",
//         "No regular updates",
//         "Limited technical support",
//         "Inability to cancel stuck orders",
//         "Limited technical support",
//         "Zero refunds to your account",
//         "Expensive SMM services",
//         "Limited support channels",
//         "Confusing set up of sales applications"
//     ];

//     const smmflareFeatures = [
//         "First deposit bonuses when you take advantage of our services",
//         "Services updated on a daily basis for your convenience",
//         "Round the clock customer service for the fastest troubleshooting",
//         "Ability to cancel stuck orders after 3 days",
//         "Payment refunds available to you any time there is a balance on your account",
//         "Most Affordable SMM Panel on the web",
//         "Fully integrated API for ease of use and adaptability"
//     ];


//     const FeatureItem = ({ text, icon, iconColor, bgColor, textColor }) => (
//         <li className={`flex items-center text-${textColor} gap-2 text-small leading-5 font-medium`}>
//             <span className={`size-5 flex items-center justify-center rounded-full`} style={{ backgroundColor: bgColor, borderColor: iconColor, borderWidth: '1px', borderStyle: 'solid' }}>
//                 {icon}
//             </span>
//             {text}
//         </li>
//     );


//     return (
//         <section className='Compare-panal pb-10'>
//             <div className='container mx-auto'>
//                 <div className='text-center'>
//                     <h1 className='text-para-color font-medium text-medium'>What makes us different?</h1>
//                     <div className='flex justify-center lg:mt-4 mt-2'>
//                         <p className='text-para-color font-medium lg:text-xlarge md:text-large text-base max-w-5xl lg:leading-10'>SMMFlare gives you the best <span className='pe-3 text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color'>SMM Panel</span>so you can topple the Competition </p>
//                     </div>
//                     <p className='text-para-color font-medium text-small mt-4'>A comparative list of what SMMFlare offers vs Competition </p>
//                 </div>


//                 <div className="flex flex-col lg:flex-row w-full mt-10 max-w-5xl mx-auto border border-gray-300 p-4 bg-gray-50 rounded-3xl">

//                     {/* <!-- Competitor Section --> */}
//                     <div className="w-full lg:w-1/2 rounded-lg p-6">
//                         <h2 className="text-xl font-semibold text-black flex items-center mb-4">
//                             <div className='flex items-center gap-5'>
//                                 <span className="size-6 flex items-center justify-center rounded-full" style={{ backgroundColor: '#3e1d0f', borderColor: '#ff6b57', borderWidth: '1px', borderStyle: 'solid' }}>
//                                     <IoClose className='text-[#ff6b57]' />
//                                 </span>
//                                 Competitor
//                             </div>
//                         </h2>

//                         <ul className="space-y-3 my-8">
//                             {competitorFeatures.map((feature, index) => (
//                                 <FeatureItem
//                                     key={index}
//                                     text={feature}
//                                     icon={<IoClose className='text-red-500' />}
//                                     iconColor="#ff6b57"
//                                     bgColor="#3e1d0f"
//                                     textColor="#000"
//                                 />
//                             ))}
//                         </ul>

//                         <div className="text-start space-y-0.5">
//                             <h1 className='text-black text-basic font-medium'>Result</h1>
//                             <h3 className="text-3xl font-bold text-red-500">10% Success X</h3>
//                             <p className="text-black gap-2">Not offering tempting bonuses</p>
//                         </div>
//                     </div>

//                     {/* <!-- smmflare.com Section --> */}
//                     <div className="w-full lg:w-1/2 rounded-3xl p-6 border border-green-500 relative overflow-hidden Home">
//                         <h2 className="text-xl font-semibold text-black flex items-center mb-4 gap-5">
//                             <RiShieldCheckLine className='text-green-500 size-7' />
//                             smmflare.com
//                         </h2>

//                         <ul className="space-y-3 my-8">
//                             {smmflareFeatures.map((feature, index) => (
//                                 <FeatureItem
//                                     key={index}
//                                     text={feature}
//                                     icon={<FaCheck className='text-white p-0.5' />}
//                                     iconColor="#0e9f6e"
//                                     bgColor="#0e9f6e"
//                                     textColor="black"
//                                 />
//                             ))}
//                         </ul>

//                         <div className="text-start space-y-0.5 pt-1.5">
//                             <h1 className='text-black text-basic font-medium'>Result</h1>
//                             <h3 className="text-3xl font-bold text-green-500 flex items-center gap-2">99%+ Success <span> <FaCheck /> </span></h3>
//                             <p className="text-black">Claim your first 10% deposit bonus.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Compare

// import React, { useState } from 'react';
// import { IoClose } from "react-icons/io5";
// import { RiShieldCheckLine } from "react-icons/ri";
// import { FaCheck } from "react-icons/fa";

// const Compare = () => {

//     const competitorFeatures = [
//         "No incentives to sign up for their services",
//         "No regular updates",
//         "Limited technical support",
//         "Inability to cancel stuck orders",
//         "Limited technical support",
//         "Zero refunds to your account",
//         "Expensive SMM services",
//         "Limited support channels",
//         "Confusing set up of sales applications"
//     ];

//     const smmflareFeatures = [
//         "First deposit bonuses when you take advantage of our services",
//         "Services updated on a daily basis for your convenience",
//         "Round the clock customer service for the fastest troubleshooting",
//         "Ability to cancel stuck orders after 3 days",
//         "Payment refunds available to you any time there is a balance on your account",
//         "Most Affordable SMM Panel on the web",
//         "Fully integrated API for ease of use and adaptability"
//     ];


//     const FeatureItem = ({ text, icon, iconColor, bgColor, textColor }) => (
//         <li className={`flex items-center text-${textColor} gap-2 text-small leading-5 font-medium`}>
//             <span className={`size-5 flex items-center justify-center rounded-full`} style={{ backgroundColor: bgColor, borderColor: iconColor, borderWidth: '1px', borderStyle: 'solid' }}>
//                 {icon}
//             </span>
//             {text}
//         </li>
//     );

//     const [selectedTab, setSelectedTab] = useState('competitor');

//     return (
//         <section className='Compare-panal pb-10'>
//             <div className='container mx-auto'>
//                 <div className='text-center'>
//                     <h1 className='text-para-color font-medium text-medium'>What makes us different?</h1>
//                     <div className='flex justify-center lg:mt-4 mt-2'>
//                         <p className='text-para-color font-medium lg:text-xlarge md:text-large text-base max-w-5xl lg:leading-10'>SMMFlare gives you the best <span className='pe-3 text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color'>SMM Panel</span>so you can topple the Competition </p>
//                     </div>
//                     <p className='text-para-color font-medium text-small mt-4'>A comparative list of what SMMFlare offers vs Competition </p>
//                 </div>

//                 {/* Small Screens Button */}
//                 <div className="sm:hidden flex justify-center mt-6">
//                     <button
//                         className={`px-4 py-2 rounded-l-lg ${activeTab === 'competitor' ? 'bg-main-color text-white' : 'bg-gray-100 text-gray-500'}`}
//                         onClick={() => setSelectedTab('competitor')}
//                     >
//                         Competitor
//                     </button>
//                     <button
//                         className={`px-4 py-2 rounded-r-lg ${activeTab === 'smmflare' ? 'bg-main-color text-white' : 'bg-gray-100 text-gray-500'}`}
//                         onClick={() => setSelectedTab('smmflare')}
//                     >
//                         smmflare.com
//                     </button>
//                 </div>


//                 <div className="flex flex-col md:flex-row w-full mt-10 max-w-5xl mx-auto border border-gray-300 p-4 bg-gray-50 rounded-3xl">
//                     {/* <!-- Competitor Section --> */}
//                     <div className={`w-full lg:w-1/2 rounded-lg lg:p-6 md:p-4 ${activeTab === 'smmflare' ? 'hidden sm:block' : ''}`}>
//                         {/* Header */}
//                         <h2 className="text-xl font-semibold text-black flex items-center mb-4">
//                             <div className='flex items-center gap-5'>
//                                 <span className="size-6 flex items-center justify-center rounded-full" style={{ backgroundColor: '#3e1d0f', borderColor: '#ff6b57', borderWidth: '1px', borderStyle: 'solid' }}>
//                                     <IoClose className='text-[#ff6b57]' />
//                                 </span>
//                                 Competitor
//                             </div>
//                         </h2>

//                         {/* body */}
//                         <ul className="space-y-3 my-8">
//                             {competitorFeatures.map((feature, index) => (
//                                 <FeatureItem
//                                     key={index}
//                                     text={feature}
//                                     icon={<IoClose className='text-red-500' />}
//                                     iconColor="#ff6b57"
//                                     bgColor="#3e1d0f"
//                                     textColor="#000"
//                                 />
//                             ))}
//                         </ul>

//                         {/* footer */}
//                         <div className="text-start space-y-0.5 lg:mt-0 mt-20">
//                             <h1 className='text-black text-basic font-medium'>Result</h1>
//                             <h3 className="text-3xl font-bold text-red-500">10% Success X</h3>
//                             <p className="text-black gap-2">Not offering tempting bonuses</p>
//                         </div>
//                     </div>

//                     {/* <!-- smmflare.com Section --> */}
//                     <div className={`w-full lg:w-1/2 rounded-3xl lg:p-6 md:p-4 p-1 border-0 md:border border-green-500 relative overflow-hidden Home ${activeTab === 'competitor' ? 'hidden sm:block' : ''}`}>

//                         {/* Header */}
//                         <h2 className="text-xl font-semibold text-black flex items-center mb-4 gap-5">
//                             <RiShieldCheckLine className='text-green-500 size-7' />
//                             smmflare.com
//                         </h2>

//                         {/* body */}
//                         <ul className="space-y-3 my-8">
//                             {smmflareFeatures.map((feature, index) => (
//                                 <FeatureItem
//                                     key={index}
//                                     text={feature}
//                                     icon={<FaCheck className='text-white p-0.5' />}
//                                     iconColor="#0e9f6e"
//                                     bgColor="#0e9f6e"
//                                     textColor="black"
//                                 />
//                             ))}
//                         </ul>

//                         {/* Footer */}
//                         <div className="text-start space-y-0.5 pt-1.5">
//                             <h1 className='text-black text-basic font-medium'>Result</h1>
//                             <h3 className="text-3xl font-bold text-green-500 flex items-center gap-2">99%+ Success <span> <FaCheck /> </span></h3>
//                             <p className="text-black">Claim your first 10% deposit bonus.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Compare

// import React, { useState } from 'react';
// import { IoClose } from "react-icons/io5";
// import { RiShieldCheckLine } from "react-icons/ri";
// import { FaCheck } from "react-icons/fa";

// const Compare = () => {

//     const competitorFeatures = [
//         "No incentives to sign up for their services",
//         "No regular updates",
//         "Limited technical support",
//         "Inability to cancel stuck orders",
//         "Limited technical support",
//         "Zero refunds to your account",
//         "Expensive SMM services",
//         "Limited support channels",
//         "Confusing set up of sales applications"
//     ];

//     const smmflareFeatures = [
//         "First deposit bonuses when you take advantage of our services",
//         "Services updated on a daily basis for your convenience",
//         "Round the clock customer service for the fastest troubleshooting",
//         "Ability to cancel stuck orders after 3 days",
//         "Payment refunds available to you any time there is a balance on your account",
//         "Most Affordable SMM Panel on the web",
//         "Fully integrated API for ease of use and adaptability"
//     ];


//     const FeatureItem = ({ text, icon, iconColor, bgColor, textColor }) => (
//         <li className={`flex items-center text-${textColor} gap-2 text-small leading-5 font-medium`}>
//             <span className={`size-5 flex items-center justify-center rounded-full`} style={{ backgroundColor: bgColor, borderColor: iconColor, borderWidth: '1px', borderStyle: 'solid' }}>
//                 {icon}
//             </span>
//             {text}
//         </li>
//     );

//     const [selectedTab, setSelectedTab] = useState('competitor');

//     const handleTabChange = (tab) => {
//         setSelectedTab(tab);
//     };

//     return (
//         <section className='Compare-panal pb-10'>
//             <div className='container mx-auto'>
//                 <div className='text-center'>
//                     <h1 className='text-para-color font-medium text-medium'>What makes us different?</h1>
//                     <div className='flex justify-center lg:mt-4 mt-2'>
//                         <p className='text-para-color font-medium lg:text-xlarge md:text-large text-base max-w-5xl lg:leading-10'>SMMFlare gives you the best <span className='pe-3 text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color'>SMM Panel</span>so you can topple the Competition </p>
//                     </div>
//                     <p className='text-para-color font-medium text-small mt-4'>A comparative list of what SMMFlare offers vs Competition </p>
//                 </div>

//                 {/* Small Screens Button */}
//                 <div className="sm:hidden flex justify-center mt-6">
//                     <button
//                         className={`px-4 py-2 rounded-l-lg transition-colors duration-300 ${selectedTab === 'competitor' ? 'bg-main-color text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
//                         onClick={() => handleTabChange('competitor')}
//                     >
//                         Competitor
//                     </button>
//                     <button
//                         className={`px-4 py-2 rounded-r-lg transition-colors duration-300 ${selectedTab === 'smmflare' ? 'bg-main-color text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
//                         onClick={() => handleTabChange('smmflare')}
//                     >
//                         smmflare.com
//                     </button>
//                 </div>

//                 <div className="relative flex justify-center bg-gray-100 rounded-lg w-fit mx-auto p-[10px]">
//                     <div className="relative flex justify-center items-center bg-gray-100 overflow-hidden">
//                         <div
//                             className={`absolute left-0 top-0 h-full transition-all duration-300 bg-main-color rounded-lg
//                             ${selectedTab === "competitor"
//                                     ? "w-1/2 translate-x-0" // Corrected translate for credit card
//                                     : "w-0 translate-x-[100%]" // Move offscreen when not active
//                                 }
//                           `}
//                             style={{ width: "50%" }}
//                         ></div>
//                         <div
//                             className={`absolute left-0 top-0 h-full transition-all duration-300 bg-main-color rounded-lg
//                             ${selectedTab === "smmflare"
//                                     ? "w-1/2 translate-x-full" // Corrected translate for crypto
//                                     : "w-0 translate-x-0" // Retract when not active
//                                 }
//                           `}
//                             style={{ width: "50%" }}
//                         ></div>
//                         {/* Credit Card Tab */}
//                         <button
//                             className={`relative flex items-center justify-center flex-col md:flex-row font-medium px-6 py-2 focus:outline-none transition-colors duration-300 w-1/2 ${selectedTab === "creditCard" ? "text-white z-10" : ""
//                                 }`}
//                             onClick={() => setSelectedTab("competitor")}
//                         >
//                             <span className="">competitor</span>
//                         </button>
//                         {/* Cryptocurrency Tab */}
//                         <button
//                             className={`relative flex items-center justify-center flex-col md:flex-row font-medium px-6 py-2 focus:outline-none transition-colors duration-300 w-1/2 ${selectedTab === "crypto" ? "text-white z-10" : ""
//                                 }`}
//                             onClick={() => setSelectedTab("smmflare")}
//                         >
//                             <span className="">smmflare</span>
//                         </button>
//                     </div>
//                 </div>




//                 <div className="flex flex-col md:flex-row w-full mt-10 max-w-5xl mx-auto border border-gray-300 p-4 bg-gray-50 rounded-3xl">
//                     {/* <!-- Competitor Section --> */}
//                     <div className={`w-full lg:w-1/2 rounded-lg lg:p-6 md:p-4 ${selectedTab === 'smmflare' ? 'hidden sm:block' : ''}`}>
//                         {/* Header */}
//                         <h2 className="text-xl font-semibold text-black flex items-center mb-4">
//                             <div className='flex items-center gap-5'>
//                                 <span className="size-6 flex items-center justify-center rounded-full" style={{ backgroundColor: '#3e1d0f', borderColor: '#ff6b57', borderWidth: '1px', borderStyle: 'solid' }}>
//                                     <IoClose className='text-[#ff6b57]' />
//                                 </span>
//                                 Competitor
//                             </div>
//                         </h2>

//                         {/* body */}
//                         <ul className="space-y-3 my-8">
//                             {competitorFeatures.map((feature, index) => (
//                                 <FeatureItem
//                                     key={index}
//                                     text={feature}
//                                     icon={<IoClose className='text-red-500' />}
//                                     iconColor="#ff6b57"
//                                     bgColor="#3e1d0f"
//                                     textColor="#000"
//                                 />
//                             ))}
//                         </ul>

//                         {/* footer */}
//                         <div className="text-start space-y-0.5 lg:mt-0 mt-20">
//                             <h1 className='text-black text-basic font-medium'>Result</h1>
//                             <h3 className="text-3xl font-bold text-red-500">10% Success X</h3>
//                             <p className="text-black gap-2">Not offering tempting bonuses</p>
//                         </div>
//                     </div>

//                     {/* <!-- smmflare.com Section --> */}
//                     <div className={`w-full lg:w-1/2 rounded-3xl lg:p-6 md:p-4 p-1 border-0 md:border border-green-500 relative overflow-hidden Home ${selectedTab === 'competitor' ? 'hidden sm:block' : ''}`}>

//                         {/* Header */}
//                         <h2 className="text-xl font-semibold text-black flex items-center mb-4 gap-5">
//                             <RiShieldCheckLine className='text-green-500 size-7' />
//                             smmflare.com
//                         </h2>

//                         {/* body */}
//                         <ul className="space-y-3 my-8">
//                             {smmflareFeatures.map((feature, index) => (
//                                 <FeatureItem
//                                     key={index}
//                                     text={feature}
//                                     icon={<FaCheck className='text-white p-0.5' />}
//                                     iconColor="#0e9f6e"
//                                     bgColor="#0e9f6e"
//                                     textColor="black"
//                                 />
//                             ))}
//                         </ul>

//                         {/* Footer */}
//                         <div className="text-start space-y-0.5 pt-1.5">
//                             <h1 className='text-black text-basic font-medium'>Result</h1>
//                             <h3 className="text-3xl font-bold text-green-500 flex items-center gap-2">99%+ Success <span> <FaCheck /> </span></h3>
//                             <p className="text-black">Claim your first 10% deposit bonus.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Compare


import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { RiShieldCheckLine } from "react-icons/ri";
import { RiCloseCircleLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const Compare = () => {

    const competitorFeatures = [
        "No incentives to sign up for their services",
        "No regular updates",
        "Limited technical support",
        "Inability to cancel stuck orders",
        "Limited technical support",
        "Zero refunds to your account",
        "Expensive SMM services",
        "Limited support channels",
        "Confusing set up of sales applications"
    ];

    const smmflareFeatures = [
        "First deposit bonuses when you take advantage of our services",
        "Services updated on a daily basis for your convenience",
        "Round the clock customer service for the fastest",
        "Ability to cancel stuck orders after 3 days",
        "Payment refunds available to you any time there is a balance",
        "Most Affordable SMM Panel on the web",
        "Fully integrated API for ease of use and adaptability"
    ];


    const FeatureItem = ({ text, icon, iconColor, bgColor, textColor }) => (
        <li className={`flex items-center text-${textColor} gap-2.5 lg:text-small break-words text-xs leading-5 font-medium`}>
            <span className={`size-5 flex items-center justify-center rounded-full`} style={{ backgroundColor: bgColor, borderColor: iconColor, borderWidth: '1px', borderStyle: 'solid' }}>
                {icon}
            </span>
            {text}
        </li>
    );

    const [selectedTab, setSelectedTab] = useState('smmflare');

    return (
        <section className='Compare-panal py-5'>
            <div className='container mx-auto'>
                <div className='md:text-center text-left space-y-4'>
                    <h1 className='text-primary font-medium text-medium'>What makes us different?</h1>
                    <div className='flex justify-center'>
                        <p className='text-black font-medium lg:text-xlarge md:text-large text-2xl max-w-5xl lg:leading-[50px]'>SMMFlare gives you the best <span className='pe-3 text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color'>SMM Panel</span>so you can topple the Competition </p>
                    </div>
                    <p className='text-primary font-medium text-medium'>A comparative list of what SMMFlare offers vs Competition </p>
                </div>

                {/* Tab Switcher */}
                {/* <div className="relative justify-center bg-gray-100 rounded-lg w-fit mx-auto p-[10px] mt-6 md:hidden block">
                    <div className="relative flex justify-center items-center overflow-hidden rounded-lg">
                        <div
                            className={`absolute left-0 top-0 h-full transition-all duration-300 bg-main-color rounded-lg`}
                            style={{
                                width: "50%",
                                transform: selectedTab === "smmflare" ? "translateX(0%)" : "translateX(100%)",
                            }}
                        ></div>

                        <button
                            className={`relative flex items-center justify-center flex-col md:flex-row font-medium tracking-wide px-6 py-2 focus:outline-none transition-colors duration-300 w-1/2 z-10 ${selectedTab === "competitor" ? "text-primary" : ""
                                }`}
                            onClick={() => setSelectedTab("smmflare")}
                        >
                            <span>Byupvotes</span>
                        </button>

                        <button
                            className={`relative flex items-center justify-center flex-col md:flex-row font-medium tracking-wide px-6 py-2 focus:outline-none transition-colors duration-300 w-1/2 z-10 ${selectedTab === "smmflare" ? "text-primary" : ""
                                }`}
                            onClick={() => setSelectedTab("competitor")}
                        >
                            <span>Competitor</span>
                        </button>
                    </div>
                </div> */}

                <div className="relative w-fit mx-auto mt-6 md:hidden block bg-gray-50 border border-gray-300/50 rounded-full p-1.5 shadow-lg">
                    <div className="relative flex justify-between items-center overflow-hidden rounded-full bg-gray-100">
                        {/* Animated Sliding Indicator */}
                        <motion.div
                            className="absolute top-0 left-0 h-full w-1/2 bg-main-color rounded-full"
                            initial={false}
                            animate={{
                                x: selectedTab === "smmflare" ? "0%" : "100%",
                            }}
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        ></motion.div>

                        {/* Smmflare Tab */}
                        <button
                            className={`relative flex px-6 py-3 text-center font-semibold tracking-wide transition-colors duration-300 z-10 ${selectedTab === "smmflare" ? "text-white" : "text-primary"
                                }`}
                            onClick={() => setSelectedTab("smmflare")}
                        >
                            Byupvotes
                        </button>

                        {/* Competitor Tab */}
                        <button
                            className={`relative flex px-6 py-3 text-center font-semibold tracking-wide transition-colors duration-300 z-10 ${selectedTab === "competitor" ? "text-white" : "text-primary"
                                }`}
                            onClick={() => setSelectedTab("competitor")}
                        >
                            Competitor
                        </button>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row w-full mt-10 max-w-5xl mx-auto border border-gray-300 md:p-4 p-0 bg-gray-50 rounded-3xl">
                    {/* <!-- Competitor Section --> */}
                    <div className={`w-full lg:w-1/2 rounded-lg lg:p-6 p-4 ${selectedTab === 'smmflare' ? 'hidden sm:block' : ''}`}>
                        {/* Header */}
                        <h2 className="text-xl font-semibold text-black flex items-center mb-4 gap-5 capitalize">
                            <RiCloseCircleLine className='text-red-500 size-7' />
                            Competitor
                        </h2>

                        {/* body */}
                        <ul className="space-y-3 my-8">
                            {competitorFeatures.map((feature, index) => (
                                <FeatureItem
                                    key={index}
                                    text={feature}
                                    icon={<IoClose className='text-white' />}
                                    iconColor="#D84040"
                                    bgColor="#D84040"
                                    textColor="#000"
                                />
                            ))}
                        </ul>

                        {/* footer */}
                        <div className="text-start space-y-0.5 lg:mt-0 md:mt-20">
                            <h1 className='text-black text-basic font-medium'>Result</h1>
                            <h3 className="text-3xl font-bold text-red-500">10% Success X</h3>
                            <p className="text-black gap-2">Not offering tempting bonuses</p>
                        </div>
                    </div>

                    {/* <!-- smmflare.com Section --> */}
                    <div className={`w-full lg:w-1/2 rounded-3xl lg:p-6 p-4 border-0 md:border border-green-500 relative overflow-hidden Home ${selectedTab === 'competitor' ? 'hidden sm:block' : ''}`}>

                        {/* Header */}
                        <h2 className="text-xl font-semibold text-black flex items-center mb-4 gap-5 capitalize">
                            <RiShieldCheckLine className='text-green-500 size-7' />
                            Reddit Marketing Company
                        </h2>

                        {/* body */}
                        <ul className="space-y-3 my-8">
                            {smmflareFeatures.map((feature, index) => (
                                <FeatureItem
                                    key={index}
                                    text={feature}
                                    icon={<FaCheck className='text-white p-0.5 size-6 md:size-4' />}
                                    iconColor="#0e9f6e"
                                    bgColor="#0e9f6e"
                                    textColor="black"
                                />
                            ))}
                        </ul>

                        {/* Footer */}
                        <div className="text-start space-y-0.5 pt-1.5">
                            <h1 className='text-black text-basic font-medium'>Result</h1>
                            <h3 className="text-3xl font-bold text-green-500 flex items-center gap-2">99%+ Success <span> <FaCheck /> </span></h3>
                            <p className="text-black">Claim your first 10% deposit bonus.</p>
                        </div>

                        {/* gardient-add */}
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#5CB338] opacity-45 to-transparent"></div>
                        {/* <div className='home-item'>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Compare