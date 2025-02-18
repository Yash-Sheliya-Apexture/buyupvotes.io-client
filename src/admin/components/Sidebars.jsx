// src/admin/components/Sidebar.jsx

// "use client";
// import { Sidebar } from "flowbite-react";
// import {
//     HiArrowSmRight,
//     HiChartPie,
//     HiInbox,
//     HiOutlineMinusSm,
//     HiOutlinePlusSm,
//     HiShoppingBag,
//     HiTable,
//     HiUser,
// } from "react-icons/hi";
// import { twMerge } from "tailwind-merge";

// const Sidebars = () => {

//     return (
//         <Sidebar aria-label="Sidebar with multi-level dropdown example">
//             <Sidebar.Items>
//                 <Sidebar.ItemGroup>
//                     <Sidebar.Item href="#" icon={HiChartPie}>
//                         Dashboard
//                     </Sidebar.Item>
//                     <Sidebar.Collapse
//                         icon={HiShoppingBag}
//                         label="E-commerce"
//                         renderChevronIcon={(theme, open) => {
//                             const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

//                             return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
//                         }}
//                     >
//                         <Sidebar.Item href="#">Products</Sidebar.Item>
//                         <Sidebar.Item href="#">Sales</Sidebar.Item>
//                         <Sidebar.Item href="#">Refunds</Sidebar.Item>
//                         <Sidebar.Item href="#">Shipping</Sidebar.Item>
//                     </Sidebar.Collapse>
//                     <Sidebar.Item href="#" icon={HiInbox}>
//                         Inbox
//                     </Sidebar.Item>
//                     <Sidebar.Item href="#" icon={HiUser}>
//                         Users
//                     </Sidebar.Item>
//                     <Sidebar.Item href="#" icon={HiShoppingBag}>
//                         Products
//                     </Sidebar.Item>
//                     <Sidebar.Item href="#" icon={HiArrowSmRight}>
//                         Sign In
//                     </Sidebar.Item>
//                     <Sidebar.Item href="#" icon={HiTable}>
//                         Sign Up
//                     </Sidebar.Item>
//                 </Sidebar.ItemGroup>
//             </Sidebar.Items>
//         </Sidebar>
//     );
// }

// export default Sidebars;


// "use client";
// import { Sidebar } from "flowbite-react";
// import {
//     HiArrowSmRight,
//     HiChartPie,
//     HiInbox,
//     HiOutlineMinusSm,
//     HiOutlinePlusSm,
//     HiShoppingBag,
//     HiTable,
//     HiUser,
// } from "react-icons/hi";
// import { twMerge } from "tailwind-merge";
// import { FaHome, FaUsers, FaShoppingCart, FaCreditCard } from 'react-icons/fa'; // Install react-icons: npm install react-icons

// const Sidebars = () => {
//     const menuItems = [
//         {
//             id: 'dashboard',
//             icon: FaHome,
//             title: 'Dashboards',
//             to: '/admin',
//             subItems: [
//                 { id: 'sales', title: 'Sales', to: '/admin/sales' },
//                 { id: 'analytics', title: 'Analytics', to: '/admin/analytics' },
//                 { id: 'ecommerce', title: 'Ecommerce', to: '/admin/ecommerce' }
//             ]
//         },
//         {
//             id: 'users',
//             icon: FaUsers,
//             title: 'Users',
//             to: '/admin/users',
//             subItems: [
//                 {
//                     id: 'add-products',
//                     title: 'Add Products',
//                     to: '/admin/add-products',
//                     subItems: [
//                         { id: 'add-new-product', title: 'Add New Product', to: '/admin/add-new-product' },
//                         { id: 'import-products', title: 'Import Products', to: '/admin/import-products' }
//                     ]
//                 },
//                 { id: 'cart', title: 'Cart', to: '/admin/cart' },
//                 { id: 'checkout', title: 'Checkout', to: '/admin/checkout' }
//             ]
//         },
//         {
//             id: 'orders',
//             icon: FaShoppingCart,
//             title: 'Orders',
//             to: '/admin/orders'
//         },
//         {
//             id: 'payments',
//             icon: FaCreditCard,
//             title: 'Payments',
//             to: '/admin/payments',
//             subItems: [
//                 { id: 'pending-payments', title: 'Pending Payments', to: '/admin/pending-payments' },
//                 { id: 'processed-payments', title: 'Processed Payments', to: '/admin/processed-payments' },
//                 { id: 'payment-reports', title: 'Payment Reports', to: '/admin/payment-reports' }
//             ]
//         }
//     ];


//     const renderMenuItems = () => {
//         return menuItems.map((item) => {
//             if (item.subItems) {
//                 return (
//                     <Sidebar.Collapse
//                         key={item.id}
//                         icon={item.icon}
//                         label={item.title}
//                         renderChevronIcon={(theme, open) => {
//                             const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
//                             return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
//                         }}
//                     >
//                         {item.subItems.map((subItem) => {
//                             if (subItem.subItems) {
//                                 return (
//                                     <Sidebar.Collapse
//                                         key={subItem.id}
//                                         label={subItem.title}
//                                         renderChevronIcon={(theme, open) => {
//                                             const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
//                                             return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
//                                         }}
//                                     >
//                                         {subItem.subItems.map((nestedSubItem) => (
//                                             <Sidebar.Item key={nestedSubItem.id} href={nestedSubItem.to}>
//                                                 {nestedSubItem.title}
//                                             </Sidebar.Item>
//                                         ))}
//                                     </Sidebar.Collapse>
//                                 )
//                             }

//                             return (
//                                 <Sidebar.Item key={subItem.id} href={subItem.to}>
//                                     {subItem.title}
//                                 </Sidebar.Item>
//                             );
//                         })}
//                     </Sidebar.Collapse>
//                 );
//             }

//             return (
//                 <Sidebar.Item key={item.id} href={item.to} icon={item.icon}>
//                     {item.title}
//                 </Sidebar.Item>
//             );
//         });
//     };


//     return (
//         <Sidebar aria-label="Admin Sidebar">
//             <Sidebar.Items>
//                 <Sidebar.ItemGroup>
//                     {renderMenuItems()}
//                 </Sidebar.ItemGroup>
//             </Sidebar.Items>
//         </Sidebar>
//     );
// }

// export default Sidebars;


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaHome, FaUsers, FaShoppingCart, FaCreditCard } from 'react-icons/fa'; // Font Awesome icons

// const Sidebar = () => {
//     return (
//         <div className="bg-gray-800 w-64 flex flex-col h-screen border-r border-gray-700">
//             {/* Logo */}
//             <div className="flex items-center justify-center h-16 bg-gray-900 text-white font-semibold">
//                 UserAdminPanal
//             </div>

//             {/* Menu */}
//             <nav className="flex-1 p-4 space-y-4">
//                 {/* Dashboard */}
//                 <NavLink to="/admin" className={({ isActive }) =>
//                     `flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''}`
//                 }>
//                     <FaHome className="h-5 w-5" />
//                     <span>Dashboard</span>
//                 </NavLink>

//                 {/* Users */}
//                 <NavLink to="/admin/users" className={({ isActive }) =>
//                     `flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''}`
//                 }>
//                     <FaUsers className="h-5 w-5" />
//                     <span>Users</span>
//                 </NavLink>

//                 {/* Orders */}
//                 <NavLink to="/admin/orders" className={({ isActive }) =>
//                     `flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''}`
//                 }>
//                     <FaShoppingCart className="h-5 w-5" />
//                     <span>Orders</span>
//                 </NavLink>

//                 {/* Payments */}
//                 <NavLink to="/admin/payments" className={({ isActive }) =>
//                     `flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''}`
//                 }>
//                     <FaCreditCard className="h-5 w-5" />
//                     <span>Payments</span>
//                 </NavLink>

//             </nav>
//         </div>
//     );
// };

// export default Sidebar;



// import React, { useState } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { FaHome, FaUsers, FaShoppingCart, FaCreditCard, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Font Awesome icons

// const Sidebar = () => {
//     const location = useLocation();
//     const [isDashboardOpen, setIsDashboardOpen] = useState(false);
//     const [isUsersOpen, setIsUsersOpen] = useState(false);
//     const [isAddProductsOpen, setIsAddProductsOpen] = useState(false); // New state for Add Products

//     const toggleDashboard = () => {
//         setIsDashboardOpen(!isDashboardOpen);
//     };

//     const toggleUsers = () => {
//         setIsUsersOpen(!isUsersOpen);
//     };

//     const toggleAddProducts = () => {
//         setIsAddProductsOpen(!isAddProductsOpen);
//     };

//     return (
//         <div className="bg-gray-800 w-64 flex flex-col h-screen border-r border-gray-700">
//             {/* Logo */}
//             <div className="flex items-center justify-center h-16 text-base bg-gray-900 text-white font-semibold">
//                 Admin Dashboard
//             </div>

//             {/* Menu */}
//             <nav className="flex-1 p-4 space-y-4">
//                 {/* Dashboard */}
//                 <div className="space-y-2">
//                     <button
//                         onClick={toggleDashboard}
//                         className={`flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin' ? 'bg-gray-700 text-white' : ''
//                             }`}
//                     >
//                         <div className="flex items-center space-x-2">
//                             <FaHome className="h-5 w-5" />
//                             <Link to="/admin">Dashboards</Link>
//                         </div>
//                         {isDashboardOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
//                     </button>

//                     {isDashboardOpen && (
//                         <div className="pl-4 space-y-2">
//                             <NavLink
//                                 to="/admin/sales"
//                                 className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/sales' ? 'bg-gray-700 text-white' : ''
//                                     }`}
//                             >
//                                 <span>Sales</span>
//                             </NavLink>
//                             <NavLink
//                                 to="/admin/analytics"
//                                 className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/analytics' ? 'bg-gray-700 text-white' : ''
//                                     }`}
//                             >
//                                 <span>Analytics</span>
//                             </NavLink>
//                             <NavLink
//                                 to="/admin/ecommerce"
//                                 className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/ecommerce' ? 'bg-gray-700 text-white' : ''
//                                     }`}
//                             >
//                                 <span>Ecommerce</span>
//                             </NavLink>
//                         </div>
//                     )}
//                 </div>

//                 {/* Users */}
//                 <div className="space-y-2">
//                     <button
//                         onClick={toggleUsers}
//                         className={`flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/users' ? 'bg-gray-700 text-white' : ''
//                             }`}
//                     >
//                         <div className="flex items-center space-x-2">
//                             <FaHome className="h-5 w-5" />
//                             <Link to="/admin/users">Users</Link>
//                         </div>
//                         {isUsersOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
//                     </button>

//                     <div className={`pl-4 overflow-hidden transition-transform duration-300 ease-in-out ${isUsersOpen ? '' : ''}`}>
//                         {isUsersOpen && (
//                             <div className="space-y-2">
//                                 {/* Add Products */}
//                                 <div className="space-y-2">
//                                     <button
//                                         onClick={toggleAddProducts}
//                                         className={`flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/add-products' ? 'bg-gray-700 text-white' : ''
//                                             }`}
//                                     >
//                                         <div className="flex items-center space-x-2">
//                                             <span>Add Products</span>
//                                         </div>
//                                         {isAddProductsOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
//                                     </button>

//                                     <div className={`pl-4 overflow-hidden transition-transform duration-300 ease-in-out ${isAddProductsOpen ? '' : ''}`}>
//                                         {isAddProductsOpen && (
//                                             <div className="space-y-2">
//                                                 <NavLink
//                                                     to="/admin/add-new-product"
//                                                     className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/add-new-product' ? 'bg-gray-700 text-white' : ''
//                                                         }`}
//                                                 >
//                                                     <span>Add New Product</span>
//                                                 </NavLink>
//                                                 <NavLink
//                                                     to="/admin/import-products"
//                                                     className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/import-products' ? 'bg-gray-700 text-white' : ''
//                                                         }`}
//                                                 >
//                                                     <span>Import Products</span>
//                                                 </NavLink>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>

//                                 <NavLink
//                                     to="/admin/cart"
//                                     className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/cart' ? 'bg-gray-700 text-white' : ''
//                                         }`}
//                                 >
//                                     <span>Cart</span>
//                                 </NavLink>
//                                 <NavLink
//                                     to="/admin/checkout"
//                                     className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/checkout' ? 'bg-gray-700 text-white' : ''
//                                         }`}
//                                 >
//                                     <span>Checkout</span>
//                                 </NavLink>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Orders */}
//                 <NavLink to="/admin/orders" className={({ isActive }) =>
//                     `flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''}`
//                 }>
//                     <FaShoppingCart className="h-5 w-5" />
//                     <span>Orders</span>
//                 </NavLink>


//                 {/* Payments */}
//                 <NavLink
//                     to="/admin/payments"
//                     className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/payments' ? 'bg-gray-700 text-white' : ''
//                         }`}
//                 >
//                     <FaCreditCard className="h-5 w-5" />
//                     <span>Payments</span>
//                 </NavLink>

//             </nav>
//         </div>
//     );
// };

// export default Sidebar;

// 17:08

// import React, { useState } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { FaHome, FaUsers, FaShoppingCart, FaCreditCard, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Font Awesome icons

// const Sidebar = () => {
//     const location = useLocation();
//     const [isDashboardOpen, setIsDashboardOpen] = useState(false);
//     const [isUsersOpen, setIsUsersOpen] = useState(false);
//     const [isAddProductsOpen, setIsAddProductsOpen] = useState(false);
//     const [isPaymentsOpen, setIsPaymentsOpen] = useState(false); // New state for Payments

//     const toggleDashboard = () => {
//         setIsDashboardOpen(!isDashboardOpen);
//     };

//     const toggleUsers = () => {
//         setIsUsersOpen(!isUsersOpen);
//     };

//     const toggleAddProducts = () => {
//         setIsAddProductsOpen(!isAddProductsOpen);
//     };

//     const togglePayments = () => {
//         setIsPaymentsOpen(!isPaymentsOpen);
//     };

//     return (
//         <div className="bg-gray-800 w-64 flex flex-col h-screen border-r border-gray-700">
//             {/* Logo */}
//             <div className="flex items-center justify-center h-16 text-base bg-gray-900 text-white font-semibold">
//                 Admin Dashboard
//             </div>

//             {/* Menu */}
//             <nav className="flex-1 p-4 space-y-4">
//                 {/* Dashboard */}
//                 <div className="space-y-2">
//                     <button
//                         onClick={toggleDashboard}
//                         className={`flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin' ? 'bg-gray-700 text-white' : ''
//                             }`}
//                     >
//                         <div className="flex items-center space-x-2">
//                             <FaHome className="h-5 w-5" />
//                             <Link to="/admin">Dashboards</Link>
//                         </div>
//                         {isDashboardOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
//                     </button>

//                     {isDashboardOpen && (
//                         <div className="pl-4 space-y-2">
//                             <NavLink
//                                 to="/admin/sales"
//                                 className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/sales' ? 'bg-gray-700 text-white' : ''
//                                     }`}
//                             >
//                                 <span>Sales</span>
//                             </NavLink>
//                             <NavLink
//                                 to="/admin/analytics"
//                                 className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/analytics' ? 'bg-gray-700 text-white' : ''
//                                     }`}
//                             >
//                                 <span>Analytics</span>
//                             </NavLink>
//                             <NavLink
//                                 to="/admin/ecommerce"
//                                 className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/ecommerce' ? 'bg-gray-700 text-white' : ''
//                                     }`}
//                             >
//                                 <span>Ecommerce</span>
//                             </NavLink>
//                         </div>
//                     )}
//                 </div>

//                 {/* Users */}
//                 <div className="space-y-2">
//                     <button
//                         onClick={toggleUsers}
//                         className={`flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/users' ? 'bg-gray-700 text-white' : ''
//                             }`}
//                     >
//                         <div className="flex items-center space-x-2">
//                             <FaHome className="h-5 w-5" />
//                             <Link to="/admin/users">Users</Link>
//                         </div>
//                         {isUsersOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
//                     </button>

//                     <div className={`pl-4 overflow-hidden transition-transform duration-300 ease-in-out ${isUsersOpen ? '' : ''}`}>
//                         {isUsersOpen && (
//                             <div className="space-y-2">
//                                 {/* Add Products */}
//                                 <div className="space-y-2">
//                                     <button
//                                         onClick={toggleAddProducts}
//                                         className={`flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/add-products' ? 'bg-gray-700 text-white' : ''
//                                             }`}
//                                     >
//                                         <div className="flex items-center space-x-2">
//                                             <span>Add Products</span>
//                                         </div>
//                                         {isAddProductsOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
//                                     </button>

//                                     <div className={`pl-4 overflow-hidden transition-transform duration-300 ease-in-out ${isAddProductsOpen ? '' : ''}`}>
//                                         {isAddProductsOpen && (
//                                             <div className="space-y-2">
//                                                 <NavLink
//                                                     to="/admin/add-new-product"
//                                                     className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/add-new-product' ? 'bg-gray-700 text-white' : ''
//                                                         }`}
//                                                 >
//                                                     <span>Add New Product</span>
//                                                 </NavLink>
//                                                 <NavLink
//                                                     to="/admin/import-products"
//                                                     className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/import-products' ? 'bg-gray-700 text-white' : ''
//                                                         }`}
//                                                 >
//                                                     <span>Import Products</span>
//                                                 </NavLink>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>

//                                 <NavLink
//                                     to="/admin/cart"
//                                     className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/cart' ? 'bg-gray-700 text-white' : ''
//                                         }`}
//                                 >
//                                     <span>Cart</span>
//                                 </NavLink>
//                                 <NavLink
//                                     to="/admin/checkout"
//                                     className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/checkout' ? 'bg-gray-700 text-white' : ''
//                                         }`}
//                                 >
//                                     <span>Checkout</span>
//                                 </NavLink>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Orders */}
//                 <NavLink to="/admin/orders" className={({ isActive }) =>
//                     `flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''}`
//                 }>
//                     <FaShoppingCart className="h-5 w-5" />
//                     <span>Orders</span>
//                 </NavLink>

//                 {/* Payments */}
//                 <div className="space-y-2">
//                     <Link
//                         to="/admin/payments"
//                         onClick={togglePayments}
//                         className={`flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/payments' ? 'bg-gray-700 text-white' : ''
//                             }`}
//                     >
//                         <div className="flex items-center space-x-2">
//                             <FaCreditCard className="h-5 w-5" />
//                             <span>Payments</span>
//                         </div>
//                         {isPaymentsOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
//                     </Link>

//                     <div className={`pl-4 overflow-hidden transition-transform duration-300 ease-in-out ${isPaymentsOpen ? '' : ''}`}>
//                         {isPaymentsOpen && (
//                             <div className="space-y-2">
//                                 <NavLink
//                                     to="/admin/pending-payments"
//                                     className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/pending-payments' ? 'bg-gray-700 text-white' : ''
//                                         }`}
//                                 >
//                                     <span>Pending Payments</span>
//                                 </NavLink>
//                                 <NavLink
//                                     to="/admin/processed-payments"
//                                     className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/processed-payments' ? 'bg-gray-700 text-white' : ''
//                                         }`}
//                                 >
//                                     <span>Processed Payments</span>
//                                 </NavLink>
//                                 <NavLink
//                                     to="/admin/payment-reports"
//                                     className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === '/admin/payment-reports' ? 'bg-gray-700 text-white' : ''
//                                         }`}
//                                 >
//                                     <span>Payment Reports</span>
//                                 </NavLink>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//             </nav>
//         </div>
//     );
// };

// export default Sidebar;

// import React, { useState } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { FaHome, FaUsers, FaShoppingCart, FaCreditCard, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const MenuItem = ({ icon: Icon, title, to, children, isOpen, onToggle }) => {
//     const location = useLocation();
//     const hasChildren = Boolean(children);

//     return (
//         <div className="space-y-2">
//             <button
//                 onClick={onToggle}
//                 className={`flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${location.pathname === to ? 'bg-gray-700 text-white' : ''
//                     }`}
//             >
//                 <div className="flex items-center space-x-2">
//                     {Icon && <Icon className="h-5 w-5" />}
//                     <Link to={to}>{title}</Link>
//                 </div>
//                 {hasChildren && (
//                     isOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />
//                 )}
//             </button>

//             {isOpen && children && (
//                 <div className="pl-4 space-y-2">
//                     {children}
//                 </div>
//             )}
//         </div>
//     );
// };

// const SubMenuItem = ({ to, children }) => (
//     <NavLink
//         to={to}
//         className={({ isActive }) =>
//             `flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''
//             }`
//         }
//     >
//         <span>{children}</span>
//     </NavLink>
// );

// const Sidebar = () => {
//     const [openMenus, setOpenMenus] = useState({
//         dashboard: false,
//         users: false,
//         products: false,
//         payments: false
//     });

//     const toggleMenu = (menuName) => {
//         setOpenMenus(prev => ({
//             ...prev,
//             [menuName]: !prev[menuName]
//         }));
//     };

//     const menuItems = [
//         {
//             id: 'dashboard',
//             icon: FaHome,
//             title: 'Dashboards',
//             to: '/admin',
//             subItems: [
//                 { to: '/admin/sales', label: 'Sales' },
//                 { to: '/admin/analytics', label: 'Analytics' },
//                 { to: '/admin/ecommerce', label: 'Ecommerce' }
//             ]
//         },
//         {
//             id: 'users',
//             icon: FaUsers,
//             title: 'Users',
//             to: '/admin/users',
//             subItems: [
//                 {
//                     id: 'products',
//                     title: 'Add Products',
//                     subItems: [
//                         { to: '/admin/add-new-product', label: 'Add New Product' },
//                         { to: '/admin/import-products', label: 'Import Products' }
//                     ]
//                 },
//                 { to: '/admin/cart', label: 'Cart' },
//                 { to: '/admin/checkout', label: 'Checkout' }
//             ]
//         },
//         {
//             id: 'orders',
//             icon: FaShoppingCart,
//             title: 'Orders',
//             to: '/admin/orders'
//         },
//         {
//             id: 'payments',
//             icon: FaCreditCard,
//             title: 'Payments',
//             to: '/admin/payments',
//             subItems: [
//                 { to: '/admin/pending-payments', label: 'Pending Payments' },
//                 { to: '/admin/processed-payments', label: 'Processed Payments' },
//                 { to: '/admin/payment-reports', label: 'Payment Reports' }
//             ]
//         }
//     ];

//     return (
//         <div className="bg-gray-800 w-64 flex flex-col h-screen border-r border-gray-700">
//             <div className="flex items-center justify-center h-16 text-base bg-gray-900 text-white font-semibold">
//                 Admin Dashboard
//             </div>

//             <nav className="flex-1 p-4 space-y-4">
//                 {menuItems.map(item => (
//                     <React.Fragment key={item.id}>
//                         {!item.subItems ? (
//                             <NavLink
//                                 to={item.to}
//                                 className={({ isActive }) =>
//                                     `flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''
//                                     }`
//                                 }
//                             >
//                                 {item.icon && <item.icon className="h-5 w-5" />}
//                                 <span>{item.title}</span>
//                             </NavLink>
//                         ) : (
//                             <MenuItem
//                                 icon={item.icon}
//                                 title={item.title}
//                                 to={item.to}
//                                 isOpen={openMenus[item.id]}
//                                 onToggle={() => toggleMenu(item.id)}
//                             >
//                                 {item.subItems.map((subItem, index) => (
//                                     <React.Fragment key={index}>
//                                         {subItem.subItems ? (
//                                             <MenuItem
//                                                 title={subItem.title}
//                                                 isOpen={openMenus[subItem.id]}
//                                                 onToggle={() => toggleMenu(subItem.id)}
//                                             >
//                                                 {subItem.subItems.map((nestedItem, i) => (
//                                                     <SubMenuItem key={i} to={nestedItem.to}>
//                                                         {nestedItem.label}
//                                                     </SubMenuItem>
//                                                 ))}
//                                             </MenuItem>
//                                         ) : (
//                                             <SubMenuItem to={subItem.to}>
//                                                 {subItem.label}
//                                             </SubMenuItem>
//                                         )}
//                                     </React.Fragment>
//                                 ))}
//                             </MenuItem>
//                         )}
//                     </React.Fragment>
//                 ))}
//             </nav>
//         </div>
//     );
// };

// export default Sidebar;


// import React, { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { FaHome, FaUsers, FaShoppingCart, FaCreditCard, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const MenuItem = ({ icon: Icon, title, to, children, isOpen, onToggle }) => {
//     const location = useLocation();
//     const hasChildren = Boolean(children);

//     // Helper function to check if the menu item or any of its children are active
//     const isMenuItemActive = () => {
//         if (location.pathname === to) {
//             return true; // Menu item itself is active
//         }

//         if (children) {
//             // Check if any of the sub-menu items are active
//             return React.Children.toArray(children).some(child => {
//                 if (React.isValidElement(child)) {
//                     return child.props.to === location.pathname;
//                 }
//                 return false;
//             });
//         }

//         return false;
//     };

//     return (
//         <div className="space-y-2">
//             <div className="relative">
//                 <NavLink
//                     to={to}
//                     className={({ isActive }) => // Remove isActive here, we'll use isMenuItemActive
//                         `flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isMenuItemActive() ? 'bg-gray-700 text-white' : ''
//                         }`
//                     }
//                     end // Add end to match the exact path
//                 >
//                     <div className="flex items-center space-x-2">
//                         {Icon && <Icon className="h-5 w-5" />}
//                         <span>{title}</span>
//                     </div>
//                 </NavLink>
//                 {hasChildren && (
//                     <button
//                         onClick={onToggle}
//                         className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white p-1"
//                     >
//                         {isOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
//                     </button>
//                 )}
//             </div>

//             {isOpen && children && (
//                 <div className="pl-4 space-y-2">
//                     {children}
//                 </div>
//             )}
//         </div>
//     );
// };

// const SubMenuItem = ({ to, children }) => {
//     const location = useLocation();
//     const isActive = location.pathname === to;

//     return (
//         <NavLink
//             to={to}
//             className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''}`}
//             end // Add end to match the exact path
//         >
//             <span>{children}</span>
//         </NavLink>
//     );
// };

// const Sidebar = () => {
//     const [openMenus, setOpenMenus] = useState({
//         dashboard: false,
//         users: false,
//         products: false,
//         payments: false
//     });

//     const toggleMenu = (menuName) => {
//         setOpenMenus(prev => ({
//             ...prev,
//             [menuName]: !prev[menuName]
//         }));
//     };

//     const menuItems = [
//         {
//             id: 'dashboard',
//             icon: FaHome,
//             title: 'Dashboards',
//             to: '/admin',
//             subItems: [
//                 { to: '/admin/sales', label: 'Sales' },
//                 { to: '/admin/analytics', label: 'Analytics' },
//                 { to: '/admin/ecommerce', label: 'Ecommerce' }
//             ]
//         },
//         {
//             id: 'users',
//             icon: FaUsers,
//             title: 'Users',
//             to: '/admin/users',
//             subItems: [
//                 {
//                     id: 'products',
//                     title: 'Add Products',
//                     to: '/admin/add-products',
//                     subItems: [
//                         { to: '/admin/add-new-product', label: 'Add New Product' },
//                         { to: '/admin/import-products', label: 'Import Products' }
//                     ]
//                 },
//                 { to: '/admin/cart', label: 'Cart' },
//                 { to: '/admin/checkout', label: 'Checkout' }
//             ]
//         },
//         {
//             id: 'orders',
//             icon: FaShoppingCart,
//             title: 'Orders',
//             to: '/admin/orders'
//         },
//         {
//             id: 'payments',
//             icon: FaCreditCard,
//             title: 'Payments',
//             to: '/admin/payments',
//             subItems: [
//                 { to: '/admin/pending-payments', label: 'Pending Payments' },
//                 { to: '/admin/processed-payments', label: 'Processed Payments' },
//                 { to: '/admin/payment-reports', label: 'Payment Reports' }
//             ]
//         }
//     ];

//     return (
//         <div className="bg-gray-800 w-64 flex flex-col h-screen border-r border-gray-700">
//             <div className="flex items-center justify-center h-16 text-base bg-gray-900 text-white font-semibold">
//                 Admin Dashboard
//             </div>

//             <nav className="flex-1 p-4 space-y-4">
//                 {menuItems.map(item => (
//                     <React.Fragment key={item.id}>
//                         {!item.subItems ? (
//                             <NavLink
//                                 to={item.to}
//                                 className={({ isActive }) =>
//                                     `flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''
//                                     }`
//                                 }
//                                 end // Add end to match the exact path
//                             >
//                                 {item.icon && <item.icon className="h-5 w-5" />}
//                                 <span>{item.title}</span>
//                             </NavLink>
//                         ) : (
//                             <MenuItem
//                                 icon={item.icon}
//                                 title={item.title}
//                                 to={item.to}
//                                 isOpen={openMenus[item.id]}
//                                 onToggle={() => toggleMenu(item.id)}
//                             >
//                                 {item.subItems.map((subItem) => (
//                                     <React.Fragment key={subItem.to || index}>
//                                         {subItem.subItems ? (
//                                             <MenuItem
//                                                 title={subItem.title}
//                                                 to={subItem.to}
//                                                 isOpen={openMenus[subItem.id]}
//                                                 onToggle={() => toggleMenu(subItem.id)}
//                                             >
//                                                 {subItem.subItems.map((nestedItem) => (
//                                                     <SubMenuItem key={nestedItem.to} to={nestedItem.to}>
//                                                         {nestedItem.label}
//                                                     </SubMenuItem>
//                                                 ))}
//                                             </MenuItem>
//                                         ) : (
//                                             <SubMenuItem to={subItem.to}>
//                                                 {subItem.label}
//                                             </SubMenuItem>
//                                         )}
//                                     </React.Fragment>
//                                 ))}
//                             </MenuItem>
//                         )}
//                     </React.Fragment>
//                 ))}
//             </nav>
//         </div>
//     );
// };

// export default Sidebar;

// 12:58

// import React, { useState, useCallback, useMemo } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { FaHome, FaUsers, FaShoppingCart, FaCreditCard, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const MenuItem = React.memo(({ icon: Icon, title, to, children, isOpen, onToggle, isActive }) => {
//     const hasChildren = Boolean(children);

//     return (
//         <div className="space-y-2">
//             <div className="relative">
//                 <NavLink
//                     to={to}
//                     className={`flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''}`}
//                     end
//                 >
//                     <div className="flex items-center space-x-2">
//                         {Icon && <Icon className="h-5 w-5" />}
//                         <span>{title}</span>
//                     </div>
//                 </NavLink>
//                 {hasChildren && (
//                     <button
//                         onClick={onToggle}
//                         className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white p-1"
//                     >
//                         {isOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
//                     </button>
//                 )}
//             </div>

//             {isOpen && children && (
//                 <div className="pl-4 space-y-2">
//                     {children}
//                 </div>
//             )}
//         </div>
//     );
// });

// const SubMenuItem = React.memo(({ to, children, isActive }) => {
//     return (
//         <NavLink
//             to={to}
//             className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''}`}
//             end
//         >
//             <span>{children}</span>
//         </NavLink>
//     );
// });

// const Sidebar = () => {
//     const [openMenus, setOpenMenus] = useState({
//         dashboard: false,
//         users: false,
//         products: false,
//         payments: false
//     });
//     const location = useLocation();

//     const toggleMenu = useCallback((menuName) => {
//         setOpenMenus(prev => ({
//             ...prev,
//             [menuName]: !prev[menuName]
//         }));
//     }, []);

//     const menuItems = useMemo(() => [
//         {
//             id: 'dashboard',
//             icon: FaHome,
//             title: 'Dashboards',
//             to: '/admin',
//             subItems: [
//                 { to: '/admin/sales', label: 'Sales' },
//                 { to: '/admin/analytics', label: 'Analytics' },
//                 { to: '/admin/ecommerce', label: 'Ecommerce' }
//             ]
//         },
//         {
//             id: 'users',
//             icon: FaUsers,
//             title: 'Users',
//             to: '/admin/users',
//             subItems: [
//                 {
//                     id: 'products',
//                     title: 'Add Products',
//                     to: '/admin/add-products',
//                     subItems: [
//                         { to: '/admin/add-new-product', label: 'Add New Product' },
//                         { to: '/admin/import-products', label: 'Import Products' }
//                     ]
//                 },
//                 { to: '/admin/cart', label: 'Cart' },
//                 { to: '/admin/checkout', label: 'Checkout' }
//             ]
//         },
//         {
//             id: 'orders',
//             icon: FaShoppingCart,
//             title: 'Orders',
//             to: '/admin/orders'
//         },
//         {
//             id: 'payments',
//             icon: FaCreditCard,
//             title: 'Payments',
//             to: '/admin/payments',
//             subItems: [
//                 { to: '/admin/pending-payments', label: 'Pending Payments' },
//                 { to: '/admin/processed-payments', label: 'Processed Payments' },
//                 { to: '/admin/payment-reports', label: 'Payment Reports' }
//             ]
//         }
//     ], []); // Dependency array is empty because menuItems is static

//     const isMenuItemActive = useCallback((item) => {
//         if (location.pathname === item.to) {
//             return true;
//         }

//         if (item.subItems) {
//             return item.subItems.some(subItem => {
//                 if (subItem.subItems) {
//                     return subItem.subItems.some(nestedItem => nestedItem.to === location.pathname);
//                 }
//                 return subItem.to === location.pathname;
//             });
//         }
//         return false;
//     }, [location.pathname]);

//     return (
//         <div className="bg-gray-800 w-64 flex flex-col h-screen border-r border-gray-700">
//             <div className="flex items-center justify-center h-16 text-base bg-gray-900 text-white font-semibold">
//                 Admin Dashboard
//             </div>

//             <nav className="flex-1 p-4 space-y-4">
//                 {menuItems.map(item => {
//                     const isActive = isMenuItemActive(item);
//                     return (
//                         <React.Fragment key={item.id}>
//                             {!item.subItems ? (
//                                 <NavLink
//                                     to={item.to}
//                                     className={`flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''}`}
//                                     end
//                                 >
//                                     {item.icon && <item.icon className="h-5 w-5" />}
//                                     <span>{item.title}</span>
//                                 </NavLink>
//                             ) : (
//                                 <MenuItem
//                                     icon={item.icon}
//                                     title={item.title}
//                                     to={item.to}
//                                     isOpen={openMenus[item.id]}
//                                     onToggle={() => toggleMenu(item.id)}
//                                     isActive={isActive}
//                                 >
//                                     {item.subItems.map(subItem => {
//                                         const subIsActive = isMenuItemActive(subItem);
//                                         return (
//                                             <React.Fragment key={subItem.to}>
//                                                 {subItem.subItems ? (
//                                                     <MenuItem
//                                                         title={subItem.title}
//                                                         to={subItem.to}
//                                                         isOpen={openMenus[subItem.id]}
//                                                         onToggle={() => toggleMenu(subItem.id)}
//                                                         isActive={subIsActive}
//                                                     >
//                                                         {subItem.subItems.map(nestedItem => (
//                                                             <SubMenuItem key={nestedItem.to} to={nestedItem.to} isActive={location.pathname === nestedItem.to}>
//                                                                 {nestedItem.label}
//                                                             </SubMenuItem>
//                                                         ))}
//                                                     </MenuItem>
//                                                 ) : (
//                                                     <SubMenuItem to={subItem.to} isActive={subIsActive}>
//                                                         {subItem.label}
//                                                     </SubMenuItem>
//                                                 )}
//                                             </React.Fragment>
//                                         )
//                                     })}
//                                 </MenuItem>
//                             )}
//                         </React.Fragment>
//                     );
//                 })}
//             </nav>
//         </div>
//     );
// };

// export default Sidebar;



// 09:22

// import React, { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { FaHome, FaUsers, FaShoppingCart, FaCreditCard, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const MenuItem = ({ item, isOpen, onToggle }) => {
//     const location = useLocation();
//     const hasChildren = item.subItems && item.subItems.length > 0;
//     const isActive = location.pathname === item.to;

//     const handleClick = () => {
//         if (hasChildren) {
//             onToggle(item.id);
//         }
//     };

//     return (
//         <div className="space-y-2">
//             <div className="relative">
//                 <NavLink
//                     to={item.to}
//                     className={({ isActive: navLinkIsActive }) => // Remove isActive here, we'll use isMenuItemActive
//                         `flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive || navLinkIsActive ? 'bg-gray-700 text-white' : ''
//                         }`
//                     }
//                     end // Add end to match the exact path
//                     onClick={handleClick}
//                 >
//                     <div className="flex items-center space-x-2">
//                         {item.icon && <item.icon className="h-5 w-5" />}
//                         <span>{item.title}</span>
//                     </div>
//                     {hasChildren && (
//                         <button
//                             type="button"
//                             onClick={(e) => {
//                                 e.preventDefault(); // Prevent NavLink from navigating
//                                 onToggle(item.id);
//                             }}
//                             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white p-1"
//                         >
//                             {isOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
//                         </button>
//                     )}
//                 </NavLink>
//             </div>

//             {isOpen && hasChildren && (
//                 <div className="pl-4 space-y-2">
//                     {item.subItems.map((subItem) => (
//                         <MenuItem
//                             key={subItem.id}
//                             item={subItem}
//                             isOpen={isOpen}
//                             onToggle={onToggle}
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// const Sidebar = () => {
//     const [openMenus, setOpenMenus] = useState({}); // Store open state by item ID

//     const toggleMenu = (menuId) => {
//         setOpenMenus(prev => ({
//             ...prev,
//             [menuId]: !prev[menuId]
//         }));
//     };

//     const menuItems = [
//         {
//             id: 'dashboard',
//             icon: FaHome,
//             title: 'Dashboards',
//             to: '/admin',
//             subItems: [
//                 { id: 'sales', title: 'Sales', to: '/admin/sales' },
//                 { id: 'analytics', title: 'Analytics', to: '/admin/analytics' },
//                 { id: 'ecommerce', title: 'Ecommerce', to: '/admin/ecommerce' }
//             ]
//         },
//         {
//             id: 'users',
//             icon: FaUsers,
//             title: 'Users',
//             to: '/admin/users',
//             subItems: [
//                 {
//                     id: 'add-products', title: 'Add Products', to: '/admin/add-products',
//                     subItems: [
//                         { id: 'add-new-product', title: 'Add New Product', to: '/admin/add-new-product' },
//                         { id: 'import-products', title: 'Import Products', to: '/admin/import-products' }
//                     ]
//                 },
//                 { id: 'cart', title: 'Cart', to: '/admin/cart' },
//                 { id: 'checkout', title: 'Checkout', to: '/admin/checkout' }
//             ]
//         },
//         {
//             id: 'orders',
//             icon: FaShoppingCart,
//             title: 'Orders',
//             to: '/admin/orders'
//         },
//         {
//             id: 'payments',
//             icon: FaCreditCard,
//             title: 'Payments',
//             to: '/admin/payments',
//             subItems: [
//                 { id: 'pending-payments', title: 'Pending Payments', to: '/admin/pending-payments' },
//                 { id: 'processed-payments', title: 'Processed Payments', to: '/admin/processed-payments' },
//                 { id: 'payment-reports', title: 'Payment Reports', to: '/admin/payment-reports' }
//             ]
//         }
//     ];

//     return (
//         <div className="bg-gray-800 w-64 flex flex-col h-screen border-r border-gray-700">
//             <div className="flex items-center justify-center h-16 text-base bg-gray-900 text-white font-semibold">
//                 Admin Dashboard
//             </div>

//             <nav className="flex-1 p-4 space-y-4">
//                 {menuItems.map(item => (
//                     <MenuItem
//                         key={item.id}
//                         item={item}
//                         isOpen={openMenus[item.id]}
//                         onToggle={toggleMenu}
//                     />
//                 ))}
//             </nav>
//         </div>
//     );
// };

// export default Sidebar;

// 10:16

// import React, { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { FaHome, FaUsers, FaShoppingCart, FaCreditCard, FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import clsx from 'clsx'; // Utility for conditional classNames

// const MenuItem = ({ item, openMenus, onToggle }) => {
//     const location = useLocation();
//     const hasChildren = item.subItems && item.subItems.length > 0;
//     const isActive = location.pathname === item.to;
//     const isOpen = openMenus[item.id];

//     const handleClick = (e) => {
//         if (hasChildren) {
//             e.preventDefault(); // Prevent direct navigation if the item has submenus
//             onToggle(item.id);
//         }
//     };


//     return (
//         <div className="space-y-1">
//             <div className="relative">
//                 <NavLink
//                     to={item.to}
//                     className={({ isActive: navLinkIsActive }) =>
//                         clsx(
//                             'flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200',
//                             (isActive || navLinkIsActive) && 'bg-gray-700 text-white'
//                         )
//                     }
//                     end
//                     onClick={handleClick}
//                 >
//                     <div className="flex items-center space-x-2">
//                         {item.icon && <item.icon className="h-5 w-5" />}
//                         <span>{item.title}</span>
//                     </div>
//                     {hasChildren && (
//                         <button
//                             type="button"
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 onToggle(item.id);
//                             }}
//                             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white p-1"
//                         >
//                             {isOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
//                         </button>
//                     )}
//                 </NavLink>
//             </div>

//             <div
//                 className={clsx(
//                     'overflow-hidden transition-[max-height] duration-300 ease-in-out',
//                     isOpen ? 'max-h-96' : 'max-h-0'
//                 )}
//             >
//                 {hasChildren && (
//                     <div className="pl-4 space-y-2">
//                         {item.subItems.map((subItem) => (
//                             <MenuItem
//                                 key={subItem.id}
//                                 item={subItem}
//                                 openMenus={openMenus}
//                                 onToggle={onToggle}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// const Sidebar = () => {
//     const [openMenus, setOpenMenus] = useState({});

//     const toggleMenu = (menuId) => {
//         setOpenMenus(prev => ({
//             ...prev,
//             [menuId]: !prev[menuId]
//         }));
//     };

//     const menuItems = [
//         {
//             id: 'dashboard',
//             icon: FaHome,
//             title: 'Dashboards',
//             to: '/admin',
//             subItems: [
//                 { id: 'sales', title: 'Sales', to: '/admin/sales' },
//                 { id: 'analytics', title: 'Analytics', to: '/admin/analytics' },
//                 { id: 'ecommerce', title: 'Ecommerce', to: '/admin/ecommerce' }
//             ]
//         },
//         {
//             id: 'users',
//             icon: FaUsers,
//             title: 'Users',
//             to: '/admin/users',
//             subItems: [
//                 {
//                     id: 'add-products',
//                     title: 'Add Products',
//                     to: '/admin/add-products',
//                     subItems: [
//                         { id: 'add-new-product', title: 'Add New Product', to: '/admin/add-new-product' },
//                         { id: 'import-products', title: 'Import Products', to: '/admin/import-products' }
//                     ]
//                 },
//                 { id: 'cart', title: 'Cart', to: '/admin/cart' },
//                 { id: 'checkout', title: 'Checkout', to: '/admin/checkout' }
//             ]
//         },
//         {
//             id: 'orders',
//             icon: FaShoppingCart,
//             title: 'Orders',
//             to: '/admin/orders'
//         },
//         {
//             id: 'payments',
//             icon: FaCreditCard,
//             title: 'Payments',
//             to: '/admin/payments',
//             subItems: [
//                 { id: 'pending-payments', title: 'Pending Payments', to: '/admin/pending-payments' },
//                 { id: 'processed-payments', title: 'Processed Payments', to: '/admin/processed-payments' },
//                 { id: 'payment-reports', title: 'Payment Reports', to: '/admin/payment-reports' }
//             ]
//         }
//     ];

//     return (
//         <div className="bg-gray-800 w-64 flex flex-col h-screen border-r border-gray-700">
//             <div className="flex items-center justify-center h-16 text-base bg-gray-900 text-white font-semibold">
//                 Admin Dashboard
//             </div>

//             <nav className="flex-1 p-4 space-y-2">
//                 {menuItems.map(item => (
//                     <MenuItem
//                         key={item.id}
//                         item={item}
//                         openMenus={openMenus}
//                         onToggle={toggleMenu}
//                     />
//                 ))}
//             </nav>
//         </div>
//     );
// };

// export default Sidebar;



// import React, { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { FaHome, FaUsers, FaShoppingCart, FaCreditCard, FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import clsx from 'clsx'; // Utility for conditional classNames

// const MenuItem = ({ item, openMenus, onToggle }) => {
//     const location = useLocation();
//     const hasChildren = item.subItems && item.subItems.length > 0;
//     const isOpen = openMenus[item.id];

//     const handleClick = (e) => {
//         if (hasChildren) {
//             e.preventDefault(); // Prevent direct navigation if the item has submenus
//             onToggle(item.id);
//         }
//     };

//     const isActive = (path) => {
//         return location.pathname.startsWith(path);
//     };


//     return (
//         <div className="space-y-1">
//             <div className="relative">
//                 {/* List-items */}
//                 <NavLink
//                     to={item.to}
//                     className={({ isActive }) => // Corrected: use the isActive prop directly
//                         clsx(
//                             'flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200',
//                             isActive && 'bg-gray-700 text-white' // Corrected: use isActive directly
//                         )
//                     }
//                     end={!hasChildren} // Only apply 'end' if there are no sub-items
//                     onClick={handleClick}
//                 >
//                     <div className="flex items-center space-x-2">
//                         {item.icon && <item.icon className="h-5 w-5" />}
//                         <span>{item.title}</span>
//                     </div>
//                     {hasChildren && (
//                         <button
//                             type="button"
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 onToggle(item.id);
//                             }}
//                             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white p-1"
//                         >
//                             {isOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
//                         </button>
//                     )}
//                 </NavLink>
//             </div>

//             <div
//                 className={clsx(
//                     'overflow-hidden transition-[max-height] duration-300 ease-in-out',
//                     isOpen ? 'max-h-96' : 'max-h-0'
//                 )}
//             >
//                 {hasChildren && (
//                     <div className="pl-4 space-y-2">
//                         {item.subItems.map((subItem) => (
//                             <NavLink
//                                 key={subItem.id}
//                                 to={subItem.to}
//                                 className={({ isActive }) =>
//                                     clsx(
//                                         'block py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200',
//                                         isActive && 'bg-gray-700 text-white'
//                                     )
//                                 }
//                             >
//                                 {subItem.title}
//                             </NavLink>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// const Sidebar = () => {
//     const [openMenus, setOpenMenus] = useState({});

//     const toggleMenu = (menuId) => {
//         setOpenMenus(prev => ({
//             ...prev,
//             [menuId]: !prev[menuId]
//         }));
//     };

//     const menuItems = [
//         {
//             id: 'dashboard',
//             icon: FaHome,
//             title: 'Dashboards',
//             to: '/admin',
//             subItems: [
//                 { id: 'sales', title: 'Sales', to: '/admin/sales' },
//                 { id: 'analytics', title: 'Analytics', to: '/admin/analytics' },
//                 { id: 'ecommerce', title: 'Ecommerce', to: '/admin/ecommerce' }
//             ]
//         },
//         {
//             id: 'users',
//             icon: FaUsers,
//             title: 'Users',
//             to: '/admin/users',
//             subItems: [
//                 {
//                     id: 'add-products',
//                     title: 'Add Products',
//                     to: '/admin/add-products',
//                     subItems: [
//                         { id: 'add-new-product', title: 'Add New Product', to: '/admin/add-new-product' },
//                         { id: 'import-products', title: 'Import Products', to: '/admin/import-products' }
//                     ]
//                 },
//                 { id: 'cart', title: 'Cart', to: '/admin/cart' },
//                 { id: 'checkout', title: 'Checkout', to: '/admin/checkout' }
//             ]
//         },
//         {
//             id: 'orders',
//             icon: FaShoppingCart,
//             title: 'Orders',
//             to: '/admin/orders'
//         },
//         {
//             id: 'payments',
//             icon: FaCreditCard,
//             title: 'Payments',
//             to: '/admin/payments',
//             subItems: [
//                 { id: 'pending-payments', title: 'Pending Payments', to: '/admin/pending-payments' },
//                 { id: 'processed-payments', title: 'Processed Payments', to: '/admin/processed-payments' },
//                 { id: 'payment-reports', title: 'Payment Reports', to: '/admin/payment-reports' }
//             ]
//         }
//     ];

//     return (
//         <div className="bg-gray-800 w-64 flex flex-col h-screen border-r border-gray-700">
//             <div className="flex items-center justify-center h-16 text-base bg-gray-900 text-white font-semibold">
//                 Admin Dashboard
//             </div>

//             <nav className="flex-1 p-4 space-y-2">
//                 {menuItems.map(item => (
//                     <MenuItem
//                         key={item.id}
//                         item={item}
//                         openMenus={openMenus}
//                         onToggle={toggleMenu}
//                     />
//                 ))}
//             </nav>
//         </div>
//     );
// };

// export default Sidebar;

// import React, { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { FaHome, FaUsers, FaShoppingCart, FaCreditCard, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const MenuItem = ({ item, openMenus, onToggle }) => {
//     const location = useLocation();
//     const hasChildren = item.subItems && item.subItems.length > 0;
//     const isActive = location.pathname === item.to;
//     const isOpen = openMenus[item.id];

//     const handleClick = (e) => {
//         // Prevent menu from closing when clicking on sub-item
//         if (!hasChildren) return;

//         e.preventDefault();
//         onToggle(item.id);
//     };

//     return (
//         <div className="space-y-2">
//             <div className="relative">
//                 <NavLink
//                     to={item.to}
//                     className={({ isActive: navLinkIsActive }) =>
//                         `flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive || navLinkIsActive ? 'bg-gray-700 text-white' : ''
//                         }`
//                     }
//                     end={!hasChildren} //Only end for parent not for child items
//                     onClick={handleClick}
//                 >
//                     <div className="flex items-center space-x-2">
//                         {item.icon && <item.icon className="h-5 w-5" />}
//                         <span>{item.title}</span>
//                     </div>
//                     {hasChildren && (
//                         <button
//                             type="button"
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 onToggle(item.id);
//                             }}
//                             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white p-1"
//                         >
//                             {isOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
//                         </button>
//                     )}
//                 </NavLink>
//             </div>

//             {isOpen && hasChildren && (
//                 <div className="pl-4 space-y-2">
//                     {item.subItems.map((subItem) => (
//                         <MenuItem
//                             key={subItem.id}
//                             item={subItem}
//                             openMenus={openMenus}
//                             onToggle={onToggle}
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// const Sidebar = () => {
//     const [openMenus, setOpenMenus] = useState({}); // Initialize as an empty object

//     const toggleMenu = (menuId) => {
//         setOpenMenus(prev => ({
//             ...prev,
//             [menuId]: !prev[menuId]
//         }));
//     };

//     const menuItems = [
//         {
//             id: 'dashboard',
//             icon: FaHome,
//             title: 'Dashboards',
//             to: '/admin',
//             subItems: [
//                 { id: 'sales', title: 'Sales', to: '/admin/sales' },
//                 { id: 'analytics', title: 'Analytics', to: '/admin/analytics' },
//                 { id: 'ecommerce', title: 'Ecommerce', to: '/admin/ecommerce' }
//             ]
//         },
//         {
//             id: 'users',
//             icon: FaUsers,
//             title: 'Users',
//             to: '/admin/users',
//             subItems: [
//                 {
//                     id: 'add-products',
//                     title: 'Add Products',
//                     to: '/admin/add-products',
//                     subItems: [
//                         { id: 'add-new-product', title: 'Add New Product', to: '/admin/add-new-product' },
//                         { id: 'import-products', title: 'Import Products', to: '/admin/import-products' }
//                     ]
//                 },
//                 { id: 'cart', title: 'Cart', to: '/admin/cart' },
//                 { id: 'checkout', title: 'Checkout', to: '/admin/checkout' }
//             ]
//         },
//         {
//             id: 'orders',
//             icon: FaShoppingCart,
//             title: 'Orders',
//             to: '/admin/orders'
//         },
//         {
//             id: 'payments',
//             icon: FaCreditCard,
//             title: 'Payments',
//             to: '/admin/payments',
//             subItems: [
//                 { id: 'pending-payments', title: 'Pending Payments', to: '/admin/pending-payments' },
//                 { id: 'processed-payments', title: 'Processed Payments', to: '/admin/processed-payments' },
//                 { id: 'payment-reports', title: 'Payment Reports', to: '/admin/payment-reports' }
//             ]
//         }
//     ];

//     return (
//         <div className="bg-gray-800 w-64 flex flex-col h-screen border-r border-gray-700">
//             <div className="flex items-center justify-center h-16 text-base bg-gray-900 text-white font-semibold">
//                 Admin Dashboard
//             </div>

//             <nav className="flex-1 p-4 space-y-4">
//                 {menuItems.map(item => (
//                     <MenuItem
//                         key={item.id}
//                         item={item}
//                         openMenus={openMenus}
//                         onToggle={toggleMenu}
//                     />
//                 ))}
//             </nav>
//         </div>
//     );
// };

// export default Sidebar;

import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaUsers, FaShoppingCart, FaCreditCard, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MenuItem = ({ item, openMenus, onToggle }) => {
    const location = useLocation();
    const hasChildren = item.subItems && item.subItems.length > 0;
    const isActive = location.pathname === item.to;
    const isOpen = openMenus[item.id];

    const handleClick = (e) => {
        if (item.id === 'add-products') {
            e.preventDefault();
            onToggle(item.id);
            return;
        }

        if (hasChildren) {
            onToggle(item.id);
        }
    };

    return (
        <div className="space-y-2">
            <div className="relative">
                <NavLink
                    to={item.to}
                    className={({ isActive: navLinkIsActive }) =>
                        `flex items-center justify-between w-full py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive || navLinkIsActive ? 'bg-gray-700 text-white' : ''
                        }`
                    }
                    end
                    onClick={handleClick}
                >
                    <div className="flex items-center space-x-2">
                        {item.icon && <item.icon className="h-5 w-5" />}
                        <span>{item.title}</span>
                    </div>
                    {hasChildren && (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                onToggle(item.id);
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white p-1"
                        >
                            {isOpen ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
                        </button>
                    )}
                </NavLink>
            </div>

            {isOpen && hasChildren && (
                <div className="pl-4 space-y-2">
                    {item.subItems.map((subItem) => (
                        <MenuItem
                            key={subItem.id}
                            item={subItem}
                            openMenus={openMenus}
                            onToggle={onToggle}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const Sidebar = () => {
    const [openMenus, setOpenMenus] = useState({
        dashboard: false,
        users: false,
        'add-products': false,
        orders: false,
        payments: false
    });

    const toggleMenu = (menuId) => {
        setOpenMenus(prev => ({
            ...prev,
            [menuId]: !prev[menuId]
        }));
    };

    const menuItems = [
        {
            id: 'dashboard',
            icon: FaHome,
            title: 'Dashboards',
            to: '/admin',
            subItems: [
                { id: 'sales', title: 'Sales', to: '/admin/sales' },
                { id: 'analytics', title: 'Analytics', to: '/admin/analytics' },
                { id: 'ecommerce', title: 'Ecommerce', to: '/admin/ecommerce' }
            ]
        },
        {
            id: 'users',
            icon: FaUsers,
            title: 'Users',
            to: '/admin/users',
            subItems: [
                {
                    id: 'add-products',
                    title: 'Add Products',
                    to: '/admin/add-products',
                    subItems: [
                        { id: 'add-new-product', title: 'Add New Product', to: '/admin/add-new-product' },
                        { id: 'import-products', title: 'Import Products', to: '/admin/import-products' }
                    ]
                },
                { id: 'cart', title: 'Cart', to: '/admin/cart' },
                { id: 'checkout', title: 'Checkout', to: '/admin/checkout' }
            ]
        },
        {
            id: 'orders',
            icon: FaShoppingCart,
            title: 'Orders',
            to: '/admin/orders'
        },
        {
            id: 'payments',
            icon: FaCreditCard,
            title: 'Payments',
            to: '/admin/payments',
            subItems: [
                { id: 'pending-payments', title: 'Pending Payments', to: '/admin/pending-payments' },
                { id: 'processed-payments', title: 'Processed Payments', to: '/admin/processed-payments' },
                { id: 'payment-reports', title: 'Payment Reports', to: '/admin/payment-reports' }
            ]
        }
    ];

    return (
        <div className="bg-gray-800 w-64 flex flex-col h-screen border-r border-gray-700">
            <div className="flex items-center justify-center h-16 text-base bg-gray-900 text-white font-semibold">
                Admin Dashboard
            </div>

            <nav className="flex-1 p-4 space-y-4">
                {menuItems.map(item => (
                    <MenuItem
                        key={item.id}
                        item={item}
                        openMenus={openMenus}
                        onToggle={toggleMenu}
                    />
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
