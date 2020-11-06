import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { setToken } from '@utils/token';

const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1999 00:00:10 GMT;`;
};

const GitHubCallbackPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = document.cookie.match(/(?<=(tempToken=))()[^; ]*/)[0];

    setToken(token);
    deleteCookie('tempToken');

    history.push('/');
  }, []);

  return <></>;
};

export default GitHubCallbackPage;
