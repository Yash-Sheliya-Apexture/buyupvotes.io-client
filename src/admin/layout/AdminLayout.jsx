// src/admin/layout/AdminLayout.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';  // New component for the header

const AdminLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-row min-h-screen w-full">
                <Sidebar />
                <div className="flex flex-col flex-1 w-full">
                    <Header />  {/* Include the header */}
                    <main className="flex-1 p-4 bg-gray-50">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;