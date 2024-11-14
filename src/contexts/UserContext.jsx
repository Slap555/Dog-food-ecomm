import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getItem, setItem, removeItem } from "../utils/localStorageHandler";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const handleToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
      setToken(token);
    } catch (error) {
      console.error("Failed to decode token", error);
      setUser(null);
      setToken(null);
    }
  };

  useEffect(() => {
    const storedToken = getItem("token");

    if (storedToken) {
      handleToken(storedToken);
    }
  }, []);

  const handleSetUser = (token) => {
    if (token) {
      setItem("token", token);
      handleToken(token);
    } else {
      removeItem("token");
      setUser(null);
      setToken(null);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser: handleSetUser, token }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
