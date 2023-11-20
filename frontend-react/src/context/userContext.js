import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState('');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ email: '', username: '', password: '' });

  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    const storedUsername = localStorage.getItem('loggedInUsername') || '';
    setLoggedIn(storedLoggedInStatus);
    setLoggedInUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', false);
    localStorage.setItem('loggedInUsername', '');
    setLoggedIn(false);
    setLoggedInUsername('');
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn,
        loggedInUsername,
        setLoggedInUsername,
        loginData,
        setLoginData,
        registerData,
        setRegisterData,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
