// // utils/TokenService.js
// const setToken = (accessToken) => {
//   localStorage.setItem("authToken", accessToken);
// };

// const getToken = () => {
//   return localStorage.getItem("authToken");
// };


// const clearToken = () => {
//   localStorage.removeItem("authToken");
// };

// const isTokenExpired = (token) => {
//     if (!token) return true;
//     try {
//       const payloadBase64 = token.split('.')[1];
//       if (!payloadBase64) return true; // If token does not have a payload
//       const payload = JSON.parse(atob(payloadBase64));
//        if( !payload || typeof payload.exp !== "number"){
//           return true;
//       }
//         const isExpired = payload.exp * 1000 < Date.now(); // Convert to milliseconds
//        return isExpired;
//     } catch (e) {
//       return true;
//     }
// };

// const TokenService = {
//   setToken,
//   getToken,
//   clearToken,
//   isTokenExpired,
// };

// export default TokenService;


// // utils/TokenService.js
// const setToken = (accessToken) => {
//   localStorage.setItem("authToken", accessToken);
// };

// const getToken = () => {
//   return localStorage.getItem("authToken");
// };

// const clearToken = () => {
//   localStorage.removeItem("authToken");
// };

// const isTokenExpired = (token) => {
//     if (!token) return true;
//     try {
//       const payloadBase64 = token.split('.')[1];
//       if (!payloadBase64) return true; // If token does not have a payload
//       const payload = JSON.parse(atob(payloadBase64));
//        if( !payload || typeof payload.exp !== "number"){
//           return true;
//       }
//         const isExpired = payload.exp * 1000 < Date.now(); // Convert to milliseconds
//        return isExpired;
//     } catch (e) {
//       return true;
//     }
// };


// const TokenService = {
//   setToken,
//   getToken,
//   clearToken,
//     isTokenExpired,
// };

// export default TokenService;





















// // utils/TokenService.js
// const setToken = (accessToken) => {
//   localStorage.setItem("authToken", accessToken);
// };

// const getToken = () => {
//   return localStorage.getItem("authToken");
// };

// const clearToken = () => {
//   localStorage.removeItem("authToken");
// };

// const isTokenExpired = (token) => {
//     if (!token) return true;
//     try {
//       const payloadBase64 = token.split('.')[1];
//       if (!payloadBase64) return true; // If token does not have a payload
//       const payload = JSON.parse(atob(payloadBase64));
//        if( !payload || typeof payload.exp !== "number"){
//           return true;
//       }
//         const isExpired = payload.exp * 1000 < Date.now(); // Convert to milliseconds
//        return isExpired;
//     } catch (e) {
//       return true;
//     }
// };


// const TokenService = {
//   setToken,
//   getToken,
//   clearToken,
//     isTokenExpired,
//   removeToken: clearToken  //Add this because you called this function in other components
// };

// export default TokenService;






// utils/TokenService.js  (Modified)
import Cookies from 'js-cookie';

const getToken = () => {
  // Returns the in-memory token, if it exists
  return sessionStorage.getItem('authToken');
};

const setToken = (token) => {
  sessionStorage.setItem('authToken', token);
};

const removeToken = () => {
    sessionStorage.removeItem('authToken');
};


const getRefreshToken = () => {
    return Cookies.get('refreshToken');
};

const setRefreshToken = (token) => {
  Cookies.set('refreshToken', token, {
    httpOnly: true,  // Important:  Make it HTTP-only
    secure: true, //only transfer over HTTPS
    sameSite: 'None',
    expires: 7 // Expiry time of 7 days
  });
};

const removeRefreshToken = () => {
    Cookies.remove('refreshToken');
};

const TokenService = {
    getToken,
    setToken,
    removeToken,
    getRefreshToken,
    setRefreshToken,
    removeRefreshToken,
};

export default TokenService;
