// LoginContext.js
import React, { useState } from 'react';
import { userDb } from "../Services/User"


const LoginContext = React.createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName,setUserName] = useState('')


  const updateUserName = (value) => {
    setUserName(value);
  };


  // Função para efetuar o login
  const login = async (userprops) => {
    // Lógica para autenticar o usuário
    if(await userDb.LoginUser(userprops.nome,userprops.senha)){
        setLoggedIn(true);
        return true
    }else{
        return false
    }
    
  };

  // Função para efetuar o logout
  const logout = () => {
    // Lógica para deslogar o usuário
    setLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout,userName,updateUserName }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
