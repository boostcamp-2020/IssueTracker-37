import React from 'react';
import { useHistory } from 'react-router-dom';

import ImgTitle from '@atoms/ImgTitle';
import Button from '@atoms/Button';
import { StyledHeader } from './style';

const Header = () => {
  const history = useHistory();

  return (
    <>
      <StyledHeader>
        <ImgTitle
          styleType="header"
          src="https://avatars3.githubusercontent.com/u/52775389?s=60&v=4"
          alt="프로필 기본 이미지"
        >
          ISSUE
        </ImgTitle>
        <Button onClick={() => history.push('/signin')}>로그아웃</Button>
      </StyledHeader>
    </>
  );
};

export default Header;
