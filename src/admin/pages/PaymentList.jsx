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

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PaymentList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//           console.error('Authentication token not found');
//           setError('Authentication token not found');
//           return;
//         }

//         const response = await axios.get(`${API_BASE_URL}/admin/users`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (response.status === 200) {
//           //setUsers(response.data); // Original line - replaced below

//           // Fetch payments and calculate total amount for each user
//           const usersWithTotals = await Promise.all(
//             response.data.map(async user => {
//               try {
//                 const paymentsResponse = await axios.get(
//                   `${API_BASE_URL}/admin/users/${user._id}/payments`,
//                   { headers: { Authorization: `Bearer ${token}` } }
//                 );
//                 const payments = paymentsResponse.data.payments;
//                 const totalAmount = payments.reduce((acc, payment) => acc + payment.amount, 0);
//                 //Calculate the spent amount for each user.
//                 const spentAmountResponse = await axios.get(`${API_BASE_URL}/admin/users/${user._id}`, {
//                   headers: { Authorization: `Bearer ${token}` }
//                 });
//                 return { ...user, totalAmount: totalAmount, spentAmount: spentAmountResponse.data.spentAmount };
//               } catch (error) {
//                 console.error(`Error fetching payments for user ${user._id}:`, error);
//                 return { ...user, totalAmount: 0, spentAmount: 0 }; // Handle errors gracefully
//               }
//             })
//           );

//           setUsers(usersWithTotals);

//         } else {
//           console.error('Failed to fetch users:', response.status);
//           setError(`Failed to fetch users: ${response.status}`);
//         }
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         setError(error.message || 'Failed to fetch users');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, [API_BASE_URL]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-semibold mb-4">User Payment List</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 User ID
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Role
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Total Amount
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Spent Amount
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Current Balance
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {users.map(user => {
//               const currentBalance = user.totalAmount - user.spentAmount;
//               return (
//                 <tr key={user._id} className="hover:bg-gray-50 transition-colors">
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
//                     {user._id && user._id.substring(0, 4)}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
//                     {user.firstName} {user.lastName}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
//                     {user.email}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
//                     {user.role}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
//                     ${user.totalAmount}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
//                     ${user.spentAmount}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
//                     ${currentBalance.toFixed(2)}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PaymentList;

// import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import FilterAndSearch from "../components/FilterAndSearch"; // Import the component
// import Data from '../../assets/Images/nodata.svg'

// const PaymentList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("");

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   const sortOptions = [
//     { value: "admin", label: "Admin" },
//     { value: "user", label: "User" },
//     { value: "AtoZ", label: "A to Z" },
//     { value: "ZtoA", label: "Z to A" },
//   ];

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           console.error("Authentication token not found");
//           setError("Authentication token not found");
//           return;
//         }

//     useEffect(() => {
//         const fetchUsers = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 if (!token) {
//                     console.error('Authentication token not found');
//                     setError('Authentication token not found');
//                     return;
//                 }

//         if (response.status === 200) {
//           //setUsers(response.data); // Original line - replaced below

//           // Fetch payments and calculate total amount for each user
//           const usersWithTotals = await Promise.all(
//             response.data.map(async (user) => {
//               try {
//                 const paymentsResponse = await axios.get(
//                   `${API_BASE_URL}/admin/users/${user._id}/payments`,
//                   { headers: { Authorization: `Bearer ${token}` } }
//                 );
//                 const payments = paymentsResponse.data.payments;
//                 const totalAmount = payments.reduce(
//                   (acc, payment) => acc + payment.amount,
//                   0
//                 );
//                 //Calculate the spent amount for each user.
//                 const spentAmountResponse = await axios.get(
//                   `${API_BASE_URL}/admin/users/${user._id}`,
//                   {
//                     headers: { Authorization: `Bearer ${token}` },
//                   }
//                 );
//                 return {
//                   ...user,
//                   totalAmount: totalAmount,
//                   spentAmount: spentAmountResponse.data.spentAmount,
//                 };
//               } catch (error) {
//                 console.error(
//                   `Error fetching payments for user ${user._id}:`,
//                   error
//                 );
//                 return { ...user, totalAmount: 0, spentAmount: 0 }; // Handle errors gracefully
//               }
//             })
//           );

//           setUsers(usersWithTotals);
//         } else {
//           console.error("Failed to fetch users:", response.status);
//           setError(`Failed to fetch users: ${response.status}`);
//         }
//       } catch (error) {
//         console.error("Error fetching users:", error);
//         setError(error.message || "Failed to fetch users");
//       } finally {
//         setLoading(false);
//       }
//     };

//                     setUsers(usersWithTotals);

//   const handleSearchChange = (term) => {
//     setSearchTerm(term); // Update the state
//   };

//   const handleSortChange = (order, label) => {
//     setSortOrder(order);
//   };

//   const handleResetFilters = () => {
//     setSearchTerm(""); // Clear search term
//     setSortOrder(""); // Clear sort order
//   };

//   const sortedUsers = React.useMemo(() => {
//     //Apply sort to users array
//     let sortUsers = [...users];
//     if (sortOrder === "admin") {
//       sortUsers = sortUsers.filter((user) => user.role === "admin");
//     } else if (sortOrder === "user") {
//       sortUsers = sortUsers.filter((user) => user.role === "user");
//     }

//     const sortFn = (a, b) => {
//       const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
//       const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();

//       if (sortOrder === "AtoZ") {
//         return nameA.localeCompare(nameB);
//       } else if (sortOrder === "ZtoA") {
//         return nameB.localeCompare(nameA);
//       }
//       return 0; // No sorting if no sortOrder is selected
//     };

//     return sortUsers.sort(sortFn);
//   }, [users, sortOrder]);

//   const filteredUsers = React.useMemo(() => {
//     const filterFn = (user) => {
//       const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
//       return (
//         fullName.includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.role.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     };

//     return sortedUsers.filter(filterFn);
//   }, [sortedUsers, searchTerm]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//         fetchUsers();
//     }, [API_BASE_URL, token]);

//   return (
//     <div className="payment-list px-4">
//       <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//         <h1 className="text-2xl font-bold">User Payment List</h1>
//         <FilterAndSearch
//           onSearch={handleSearchChange}
//           onSort={handleSortChange}
//           sortOptions={sortOptions}
//           defaultSortLabel="Sort"
//           onReset={handleResetFilters}
//         />
//       </div>
//       <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-light text-sub-color font-bold">
//             <tr>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 User ID
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Role
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Total Amount
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Spent Amount
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Current Balance
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.length > 0 ? (
//               filteredUsers.map((user) => {
//                 const currentBalance = user.totalAmount - user.spentAmount;
//                 return (
//                   <tr
//                     key={user._id}
//                     className="hover:bg-gray-50 transition-colors"
//                   >
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       {user._id && user._id.substring(0, 4)}
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       {user.firstName} {user.lastName}
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       {user.email}
//                     </td>
//                     <td className="px-4 py-2 whitespace-nowrap text-sm">
//                       <span
//                         className={`inline-flex items-center px-4 py-2 rounded-lg text-xs font-medium ${
//                           user.role === "admin"
//                             ? "bg-red-100 text-red-800"
//                             : "bg-green-100 text-green-800"
//                         }`}
//                       >
//                         {user.role}
//                       </span>
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       ${user.totalAmount}
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       ${user.spentAmount}
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       ${currentBalance.toFixed(2)}
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td
//                   colSpan="7"
//                   className="px-4 py-4 text-center"
//                 >
//                  <div className="flex flex-col">
//                        <img src={Data} alt="No Data" className="h-40" />
//                        <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">No users payment found</p>
//                      </div>
//                 </td>

//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PaymentList;

// import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import FilterAndSearch from "../components/FilterAndSearch"; // Import the component
// import Data from '../../assets/Images/nodata.svg';
// import TokenService from "../../utils/TokenService"; // Import TokenService

// const PaymentList = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [sortOrder, setSortOrder] = useState("");

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const token = TokenService.getToken();  // Get token from TokenService

//     const sortOptions = [
//         { value: "admin", label: "Admin" },
//         { value: "user", label: "User" },
//         { value: "AtoZ", label: "A to Z" },
//         { value: "ZtoA", label: "Z to A" },
//     ];

//     useEffect(() => {
//         const fetchUsers = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 if (!token) {
//                     console.error("Authentication token not found");
//                     setError("Authentication token not found");
//                     return;
//                 }

//                 const response = await axios.get(`${API_BASE_URL}/admin/users`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 if (response.status === 200) {
//                     //setUsers(response.data); // Original line - replaced below

//                     // Fetch payments and calculate total amount for each user
//                     const usersWithTotals = await Promise.all(
//                         response.data.map(async (user) => {
//                             try {
//                                 const paymentsResponse = await axios.get(
//                                     `${API_BASE_URL}/admin/users/${user._id}/payments`,
//                                     { headers: { Authorization: `Bearer ${token}` } }
//                                 );
//                                 const payments = paymentsResponse.data.payments;
//                                 const totalAmount = payments.reduce((acc, payment) => acc + payment.amount, 0);
//                                 //Calculate the spent amount for each user.
//                                 const spentAmountResponse = await axios.get(
//                                     `${API_BASE_URL}/admin/users/${user._id}`,
//                                     {
//                                         headers: { Authorization: `Bearer ${token}` },
//                                     }
//                                 );
//                                 return { ...user, totalAmount: totalAmount, spentAmount: spentAmountResponse.data.spentAmount };
//                             } catch (error) {
//                                 console.error(
//                                     `Error fetching payments for user ${user._id}:`,
//                                     error
//                                 );
//                                 return { ...user, totalAmount: 0, spentAmount: 0 }; // Handle errors gracefully
//                             }
//                         })
//                     );

//                     setUsers(usersWithTotals);
//                 } else {
//                     console.error("Failed to fetch users:", response.status);
//                     setError(`Failed to fetch users: ${response.status}`);
//                 }
//             } catch (error) {
//                 console.error("Error fetching users:", error);
//                 setError(error.message || "Failed to fetch users");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, [API_BASE_URL, token]);

//     const handleSearchChange = (term) => {
//         setSearchTerm(term); // Update the state
//     };

//     const handleSortChange = (order, label) => {
//         setSortOrder(order);
//     };

//     const handleResetFilters = () => {
//         setSearchTerm(""); // Clear search term
//         setSortOrder(""); // Clear sort order
//     };

//     const sortedUsers = useMemo(() => {
//         //Apply sort to users array
//         let sortUsers = [...users];
//         if (sortOrder === "admin") {
//             sortUsers = sortUsers.filter((user) => user.role === "admin");
//         } else if (sortOrder === "user") {
//             sortUsers = sortUsers.filter((user) => user.role === "user");
//         }

//         const sortFn = (a, b) => {
//             const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
//             const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();

//             if (sortOrder === "AtoZ") {
//                 return nameA.localeCompare(nameB);
//             } else if (sortOrder === "ZtoA") {
//                 return nameB.localeCompare(nameA);
//             }
//             return 0; // No sorting if no sortOrder is selected
//         };

//         return sortUsers.sort(sortFn);
//     }, [users, sortOrder]);

//     const filteredUsers = useMemo(() => {
//         const filterFn = (user) => {
//             const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
//             return (
//                 fullName.includes(searchTerm.toLowerCase()) ||
//                 user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 user.role.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//         };

//         return sortedUsers.filter(filterFn);
//     }, [sortedUsers, searchTerm]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="payment-list px-4">
//             <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//                 <h1 className="text-2xl font-bold">User Payment List</h1>
//                 <FilterAndSearch
//                     onSearch={handleSearchChange}
//                     onSort={handleSortChange}
//                     sortOptions={sortOptions}
//                     defaultSortLabel="Sort"
//                     onReset={handleResetFilters}
//                 />
//             </div>
//             <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
//                 <table className="min-w-full bg-white">
//                     <thead className="bg-gray-light text-sub-color font-bold">
//                         <tr>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 User ID
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Name
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Email
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Role
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Total Amount
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Spent Amount
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Current Balance
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredUsers.length > 0 ? (
//                             filteredUsers.map((user) => {
//                                 const currentBalance = user.totalAmount - user.spentAmount;
//                                 return (
//                                     <tr
//                                         key={user._id}
//                                         className="hover:bg-gray-50 transition-colors"
//                                     >
//                                         <td className="px-4 py-3 whitespace-nowrap text-sm">
//                                             {user._id && user._id.substring(0, 4)}
//                                         </td>
//                                         <td className="px-4 py-3 whitespace-nowrap text-sm">
//                                             {user.firstName} {user.lastName}
//                                         </td>
//                                         <td className="px-4 py-3 whitespace-nowrap text-sm">
//                                             {user.email}
//                                         </td>
//                                         <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                             <span
//                                                 className={`inline-flex items-center px-4 py-2 rounded-lg text-xs font-medium ${user.role === "admin"
//                                                     ? "bg-red-100 text-red-800"
//                                                     : "bg-green-100 text-green-800"
//                                                     }`}
//                                             >
//                                                 {user.role}
//                                             </span>
//                                         </td>
//                                         <td className="px-4 py-3 whitespace-nowrap text-sm">
//                                             ${user.totalAmount}
//                                         </td>
//                                         <td className="px-4 py-3 whitespace-nowrap text-sm">
//                                             ${user.spentAmount}
//                                         </td>
//                                         <td className="px-4 py-3 whitespace-nowrap text-sm">
//                                             ${currentBalance.toFixed(2)}
//                                         </td>
//                                     </tr>
//                                 );
//                             })
//                         ) : (
//                             <tr>
//                                 <td
//                                     colSpan="7"
//                                     className="px-4 py-4 text-center"
//                                 >
//                                     <div className="flex flex-col">
//                                         <img src={Data} alt="No Data" className="h-40" />
//                                         <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">No users payment found</p>
//                                     </div>
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default PaymentList;

// import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import FilterAndSearch from "../components/FilterAndSearch"; // Import the component
// import Data from "../../assets/Images/nodata.svg";
// import TokenService from "../../utils/TokenService"; // Import TokenService
// import Pagination from "../components/Pagination"; // Import the Pagination component

// const PaymentList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [rowsPerPage, setRowsPerPage] = useState(12); // Start as 12
//   const [currentPage, setCurrentPage] = useState(1); // Current page number
//   const [sortLabel, setSortLabel] = useState("Sort");

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const token = TokenService.getToken(); // Get token from TokenService

//   const sortOptions = [
//     { value: "admin", label: "Admin" },
//     { value: "user", label: "User" },
//     { value: "AtoZ", label: "A to Z" },
//     { value: "ZtoA", label: "Z to A" },
//     { value: "balanceHighToLow", label: "Balance High to Low" },
//     { value: "balanceLowToHigh", label: "Balance Low to High" },
//   ];

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         if (!token) {
//           console.error("Authentication token not found");
//           setError("Authentication token not found");
//           return;
//         }

//         const response = await axios.get(`${API_BASE_URL}/admin/users`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (response.status === 200) {
//           const usersWithTotals = await Promise.all(
//             response.data.map(async (user) => {
//               try {
//                 const paymentsResponse = await axios.get(
//                   `${API_BASE_URL}/admin/users/${user._id}/payments`,
//                   { headers: { Authorization: `Bearer ${token}` } }
//                 );
//                 const payments = paymentsResponse.data.payments;
//                 const totalAmount = payments.reduce(
//                   (acc, payment) => acc + payment.amount,
//                   0
//                 );
//                 const spentAmountResponse = await axios.get(
//                   `${API_BASE_URL}/admin/users/${user._id}`,
//                   {
//                     headers: { Authorization: `Bearer ${token}` },
//                   }
//                 );
//                 return {
//                   ...user,
//                   totalAmount: totalAmount,
//                   spentAmount: spentAmountResponse.data.spentAmount,
//                 };
//               } catch (error) {
//                 console.error(
//                   `Error fetching payments for user ${user._id}:`,
//                   error
//                 );
//                 return { ...user, totalAmount: 0, spentAmount: 0 };
//               }
//             })
//           );

//           setUsers(usersWithTotals);
//         } else {
//           console.error("Failed to fetch users:", response.status);
//           setError(`Failed to fetch users: ${response.status}`);
//         }
//       } catch (error) {
//         console.error("Error fetching users:", error);
//         setError(error.message || "Failed to fetch users");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, [API_BASE_URL, token]);

//   const handleSearchChange = (term) => {
//     setSearchTerm(term);
//   };

//   const handleSortChange = (order, label) => {
//     setSortOrder(order);
//     setSortLabel(label);
//   };

//   const handleResetFilters = () => {
//     setSearchTerm("");
//     setSortOrder("");
//     setSortLabel("Sort");
//     setRowsPerPage(12);
//     setCurrentPage(1);
//   };

//   const handleRowsPerPageChange = (newRowsPerPage) => {
//     setRowsPerPage(newRowsPerPage);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (pageNumber) => {
//     // <--- Here's the fix
//     setCurrentPage(pageNumber);
//   };

//   const sortedUsers = useMemo(() => {
//     let sortUsers = [...users];

//     if (sortOrder === "admin") {
//       sortUsers = sortUsers.filter((user) => user.role === "admin");
//     } else if (sortOrder === "user") {
//       sortUsers = sortUsers.filter((user) => user.role === "user");
//     } else if (sortOrder === "balanceHighToLow") {
//       sortUsers = sortUsers.sort(
//         (a, b) =>
//           b.totalAmount - b.spentAmount - (a.totalAmount - a.spentAmount)
//       );
//     } else if (sortOrder === "balanceLowToHigh") {
//       sortUsers = sortUsers.sort(
//         (a, b) =>
//           a.totalAmount - a.spentAmount - (b.totalAmount - b.spentAmount)
//       );
//     }

//     const sortFn = (a, b) => {
//       const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
//       const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();

//       if (sortOrder === "AtoZ") {
//         return nameA.localeCompare(nameB);
//       } else if (sortOrder === "ZtoA") {
//         return nameB.localeCompare(nameA);
//       }
//       return 0;
//     };

//     if (sortOrder === "AtoZ" || sortOrder === "ZtoA") {
//       sortUsers = sortUsers.sort(sortFn);
//     }

//     return sortUsers;
//   }, [users, sortOrder]);

//   const filteredUsers = useMemo(() => {
//     const filterFn = (user) => {
//       const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
//       return (
//         fullName.includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.role.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     };

//     return sortedUsers.filter(filterFn);
//   }, [sortedUsers, searchTerm]);

//   const paginatedUsers = useMemo(() => {
//     const itemsPerPage = rowsPerPage || 12;
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     return filteredUsers.length === 0
//       ? []
//       : filteredUsers.slice(startIndex, endIndex);
//   }, [filteredUsers, rowsPerPage, currentPage]);

//   const totalOrders = filteredUsers.length;
//   const noDataFound = filteredUsers.length === 0;

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="payment-list px-4">
//       <div className="mb-4">
//         <h1 className="text-3xl font-bold mb-2">Users List</h1>
//       </div>
//       <div className="mb-4">
//         <FilterAndSearch
//           onSearch={handleSearchChange}
//           onSort={handleSortChange}
//           sortOptions={sortOptions}
//           onReset={handleResetFilters}
//           onRowsPerPageChange={handleRowsPerPageChange}
//         />
//       </div>
//       <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-200 text-sub-color font-bold">
//             <tr>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 User ID
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Role
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Total Amount
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Spent Amount
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Current Balance
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedUsers.length > 0 ? (
//               paginatedUsers.map((user) => {
//                 const currentBalance = user.totalAmount - user.spentAmount;
//                 return (
//                   <tr
//                     key={user._id}
//                     className="hover:bg-gray-50 transition-colors"
//                   >
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       {user._id && user._id.substring(0, 4)}
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       {user.firstName} {user.lastName}
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       {user.email}
//                     </td>
//                     <td className="px-4 py-2 whitespace-nowrap text-sm">
//                       <span
//                         className={`inline-flex justify-center p-1.5 items-center w-14 rounded-lg text-xs font-medium capitalize ${
//                           user.role === "admin"
//                             ? "bg-red-100 text-red-800 font-semibold"
//                             : "bg-green-100 text-green-800 font-semibold"
//                         }`}
//                       >
//                         {user.role}
//                       </span>
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       ${user.totalAmount}
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       ${user.spentAmount}
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       ${currentBalance.toFixed(2)}
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td colSpan="7" className="px-4 py-4 text-center">
//                   <div className="flex flex-col">
//                     <img src={Data} alt="No Data" className="h-40" />
//                     <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">
//                       No users payment found
//                     </p>
//                   </div>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//       {/* Pagination component */}
//       <Pagination
//         ordersPerPage={rowsPerPage || 12} // Use total count when rowsPerPage is null
//         totalOrders={filteredUsers.length} // Pass total number of filtered orders
//         paginate={handlePageChange} // Pass the pagination function  <---- Correct prop name
//         currentPage={currentPage} // Pass the current page
//         noDataFound={noDataFound}
//       />
//     </div>
//   );
// };

// export default PaymentList;

// import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import FilterAndSearch from "../components/FilterAndSearch"; // Import the component
// import Data from "../../assets/Images/nodata.svg";
// import TokenService from "../../utils/TokenService"; // Import TokenService
// import Pagination from "../components/Pagination"; // Import the Pagination component
// import { FaUserShield, FaUser } from "react-icons/fa"; // Import icons for roles

// const PaymentList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [rowsPerPage, setRowsPerPage] = useState(12); // Start as 12
//   const [currentPage, setCurrentPage] = useState(1); // Current page number
//   const [sortLabel, setSortLabel] = useState("Sort");

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const token = TokenService.getToken(); // Get token from TokenService

//   const sortOptions = [
//     { value: "admin", label: "Admin" },
//     { value: "user", label: "User" },
//     { value: "AtoZ", label: "A to Z" },
//     { value: "ZtoA", label: "Z to A" },
//     { value: "balanceHighToLow", label: "Balance High to Low" },
//     { value: "balanceLowToHigh", label: "Balance Low to High" },
//   ];

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         if (!token) {
//           console.error("Authentication token not found");
//           setError("Authentication token not found");
//           return;
//         }

//         const response = await axios.get(`${API_BASE_URL}/admin/users`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (response.status === 200) {
//           const usersWithTotals = await Promise.all(
//             response.data.map(async (user) => {
//               try {
//                 const paymentsResponse = await axios.get(
//                   `${API_BASE_URL}/admin/users/${user._id}/payments`,
//                   { headers: { Authorization: `Bearer ${token}` } }
//                 );
//                 const payments = paymentsResponse.data.payments;
//                 const totalAmount = payments.reduce(
//                   (acc, payment) => acc + payment.amount,
//                   0
//                 );
//                 const spentAmountResponse = await axios.get(
//                   `${API_BASE_URL}/admin/users/${user._id}`,
//                   {
//                     headers: { Authorization: `Bearer ${token}` },
//                   }
//                 );
//                 return {
//                   ...user,
//                   totalAmount: totalAmount,
//                   spentAmount: spentAmountResponse.data.spentAmount,
//                 };
//               } catch (error) {
//                 console.error(
//                   `Error fetching payments for user ${user._id}:`,
//                   error
//                 );
//                 return { ...user, totalAmount: 0, spentAmount: 0 };
//               }
//             })
//           );

//           setUsers(usersWithTotals);
//         } else {
//           console.error("Failed to fetch users:", response.status);
//           setError(`Failed to fetch users: ${response.status}`);
//         }
//       } catch (error) {
//         console.error("Error fetching users:", error);
//         setError(error.message || "Failed to fetch users");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, [API_BASE_URL, token]);

//   const handleSearchChange = (term) => {
//     setSearchTerm(term);
//     setCurrentPage(1); //reset page after search
//   };

//   const handleSortChange = (order, label) => {
//     setSortOrder(order);
//     setSortLabel(label);
//     setCurrentPage(1); // reset page after sort
//   };

//   const handleResetFilters = () => {
//     setSearchTerm("");
//     setSortOrder("");
//     setSortLabel("Sort");
//     setRowsPerPage(12);
//     setCurrentPage(1);
//   };

//   const handleRowsPerPageChange = (newRowsPerPage) => {
//     setRowsPerPage(newRowsPerPage);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const sortedUsers = useMemo(() => {
//     let sortUsers = [...users];

//     if (sortOrder === "admin") {
//       sortUsers = sortUsers.filter((user) => user.role === "admin");
//     } else if (sortOrder === "user") {
//       sortUsers = sortUsers.filter((user) => user.role === "user");
//     } else if (sortOrder === "balanceHighToLow") {
//       sortUsers = sortUsers.sort(
//         (a, b) =>
//           b.totalAmount - b.spentAmount - (a.totalAmount - a.spentAmount)
//       );
//     } else if (sortOrder === "balanceLowToHigh") {
//       sortUsers = sortUsers.sort(
//         (a, b) =>
//           a.totalAmount - a.spentAmount - (b.totalAmount - b.spentAmount)
//       );
//     }

//     const sortFn = (a, b) => {
//       const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
//       const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();

//       if (sortOrder === "AtoZ") {
//         return nameA.localeCompare(nameB);
//       } else if (sortOrder === "ZtoA") {
//         return nameB.localeCompare(nameA);
//       }
//       return 0;
//     };

//     if (sortOrder === "AtoZ" || sortOrder === "ZtoA") {
//       sortUsers = sortUsers.sort(sortFn);
//     }

//     return sortUsers;
//   }, [users, sortOrder]);

//   const filteredUsers = useMemo(() => {
//     const filterFn = (user) => {
//       const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
//       return (
//         fullName.includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.role.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     };

//     return sortedUsers.filter(filterFn);
//   }, [sortedUsers, searchTerm]);

//   const paginatedUsers = useMemo(() => {
//     const itemsPerPage = rowsPerPage || 12;
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     return filteredUsers.length === 0
//       ? []
//       : filteredUsers.slice(startIndex, endIndex);
//   }, [filteredUsers, rowsPerPage, currentPage]);

//   const totalOrders = filteredUsers.length;
//   const noDataFound = filteredUsers.length === 0;

//   const isFilterApplied = searchTerm || sortOrder || rowsPerPage !== 12;

//   if (loading) {
//     return (
//       <div>
//         <div className="py-20 text-center text-gray-400">
//           <div className="flex flex-col items-center">
//             <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="payment-list px-4">
//       <div className="mb-4">
//         <h1 className="text-3xl font-bold mb-2">Users List</h1>
//       </div>

//       {/* Search, Sort, and Reset */}
//       <div className="flex items-center justify-between gap-4 mb-4">
//         <FilterAndSearch
//           searchTerm={searchTerm}
//           sortOrder={sortOrder}
//           sortLabel={sortLabel}
//           rowsPerPage={rowsPerPage}
//           onSearch={handleSearchChange}
//           onSort={handleSortChange}
//           sortOptions={sortOptions}
//           onRowsPerPageChange={handleRowsPerPageChange}
//           showSearch={true} // Show the search input
//           showSort={true} // Show the sorting dropdown
//           showRowsPerPage={true} // Hide the rows per page dropdown
//         />

//         {isFilterApplied && (
//           <button
//             onClick={handleResetFilters}
//             className="py-4 px-6 bg-gray-200 hover:bg-gray-300 rounded-xl text-sm font-bold text-gray-800 border transition-colors duration-300"
//           >
//             Reset
//           </button>
//         )}
//       </div>

//       <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-200 text-sub-color font-bold">
//             <tr>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 User ID
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Role
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Total Amount
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Spent Amount
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Current Balance
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedUsers.length > 0 ? (
//               paginatedUsers.map((user) => {
//                 const currentBalance = user.totalAmount - user.spentAmount;
//                 return (
//                   <tr
//                     key={user._id}
//                     className="hover:bg-gray-50 transition-colors"
//                   >
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       {user._id && user._id.substring(0, 4)}
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       {user.firstName} {user.lastName}
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       {user.email}
//                     </td>
//                     <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
//                       <div className="flex items-center">
//                         {user.role === "admin" ? (
//                           <>
//                             <FaUserShield
//                               size={20}
//                               className="text-red-500 mr-2"
//                             />
//                             <span className="font-semibold text-red-600">
//                               Admin
//                             </span>
//                           </>
//                         ) : (
//                           <>
//                             <FaUser size={16} className="text-green-500 mr-2" />
//                             <span className="font-semibold text-green-600">
//                               User
//                             </span>
//                           </>
//                         )}
//                       </div>
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       ${user.totalAmount}
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       ${user.spentAmount}
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm">
//                       ${currentBalance.toFixed(2)}
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td colSpan="7" className="px-4 py-4 text-center">
//                   <div className="flex flex-col">
//                     <img src={Data} alt="No Data" className="h-40" />
//                     <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">
//                       No users payment found
//                     </p>
//                   </div>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//       {/* Pagination component */}
//       <Pagination
//         ordersPerPage={rowsPerPage || 12} // Use total count when rowsPerPage is null
//         totalOrders={filteredUsers.length} // Pass total number of filtered orders
//         paginate={handlePageChange} // Pass the pagination function
//         currentPage={currentPage} // Pass the current page
//         noDataFound={noDataFound}
//       />
//     </div>
//   );
// };

// export default PaymentList;



import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import FilterAndSearch from "../components/FilterAndSearch";
import Data from "../../assets/Images/nodata.svg";
import TokenService from "../../utils/TokenService";
import Pagination from "../components/Pagination";
import { FaUserShield, FaUser } from "react-icons/fa";

const PaymentList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortLabel, setSortLabel] = useState("Sort");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const token = TokenService.getToken();

  const sortOptions = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
    { value: "AtoZ", label: "A to Z" },
    { value: "ZtoA", label: "Z to A" },
    { value: "balanceHighToLow", label: "Balance High to Low" },
    { value: "balanceLowToHigh", label: "Balance Low to High" },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!token) {
          console.error("Authentication token not found");
          setError("Authentication token not found");
          return;
        }

        const response = await axios.get(`${API_BASE_URL}/admin/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          const usersWithTotals = await Promise.all(
            response.data.map(async (user) => {
              try {
                // Fetch payments
                const paymentsResponse = await axios.get(
                  `${API_BASE_URL}/admin/users/${user._id}/payments`,
                  { headers: { Authorization: `Bearer ${token}` } }
                );
                const payments = paymentsResponse.data.payments;
                const totalAmount = payments.reduce(
                  (acc, payment) => acc + payment.amount,
                  0
                );

                // Fetch orders and calculate spent amount based on order statuses
                const ordersResponse = await axios.get(
                  `${API_BASE_URL}/admin/users/${user._id}/orders`,
                  {
                    headers: { Authorization: `Bearer ${token}` },
                  }
                );
                const orders = ordersResponse.data;
                let spentAmount = 0;
                orders.forEach((order) => {
                  if (order.status !== "Canceled") {
                    spentAmount += order.calculatedPrice;
                  }
                });

                return {
                  ...user,
                  totalAmount: totalAmount,
                  spentAmount: spentAmount,
                };
              } catch (error) {
                console.error(
                  `Error fetching data for user ${user._id}:`,
                  error
                );
                return { ...user, totalAmount: 0, spentAmount: 0 };
              }
            })
          );

          setUsers(usersWithTotals);
        } else {
          console.error("Failed to fetch users:", response.status);
          setError(`Failed to fetch users: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setError(error.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [API_BASE_URL, token]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSortChange = (order, label) => {
    setSortOrder(order);
    setSortLabel(label);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setSortOrder("");
    setSortLabel("Sort");
    setRowsPerPage(12);
    setCurrentPage(1);
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sortedUsers = useMemo(() => {
    let sortUsers = [...users];

    if (sortOrder === "admin") {
      sortUsers = sortUsers.filter((user) => user.role === "admin");
    } else if (sortOrder === "user") {
      sortUsers = sortUsers.filter((user) => user.role === "user");
    } else if (sortOrder === "balanceHighToLow") {
      sortUsers = sortUsers.sort(
        (a, b) =>
          (b.totalAmount - a.spentAmount) - (a.totalAmount - b.spentAmount)
      );
    } else if (sortOrder === "balanceLowToHigh") {
      sortUsers = sortUsers.sort(
        (a, b) =>
          (a.totalAmount - a.spentAmount) - (b.totalAmount - a.spentAmount)
      );
    }

    const sortFn = (a, b) => {
      const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
      const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();

      if (sortOrder === "AtoZ") {
        return nameA.localeCompare(nameB);
      } else if (sortOrder === "ZtoA") {
        return nameB.localeCompare(nameA);
      }
      return 0;
    };

    if (sortOrder === "AtoZ" || sortOrder === "ZtoA") {
      sortUsers = sortUsers.sort(sortFn);
    }

    return sortUsers;
  }, [users, sortOrder]);

  const filteredUsers = useMemo(() => {
    const filterFn = (user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return (
        fullName.includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };

    return sortedUsers.filter(filterFn);
  }, [sortedUsers, searchTerm]);

  const paginatedUsers = useMemo(() => {
    const itemsPerPage = rowsPerPage || 12;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredUsers.length === 0
      ? []
      : filteredUsers.slice(startIndex, endIndex);
  }, [filteredUsers, rowsPerPage, currentPage]);

  const totalOrders = filteredUsers.length;
  const noDataFound = filteredUsers.length === 0;

  const isFilterApplied = searchTerm || sortOrder || rowsPerPage !== 12;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="py-20 text-center text-gray-400">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="payment-list px-4">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2">Users List</h1>
      </div>

      {/* Search, Sort, and Reset */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <FilterAndSearch
          searchTerm={searchTerm}
          sortOrder={sortOrder}
          sortLabel={sortLabel}
          rowsPerPage={rowsPerPage}
          onSearch={handleSearchChange}
          onSort={handleSortChange}
          sortOptions={sortOptions}
          onRowsPerPageChange={handleRowsPerPageChange}
          showSearch={true} // Show the search input
          showSort={true} // Show the sorting dropdown
          showRowsPerPage={true} // Hide the rows per page dropdown
        />

        {isFilterApplied && (
          <button
            onClick={handleResetFilters}
            className="py-4 px-6 bg-gray-200 hover:bg-gray-300 rounded-xl text-sm font-bold text-gray-800 border transition-colors duration-300"
          >
            Reset
          </button>
        )}
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200 text-sub-color font-bold">
            <tr>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                User ID
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Role
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Total Amount
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Spent Amount
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Current Balance
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user) => {
                const currentBalance = user.totalAmount - user.spentAmount;
                return (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      {user._id && user._id.substring(0, 4)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      {user.firstName} {user.lastName}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      {user.email}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
                      <div className="flex items-center">
                        {user.role === "admin" ? (
                          <>
                            <FaUserShield
                              size={20}
                              className="text-red-500 mr-2"
                            />
                            <span className="font-semibold text-red-600">
                              Admin
                            </span>
                          </>
                        ) : (
                          <>
                            <FaUser size={16} className="text-green-500 mr-2" />
                            <span className="font-semibold text-green-600">
                              User
                            </span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      ${user.totalAmount.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      ${user.spentAmount.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      ${currentBalance.toFixed(2)}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <img src={Data} alt="No Data" className="h-40" />
                    <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">
                      No users payment found
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination component */}
      <Pagination
        ordersPerPage={rowsPerPage || 12} // Use total count when rowsPerPage is null
        totalOrders={filteredUsers.length} // Pass total number of filtered orders
        paginate={handlePageChange} // Pass the pagination function
        currentPage={currentPage} // Pass the current page
        noDataFound={noDataFound}
      />
    </div>
  );
};

export default PaymentList;