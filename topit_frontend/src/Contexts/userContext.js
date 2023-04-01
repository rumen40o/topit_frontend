import React from "react";

const userContext = React.createContext();

export function useAuth() {
  return React.useContext(userContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState({
    email: "",
  });
  function login({ email }) {
    setCurrentUser({
      email: email,
    });
  }
  const value = {
    currentUser,
    login,
  };
  console.log(currentUser);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}

export { userContext };
