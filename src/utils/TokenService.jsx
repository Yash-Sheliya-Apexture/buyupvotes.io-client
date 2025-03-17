// import Cookies from 'js-cookie';

// const getToken = () => {
//     return localStorage.getItem('authToken');
// };

// const setToken = (token) => {
//     localStorage.setItem('authToken', token);
// };

// const removeToken = () => {
//     localStorage.removeItem('authToken');
// };

// const getRefreshToken = () => {
//     return Cookies.get('refreshToken');
// };

// const setRefreshToken = (token) => {
//     Cookies.set('refreshToken', token, {
//         httpOnly: true,
//         secure: true,
//         sameSite: 'None',
//         expires: 7
//     });
// };

// const removeRefreshToken = () => {
//     Cookies.remove('refreshToken');
// };

// const TokenService = {
//     getToken,
//     setToken,
//     removeToken,
//     getRefreshToken,
//     setRefreshToken,
//     removeRefreshToken,
// };

// export default TokenService;



// import Cookies from 'js-cookie';

// const getToken = () => {
//     return localStorage.getItem('authToken');
// };

// const setToken = (token) => {
//     localStorage.setItem('authToken', token);
// };

// const removeToken = () => {
//     localStorage.removeItem('authToken');
// };

// const getRefreshToken = () => {
//     return Cookies.get('refreshToken');
// };

// const setRefreshToken = (token) => {
//     Cookies.set('refreshToken', token, {
//         httpOnly: true,
//         secure: true,
//         sameSite: 'None',
//         expires: 7
//     });
// };

// const removeRefreshToken = () => {
//     Cookies.remove('refreshToken');
// };

// const TokenService = {
//     getToken,
//     setToken,
//     removeToken,
//     getRefreshToken,
//     setRefreshToken,
//     removeRefreshToken,
// };

// export default TokenService;


// TokenService.js
import Cookies from 'js-cookie';

const getToken = () => {
    return localStorage.getItem('authToken');
};

const setToken = (token) => {
    localStorage.setItem('authToken', token);
};

const removeToken = () => {
    localStorage.removeItem('authToken');
};

const getRefreshToken = () => {
    return Cookies.get('refreshToken');
};

const setRefreshToken = (token) => {
    Cookies.set('refreshToken', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        expires: 7
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

// import Cookies from 'js-cookie';

// const getToken = () => {
//     return localStorage.getItem('authToken');
// };

// const setToken = (token) => {
//     localStorage.setItem('authToken', token);
// };

// const removeToken = () => {
//     localStorage.removeItem('authToken');
// };

// const getRefreshToken = () => {
//     return Cookies.get('refreshToken');
// };

// const setRefreshToken = (token) => {
//     Cookies.set('refreshToken', token, {
//         httpOnly: true,
//         secure: true,
//         sameSite: 'None',
//         expires: 7
//     });
// };

// const removeRefreshToken = () => {
//     Cookies.remove('refreshToken');
// };

// const TokenService = {
//     getToken,
//     setToken,
//     removeToken,
//     getRefreshToken,
//     setRefreshToken,
//     removeRefreshToken,
// };

// export default TokenService;