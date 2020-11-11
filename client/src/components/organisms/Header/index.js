import React from 'react';
import { useHistory } from 'react-router-dom';

import ImgTitleCount from '@molecules/ImgTitleCount';
import Button from '@atoms/Button';
import { removeToken } from '@utils/token';
import { StyledHeader } from './style';

const Header = () => {
  const history = useHistory();

  const onClickHeader = () => {
    history.push('/');
  };

  const onClickLogout = () => {
    removeToken();
    history.push('/signin');
  };

  return (
    <>
      <StyledHeader>
        <ImgTitleCount
          color="white"
          SVGName="ISSUE"
          onClick={onClickHeader}
          displayCount="none"
        >
          ISSUE
        </ImgTitleCount>
        <Button onClick={onClickLogout}>로그아웃</Button>
      </StyledHeader>
    </>
  );
};

export default Header;
