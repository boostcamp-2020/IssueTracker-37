import React from 'react';
import { useHistory } from 'react-router-dom';

import Span from '@atoms/Span';
import SVG from '@atoms/SVG';
import Button from '@atoms/Button';
import { removeToken } from '@utils/token';
import { StyledHeader } from './style';

const Header = () => {
  const history = useHistory();

  const onClickLogout = () => {
    removeToken();
    history.push('/signin');
  };

  return (
    <>
      <StyledHeader>
        <SVG SVGName="GITHUB_MARK" color="white"></SVG>
        <Span onClick={() => history.push('/')} spanType="LARGE" color="white">
          Issue Tracker
        </Span>
        <Button onClick={onClickLogout}>로그아웃</Button>
      </StyledHeader>
    </>
  );
};

export default Header;
