// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import { useAuth } from "../auth/AuthContext";
// import Dashboard from '../admin/pages/Dashboard';
// import UserList from '../admin/pages/UserList';
// import OrderList from '../admin/pages/OrderList';
// import UserProfile from '../admin/pages/UserProfile';
// import PaymentList from '../admin/pages/PaymentList';
// import AdminLayout from '../admin/layout/AdminLayout';

// const AdminRoutes = () => {
//     const { user, loading } = useAuth();

//     if (loading) {
//         return <div>Loading...</div>;  // Or a spinner
//     }

//     if (!user || user.role !== 'admin') {
//         return <Navigate to="/signin" />;
//     }

//     return (
//         <AdminLayout>
//             <Routes>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/users" element={<UserList />} />
//                 <Route path="/users/:userId" element={<UserProfile />} />
//                 <Route path="/orders" element={<OrderList />} />
//                 <Route path="/payments" element={<PaymentList />} />
//             </Routes>
//         </AdminLayout>
//     );
// };
// export default AdminRoutes;

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from "../auth/AuthContextWeb";
import Dashboard from '../admin/pages/Dashboard';
import UserList from '../admin/pages/UserList';
import OrderList from '../admin/pages/OrderList';
import UserProfile from '../admin/pages/UserProfile';
import PaymentList from '../admin/pages/PaymentList';
import AdminLayout from '../admin/layout/AdminLayout';

const AdminRoutes = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;  // Or a spinner
    }

    // Double check if user is logged in and is Admin.
    if (!user || user.role !== 'admin') {
        return <Navigate to={user ? "/" : "/signin"} />;
    }


    return (
        <Routes>
            <Route path="/" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="users" element={<UserList />} />
                <Route path="users/:userId" element={<UserProfile />} />
                <Route path="orders" element={<OrderList />} />
                <Route path="payments" element={<PaymentList />} />
            </Route>
        </Routes>
    );
};
export default AdminRoutes;
