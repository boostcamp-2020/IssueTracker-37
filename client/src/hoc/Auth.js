import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { isToken } from '@utils/token';

const Auth = (SpecificComponent, option = null, isAdmin) => {
  const AuthenticationCheck = () => {
    const history = useHistory();
    const [isAuthChecked, setAuthChecked] = useState(false);

    useEffect(() => {
      if (isToken() && !option) history.replace('/');
      if (!isToken() && option) history.replace('/signin');
      setAuthChecked(true);
    }, []);

    return isAuthChecked && <SpecificComponent></SpecificComponent>;
  };

  return AuthenticationCheck;
};

export default Auth;
