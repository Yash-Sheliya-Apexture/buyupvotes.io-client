// utils/TokenService.js

const TokenService = {
  // Save tokens (both access and refresh)
  setToken: (token) => {
    localStorage.setItem("authToken", token);
  },
  setRefreshToken: (refreshToken) => {
    localStorage.setItem("refreshToken", refreshToken);
  },

  // Get tokens
  getToken: () => {
    return localStorage.getItem("authToken");
  },
  getRefreshToken: () => {
    return localStorage.getItem("refreshToken");
  },

  // Clear tokens
  clearToken: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
  },
};

export default TokenService;


