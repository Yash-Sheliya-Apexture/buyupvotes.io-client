import axios from "axios";
import { tokenManager } from "../utils/tokenManager";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Setup Axios Interceptors
const setupInterceptors = (navigate, logout) => {
  API.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401) {
        if (originalRequest.url.includes("/auth/refresh")) {
          logout(); // Call the logout function from AuthContext
          navigate("/signin");
          return Promise.reject(error);
        }

        try {
          const refreshToken = tokenManager.getRefreshToken();
          if (refreshToken) {
            const { data } = await API.post("/auth/refresh", { refreshToken });
            tokenManager.setTokens(data.accessToken, data.refreshToken);
            API.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
            originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
            return API(originalRequest); // Retry the original request
          }
        } catch (refreshError) {
          logout();
          navigate("/signin");
        }
      }

      return Promise.reject(error);
    }
  );
};

export { API, setupInterceptors };
