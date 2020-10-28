export const setToken = (token) => {
  return localStorage.setItem('authorization', token);
};

export const getToken = () => {
  return localStorage.getItem('authorization');
};

export const removeToken = () => {
  return localStorage.removeItem('authorization');
};

export const isToken = () => {
  if (!localStorage.getItem('authorization')) return false;
  return true;
};
