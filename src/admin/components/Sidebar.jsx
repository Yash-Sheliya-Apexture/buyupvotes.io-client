// src/admin/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaShoppingCart, FaCreditCard } from 'react-icons/fa'; // Font Awesome icons

const Sidebar = () => {
    return (
        <div className="bg-gray-800 w-64 flex flex-col h-screen border-r border-gray-700">
            {/* Logo */}
            <div className="flex items-center justify-center h-16 bg-gray-900 text-white font-semibold">
                TailAdmin
            </div>

            {/* Menu */}
            <nav className="flex-1 p-4">
                {/* Dashboard */}
                <NavLink to="/admin" className={({ isActive }) =>
                    `flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''}`
                }>
                    <FaHome className="h-5 w-5" />
                    <span>Dashboard</span>
                </NavLink>

                {/* Users */}
                <NavLink to="/admin/users" className={({ isActive }) =>
                    `flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''}`
                }>
                    <FaUsers className="h-5 w-5" />
                    <span>Users</span>
                </NavLink>

                {/* Orders */}
                <NavLink to="/admin/orders" className={({ isActive }) =>
                    `flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''}`
                }>
                    <FaShoppingCart className="h-5 w-5" />
                    <span>Orders</span>
                </NavLink>

                {/* Payments */}
                <NavLink to="/admin/payments" className={({ isActive }) =>
                    `flex items-center space-x-2 py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ${isActive ? 'bg-gray-700 text-white' : ''}`
                }>
                    <FaCreditCard className="h-5 w-5" />
                    <span>Payments</span>
                </NavLink>

                {/* Add more navigation links here */}
            </nav>
        </div>
    );
};

export default Sidebar;