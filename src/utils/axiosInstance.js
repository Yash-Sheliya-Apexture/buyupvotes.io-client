// axiosInstance.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Add an interceptor to include the token in every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken"); // Retrieve token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;