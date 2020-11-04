import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const deleteCookie = (name) => {
  var date = new Date();
  document.cookie = name + '= ' + '; expires=' + date.toUTCString();
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
