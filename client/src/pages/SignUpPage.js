import request from '@lib/axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Form = styled.form`
  height: 350px;
  width: 400px;
  border: solid 2px;
  border-radius: 12px;
  padding: 20px;
`;
const Div = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: large;
`;
const Input = styled.input`
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
`;
const Label = styled.label`
  height: 20px;
  width: 100%;
`;

const InitialInputs = {
  email: '',
  password: '',
  name: '',
};

const SignUpPage = () => {
  const history = useHistory();

  const [inputs, setInputs] = useState(InitialInputs);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const payload = {
      email: inputs.email,
      password: inputs.password,
      name: inputs.name,
    };

    const data = await request.post({ uri: '/user/signup', data: payload });

    if (data) history.push('/signin');
    else {
      alert('회원가입 실패');
      history.push('/signup');
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setInputs({ ...inputs, [name]: value });
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Div>회원가입</Div>
      <Label htmlfor="email">이메일</Label>
      <Input
        id="email"
        type="email"
        placeholder="이메일"
        name="email"
        value={inputs.email}
        onChange={onChangeHandler}
        required
      />
      <Label htmlfor="password">비밀번호</Label>
      <Input
        id="password"
        type="password"
        placeholder="비밀번호"
        name="password"
        value={inputs.password}
        onChange={onChangeHandler}
        required
      />
      <Label htmlfor="name">이름</Label>
      <Input
        id="name"
        type="text"
        placeholder="이름"
        name="name"
        value={inputs.name}
        onChange={onChangeHandler}
        required
      />
      <Input type="submit" value="회원가입" />
    </Form>
  );
};

export default SignUpPage;
