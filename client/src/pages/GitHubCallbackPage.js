import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const deleteCookie = (name) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};

const GitHubCallbackPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = document.cookie.match(/(?<=(token=)).*/)[0];

    localStorage.setItem('authorization', token);
    deleteCookie('token');

    history.push('/');
  }, []);

  return <></>;
};

export default GitHubCallbackPage;
