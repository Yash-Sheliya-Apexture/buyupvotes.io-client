// src/admin/layout/AdminLayout.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header/Header';  // New component for the header
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="min-h-screen">
            <div className="flex flex-row min-h-screen w-full overflow-y-auto">
                <Sidebar />
                <div className="flex flex-col flex-1 w-[calc(100%-254px)] h-screen">
                    <Header />  {/* Include the header */}
                    <main className="flex-1 p-4 overflow-y-auto">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;