import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppTitle = styled.h2``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px gray;
`;

const Label = styled.label`
  font-weight: bold;
  padding: 5px;
`;

const StyledInput = styled.input`
  padding: 5px;
  border-radius: 4px;
`;

const AuthWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const AuthButton = styled.button`
  border: none;
  background-color: white;
  font-weight: bold;
  color: blue;
  cursor: pointer;
`;

const initialInputs = {
  email: '',
  password: '',
};

const SignInPage = () => {
  const [inputs, setInputs] = useState(initialInputs);
  const { email, password } = inputs;

  const onChangeInput = useCallback(
    (e) => {
      const { name, value } = e.target;

      setInputs({ ...inputs, [name]: value });
    },
    [email, password],
  );

  return (
    <SignInWrapper>
      <AppTitle>이슈 트래커</AppTitle>
      <Form>
        <Label>아이디</Label>
        <StyledInput
          name="email"
          type="text"
          value={email}
          required
          onChange={onChangeInput}
        />
        <Label>비밀번호</Label>
        <StyledInput
          name="password"
          type="password"
          value={password}
          required
          onChange={onChangeInput}
        />
        <AuthWrapper>
          <AuthButton>로그인</AuthButton>
          <AuthButton>회원가입</AuthButton>
        </AuthWrapper>
      </Form>
    </SignInWrapper>
  );
};

export default SignInPage;
