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



// utils/TokenService.js
const setToken = (accessToken) => {
  localStorage.setItem("authToken", accessToken);
};

const getToken = () => {
  return localStorage.getItem("authToken");
};

const clearToken = () => {
  localStorage.removeItem("authToken");
};

const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const payloadBase64 = token.split('.')[1];
      if (!payloadBase64) return true; // If token does not have a payload
      const payload = JSON.parse(atob(payloadBase64));
       if( !payload || typeof payload.exp !== "number"){
          return true;
      }
        const isExpired = payload.exp * 1000 < Date.now(); // Convert to milliseconds
       return isExpired;
    } catch (e) {
      return true;
    }
};


const TokenService = {
  setToken,
  getToken,
  clearToken,
    isTokenExpired,
  removeToken: clearToken  //Add this because you called this function in other components
};

export default TokenService;