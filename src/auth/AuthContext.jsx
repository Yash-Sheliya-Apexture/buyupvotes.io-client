import React, { createContext, useState, useEffect } from "react";
import { tokenManager } from "../utils/tokenManager";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    tokenManager.setTokens(userData.accessToken, userData.refreshToken);
  };

  const logout = () => {
    tokenManager.clearTokens();
    setUser(null);
  };

  useEffect(() => {
    const accessToken = tokenManager.getAccessToken();
    if (accessToken) {
      setUser({ accessToken }); // Or fetch user info if needed
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
