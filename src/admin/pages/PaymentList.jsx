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




// // PaymentList.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PaymentList = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     useEffect(() => {
//         const fetchUsers = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const token = localStorage.getItem('authToken');
//                 if (!token) {
//                     console.error('Authentication token not found');
//                     setError('Authentication token not found');
//                     return;
//                 }

//                 const response = await axios.get(`${API_BASE_URL}/admin/users`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 if (response.status === 200) {
//                     //setUsers(response.data); // Original line - replaced below

//                     // Fetch payments and calculate total amount for each user
//                     const usersWithTotals = await Promise.all(
//                         response.data.map(async user => {
//                             try {
//                                 const paymentsResponse = await axios.get(
//                                     `${API_BASE_URL}/admin/users/${user._id}/payments`,
//                                     { headers: { Authorization: `Bearer ${token}` } }
//                                 );
//                                 const payments = paymentsResponse.data.payments;
//                                 const totalAmount = payments.reduce((acc, payment) => acc + payment.amount, 0);
//                                 //Calculate the spent amount for each user.
//                                 const spentAmountResponse = await axios.get(`${API_BASE_URL}/admin/users/${user._id}`, {
//                                     headers: { Authorization: `Bearer ${token}` }
//                                 });
//                                 return { ...user, totalAmount: totalAmount, spentAmount: spentAmountResponse.data.spentAmount };
//                             } catch (error) {
//                                 console.error(`Error fetching payments for user ${user._id}:`, error);
//                                 return { ...user, totalAmount: 0, spentAmount: 0 }; // Handle errors gracefully
//                             }
//                         })
//                     );

//                     setUsers(usersWithTotals);

//                 } else {
//                     console.error('Failed to fetch users:', response.status);
//                     setError(`Failed to fetch users: ${response.status}`);
//                 }
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//                 setError(error.message || 'Failed to fetch users');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, [API_BASE_URL]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div className="text-red-500">Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h1>User Payment List</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>User ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Total Amount</th>
//                          <th>Spent Amount</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user._id}>
//                             <td>{user._id}</td>
//                             <td>{user.firstName} {user.lastName}</td>
//                             <td>{user.email}</td>
//                             <td>${user.totalAmount}</td>
//                             <td>${user.spentAmount}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default PaymentList;


// // PaymentList.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PaymentList = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     useEffect(() => {
//         const fetchUsers = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const token = localStorage.getItem('authToken');
//                 if (!token) {
//                     console.error('Authentication token not found');
//                     setError('Authentication token not found');
//                     return;
//                 }

//                 const response = await axios.get(`${API_BASE_URL}/admin/users`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 if (response.status === 200) {
//                     //setUsers(response.data); // Original line - replaced below

//                     // Fetch payments and calculate total amount for each user
//                     const usersWithTotals = await Promise.all(
//                         response.data.map(async user => {
//                             try {
//                                 const paymentsResponse = await axios.get(
//                                     `${API_BASE_URL}/admin/users/${user._id}/payments`,
//                                     { headers: { Authorization: `Bearer ${token}` } }
//                                 );
//                                 const payments = paymentsResponse.data.payments;
//                                 const totalAmount = payments.reduce((acc, payment) => acc + payment.amount, 0);
//                                 //Calculate the spent amount for each user.
//                                 const spentAmountResponse = await axios.get(`${API_BASE_URL}/admin/users/${user._id}`, {
//                                     headers: { Authorization: `Bearer ${token}` }
//                                 });
//                                 return { ...user, totalAmount: totalAmount, spentAmount: spentAmountResponse.data.spentAmount };
//                             } catch (error) {
//                                 console.error(`Error fetching payments for user ${user._id}:`, error);
//                                 return { ...user, totalAmount: 0, spentAmount: 0 }; // Handle errors gracefully
//                             }
//                         })
//                     );

//                     setUsers(usersWithTotals);

//                 } else {
//                     console.error('Failed to fetch users:', response.status);
//                     setError(`Failed to fetch users: ${response.status}`);
//                 }
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//                 setError(error.message || 'Failed to fetch users');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, [API_BASE_URL]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div className="text-red-500">Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h1>User Payment List</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>User ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Role</th>
//                         <th>Total Amount</th>
//                         <th>Spent Amount</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user._id}>
//                             <td>{user._id}</td>
//                             <td>{user.firstName} {user.lastName}</td>
//                             <td>{user.email}</td>
//                             <td>{user.role}</td>
//                             <td>${user.totalAmount}</td>
//                             <td>${user.spentAmount}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default PaymentList;



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
          //setUsers(response.data); // Original line - replaced below

          // Fetch payments and calculate total amount for each user
          const usersWithTotals = await Promise.all(
            response.data.map(async user => {
              try {
                const paymentsResponse = await axios.get(
                  `${API_BASE_URL}/admin/users/${user._id}/payments`,
                  { headers: { Authorization: `Bearer ${token}` } }
                );
                const payments = paymentsResponse.data.payments;
                const totalAmount = payments.reduce((acc, payment) => acc + payment.amount, 0);
                //Calculate the spent amount for each user.
                const spentAmountResponse = await axios.get(`${API_BASE_URL}/admin/users/${user._id}`, {
                  headers: { Authorization: `Bearer ${token}` }
                });
                return { ...user, totalAmount: totalAmount, spentAmount: spentAmountResponse.data.spentAmount };
              } catch (error) {
                console.error(`Error fetching payments for user ${user._id}:`, error);
                return { ...user, totalAmount: 0, spentAmount: 0 }; // Handle errors gracefully
              }
            })
          );

          setUsers(usersWithTotals);

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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">User Payment List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                User ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Role
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Total Amount
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Spent Amount
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Current Balance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map(user => {
              const currentBalance = user.totalAmount - user.spentAmount;
              return (
                <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
                    {user._id && user._id.substring(0, 4)}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
                    {user.role}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
                    ${user.totalAmount}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
                    ${user.spentAmount}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
                    ${currentBalance.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentList;