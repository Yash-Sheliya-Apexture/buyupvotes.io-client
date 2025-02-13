import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentList = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                // const response = await axios.get('/api/payment'); // Adjust API endpoint
                setPayments(response.data);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };

        fetchPayments();
    }, []);

    return (
        <div>
            <h1>Payment List</h1>
            <ul>
                {payments.map(payment => (
                    <li key={payment._id}>Payment ID: {payment._id}, User ID: {payment.userId}, Amount: {payment.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentList;