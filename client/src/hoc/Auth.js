import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isToken } from '@utils/token';

const Auth = (SpecificComponent, option = null, isAdmin) => {
  const AuthenticationCheck = () => {
    const history = useHistory();

    useEffect(() => {
      if (isToken() || !option) history.push('/');
      if (!isToken() || option) history.push('/signin');
    }, []);

    return <SpecificComponent></SpecificComponent>;
  };

  return AuthenticationCheck;
};

export default Auth;
