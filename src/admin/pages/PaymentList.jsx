// import React, { useState, useEffect } from 'react';

// const PaymentList = () => {
//     const [payments, setPayments] = useState([]);

//     useEffect(() => {
//         const fetchPayments = async () => {
//             try {
//                 setPayments(response.data);
//             } catch (error) {
//                 console.error('Error fetching payments:', error);
//             }
//         };

//         fetchPayments();
//     }, []);

//     return (
//         <div>
//             <h1>Payment List</h1>
//             <ul>
//                 {payments.map(payment => (
//                     <li key={payment._id}>Payment ID: {payment._id}, User ID: {payment.userId}, Amount: {payment.amount}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default PaymentList;




// PaymentList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            setError(null);
            try {
                const token = localStorage.getItem('authToken');
                if (!token) {
                    console.error('Authentication token not found');
                    setError('Authentication token not found');
                    return;
                }

                const response = await axios.get(`${API_BASE_URL}/admin/users`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (response.status === 200) {
                    setUsers(response.data);
                } else {
                    console.error('Failed to fetch users:', response.status);
                    setError(`Failed to fetch users: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
                setError(error.message || 'Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [API_BASE_URL]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div>
            <h1>User Payment List</h1>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>${user.totalAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentList;