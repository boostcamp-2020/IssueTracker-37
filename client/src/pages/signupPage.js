// import request from '@lib/axios'
import React, { useState } from 'react';
import styled from 'styled-components';


const Form = styled.form`
        height:350px;
        width:400px;
        border: solid 2px;
        border-radius:12px;
        padding:20px
    `;
const Div = styled.div`
        text-align:center;
        font-weight:bold;
        font-size:large;
    `;
const Input = styled.input`
        height:40px;
        width:100%;
        margin-bottom:20px
    `;
const Label = styled.label`
        height:20px;
        width:100%;
    `;


const SignupPage = () => {
    const initialInputs = {
        email:'',
        password:'',
        name:''
    }
    const [Email, setEmail ] = useState('');
    const [Password, setPassword] = useState('');
    const [Name, setName] = useState('');

    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const payload = {
            email : Email,
            password: Password,
            name: event.target.name.value
        }
        // await request.post('api/user/signup', payload);
    };
    
    const onEmailHandler = (event) => {
        setEmail(event.target.value);
    };
    const onPasswordHandler = (event) => {
        setPassword(event.target.value);
    };

    const onNameHandler = (event) => {
        setName(event.target.value);
    };


    return (
            <Form onSubmit={onSubmitHandler}>
                <Div>회원가입</Div>
                <Label>이메일</Label>
                <Input
                    type="email"
                    placeholder="이메일"
                    name="email"
                    value={Email}
                    onChange={ onEmailHandler }
                    required
                />
                <Label>비밀번호</Label>
                <Input
                    type="password"
                    placeholder="비밀번호"
                    name="password"
                    value={Password}
                    onChange ={onPasswordHandler}
                    required
                />
                <Label>이름</Label>
                <Input
                    type="text"
                    placeholder="이름"
                    name="name"
                    value={Name}
                    onChange={onNameHandler}
                    required
                />
                <Input type="submit" value="회원가입" />
        </Form>);
};

export default SignupPage;