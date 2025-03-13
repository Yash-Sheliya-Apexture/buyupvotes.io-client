// services/paymentService.js
import axios from 'axios';
import TokenService from '../utils/TokenService'; // Adjust path as needed

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const fetchPaymentHistory = async (userId = null) => {
    const token = TokenService.getToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    let endpoint = `${API_BASE_URL}/payment/history`; // Default user endpoint
    if (userId) {
        endpoint = `${API_BASE_URL}/admin/users/${userId}/payments`; // Admin endpoint
    }
    try {
        const response = await axios.get(endpoint, config);
        return response.data; // Return the raw data
    } catch (error) {
        console.error("Error fetching payment history:", error);
        throw error; // Re-throw to be caught in the component
    }
};

export { fetchPaymentHistory };