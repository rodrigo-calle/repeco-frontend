/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext, useContext } from 'react';
// import PropTypes from "prop-types";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const initialState = 'Login';

  const [completeName, setCompleteName] = useState(initialState);

  const valuesToPass = {
    completeName,
    setCompleteName,
  };

  return (
    <UserContext.Provider value={valuesToPass}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useContext  genera error');
  }
  return context;
};
