import React, { createContext, useState } from 'react';

const AuthContext = createContext({
  user: null,
  signIn: (userData) => {},
  signOut: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (userData) => {
    // Lógica de autenticação
    setUser(userData);
  };

  const signOut = () => {
    // Lógica de logout
    setUser(null);
  };

  const authContextValues = {
    user,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
