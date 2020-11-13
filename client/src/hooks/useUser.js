import { useState } from 'react';

export const setToLocalStorage = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
};

export const useUser = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {},
  );

  const setUserFn = (newUser) => {
    setUser(newUser);
    setToLocalStorage(newUser);
  };

  return [user, setUserFn];
};
