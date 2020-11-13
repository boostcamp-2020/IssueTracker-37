import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import request from '@lib/axios';
import { setToLocalStorage } from '@hooks/useUser';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const GitHubCallbackPage = () => {
  const history = useHistory();
  const query = useQuery();
  const authorizationCode = query.get('code');
  const serverGitHubCallbackUrl = '/user/github/callback';

  useEffect(() => {
    (async () => {
      const {
        data: {
          data: { token, user },
        },
      } = await request.get({
        uri: `${serverGitHubCallbackUrl}?code=${authorizationCode}`,
      });

      localStorage.setItem('authorization', token);
      setToLocalStorage(user);
      history.push('/');
    })();
  }, []);

  return <></>;
};

export default GitHubCallbackPage;
