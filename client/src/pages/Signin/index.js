import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GitHubButton from '@img/GitHubButton.png';
import request from '@lib/axios';
import { setToken } from '@utils/token';
import { setToLocalStorage } from '@hooks/useUser';
import SVG from '@atoms/SVG';
import Span from '@atoms/Span';

import {
  AppTitle,
  Form,
  Label,
  AuthButton,
  AuthWrapper,
  SignInWrapper,
  StyledInput,
  GithubLoginButton,
} from './style';

const initialInputs = {
  email: '',
  password: '',
};

const SignInPage = () => {
  const [inputs, setInputs] = useState(initialInputs);
  const { email, password } = inputs;
  const history = useHistory();
  const onChangeInput = useCallback(
    (e) => {
      const { name, value } = e.target;

      setInputs({ ...inputs, [name]: value });
    },
    [email, password],
  );

  const onSummitSignIn = async (e) => {
    e.preventDefault();

    try {
      const {
        data: {
          data: { JWT, user },
        },
      } = await request.post({
        uri: '/user/signin',
        data: { email, password },
      });

      setToken(JWT);
      setToLocalStorage(user);
      history.push('/');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <SignInWrapper>
      <AppTitle>
        <SVG SVGName="GITHUB_MARK" color="black"></SVG>
        <Span spanType="LARGE">Issue Tracker 37</Span>
      </AppTitle>
      <Form onSubmit={onSummitSignIn}>
        <Label htmlFor="email">아이디</Label>
        <StyledInput
          name="email"
          id="email"
          type="text"
          value={email}
          required
          onChange={onChangeInput}
        />
        <Label htmlFor="password">비밀번호</Label>
        <StyledInput
          name="password"
          id="password"
          type="password"
          value={password}
          required
          onChange={onChangeInput}
        />
        <AuthWrapper>
          <AuthButton type="submit">로그인</AuthButton>
          <AuthButton onClick={(e) => history.push('/signup')}>
            회원가입
          </AuthButton>
        </AuthWrapper>
        {/* http://localhost:3000/api/user/github */}
        <GithubLoginButton
          src={GitHubButton}
          onClick={() => {
            window.location.href = 'http://localhost:3000/api/user/github';
          }}
        ></GithubLoginButton>
      </Form>
    </SignInWrapper>
  );
};

export default SignInPage;
