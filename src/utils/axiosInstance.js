// import axios from "axios";
// import TokenService from "./TokenService";

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
// });

// // Add request interceptor to include the Authorization header
// axiosInstance.interceptors.request.use((config) => {
//   const token = TokenService.getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Add response interceptor to handle token refresh
// axiosInstance.interceptors.response.use(
//   (response) => response, // Simply return the response if successful
//   async (error) => {
//     const originalRequest = error.config;
//     const status = error.response?.status;

//     // If 401 Unauthorized and this is not a token refresh attempt
//     if (status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true; // Mark this request as retrying

//       try {
//         // Get the refresh token
//         const refreshToken = TokenService.getRefreshToken();

//         if (!refreshToken) {
//           throw new Error("Refresh token not available");
//         }

//         // Call the refresh token endpoint
//         const { data } = await axios.post(
//           `${import.meta.env.VITE_API_BASE_URL}/auth/refresh-token`,
//           { refreshToken } // Send the refresh token
//         );

//         // Update tokens in TokenService
//         TokenService.setToken(data.accessToken);
//         TokenService.setRefreshToken(data.refreshToken);

//         // Retry the original request with the new access token
//         originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         console.error("Error refreshing token:", refreshError);
//         TokenService.clearToken(); // Clear tokens if refresh fails
//         window.location.href = "/signin"; // Redirect to login
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;


import axios from "axios";
import TokenService from "./TokenService";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Add request interceptor to include the Authorization header
axiosInstance.interceptors.request.use((config) => {
  const token = TokenService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  (response) => response, // Simply return the response if successful
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;

    // If 401 Unauthorized and this is not a token refresh attempt
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark this request as retrying

      try {
        // Get the refresh token
        // const refreshToken = TokenService.getRefreshToken();  // Remove this code, the refresh token will be sent in the cookies automatically

        // if (!refreshToken) {
        //   throw new Error("Refresh token not available");
        // }

        // Call the refresh token endpoint
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/auth/refresh-token`,
           // Remove the refresh token from the body, cookie will be sent automatically
        );

        // Update tokens in TokenService
        TokenService.setToken(data.accessToken);
        // TokenService.setRefreshToken(data.refreshToken); Remove this since we are not using localstorage

        // Retry the original request with the new access token
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Error refreshing token:", refreshError);
        TokenService.clearToken(); // Clear tokens if refresh fails
        window.location.href = "/signin"; // Redirect to login
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;



// import axios from "axios";
// import TokenService from "./TokenService";

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
//   timeout: 10000, // Increase timeout to 10 seconds
// });

// // Add request interceptor to include the Authorization header
// axiosInstance.interceptors.request.use((config) => {
//   const token = TokenService.getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Add response interceptor to handle token refresh
// axiosInstance.interceptors.response.use(
//   (response) => response, // Simply return the response if successful
//   async (error) => {
//     const originalRequest = error.config;
//     const status = error.response?.status;

//     // If 401 Unauthorized and this is not a token refresh attempt
//     if (status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true; // Mark this request as retrying

//       try {
//         const refreshToken = TokenService.getRefreshToken();

//         if (!refreshToken) {
//           throw new Error("Refresh token not available");
//         }

//         const { data } = await axios.post(
//           `${import.meta.env.VITE_API_BASE_URL}/auth/refresh-token`,
//           { refreshToken }
//         );

//         TokenService.setToken(data.accessToken);
//         TokenService.setRefreshToken(data.refreshToken);

//         // Retry the original request with the new access token
//         originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         console.error("Error refreshing token:", refreshError);
//         TokenService.clearToken();
//         window.location.href = "/signin";
//         return Promise.reject(refreshError);
//       }
//     }

//     // Handle timeout specifically
//     if (error.code === "ECONNABORTED") {
//       console.error("Request timed out:", error.message);
//       return Promise.reject(new Error("Request timeout. Please try again."));
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
