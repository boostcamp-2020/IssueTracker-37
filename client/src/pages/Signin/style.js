import styled from 'styled-components';

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const AppTitle = styled.h2``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px gray;
`;

export const Label = styled.label`
  font-weight: bold;
  padding: 5px;
`;

export const StyledInput = styled.input`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid black;
`;

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

export const AuthButton = styled.button`
  border: none;
  background-color: white;
  font-weight: bold;
  color: blue;
  cursor: pointer;
`;

export const GithubLoginButton = styled.img`
  height: 40px;
  cursor: pointer;
`;
