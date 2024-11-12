import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getItem, setItem, removeItem } from "../utils/localStorageHandler";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [decodedToken, setDecodedToken] = useState(null);

  const decodeToken = (accessToken) => {
    try {
      const decoded = jwtDecode(accessToken);
      setDecodedToken(decoded);
    } catch (error) {
      console.error("Failed to decode token", error);
      setDecodedToken(null);
    }
  };

  useEffect(() => {
    const storedUser = getItem("user");

    if (storedUser) {
      setUser(storedUser);
      decodeToken(storedUser?.accessToken);
    }
  }, []);

  const handleSetUser = (user) => {
    setUser(user);
    if (user) {
      setItem("user", user);
      decodeToken(user.accessToken);
    } else {
      removeItem("user");
      setDecodedToken(null);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser: handleSetUser, decodedToken }}
    >
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
