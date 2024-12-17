const tokenManager = {
    setTokens: (accessToken, refreshToken) => {
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    },
    getAccessToken: () => localStorage.getItem("authToken"),
    getRefreshToken: () => localStorage.getItem("refreshToken"),
    clearTokens: () => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
    },
  };
  
  export { tokenManager };
  