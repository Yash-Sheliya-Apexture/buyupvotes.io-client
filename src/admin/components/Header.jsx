// src/admin/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <div className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {/* You can add header content here, like user info, search bar, etc. */}
                <h1 className="text-xl font-semibold text-gray-900">
                    Admin Dashboard
                </h1>
            </div>
        </div>
    );
};

export default Header;