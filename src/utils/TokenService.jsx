// // utils/TokenService.js

// const TokenService = {
//   // Save tokens (both access and refresh)
//   setToken: (token) => {
//     localStorage.setItem("authToken", token);
//   },
//   setRefreshToken: (refreshToken) => {
//     localStorage.setItem("refreshToken", refreshToken);
//   },

//   // Get tokens
//   getToken: () => {
//     return localStorage.getItem("authToken");
//   },
//   getRefreshToken: () => {
//     return localStorage.getItem("refreshToken");
//   },

//   // Clear tokens
//   clearToken: () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("refreshToken");
//   },
// };

// export default TokenService;




// TokenService.js
const setToken = (accessToken, refreshToken) => {
  localStorage.setItem("authToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

const getToken = () => {
  return localStorage.getItem("authToken");
};

const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

const clearToken = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
};


const isTokenExpired = (token) => {
    if(!token) return true;
    try {
      const payloadBase64 = token.split('.')[1];
        if(!payloadBase64) return true; // If token does not have a payload
      const payload = JSON.parse(atob(payloadBase64));
        if(!payload || typeof payload.exp !== "number") return true;
      const isExpired = payload.exp * 1000 < Date.now(); // Convert to milliseconds
      return isExpired;
    } catch (e) {
      return true;
    }
};

const TokenService = {
  setToken,
  getToken,
  getRefreshToken,
  clearToken,
    isTokenExpired,
};

export default TokenService;