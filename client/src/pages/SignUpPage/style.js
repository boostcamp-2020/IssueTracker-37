import styled from 'styled-components';

export const FromWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Form = styled.form`
  height: 350px;
  width: 400px;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 1px 1px 1px 1px gray;

  & > input {
    padding: 0 10px;
    box-shadow: 1px 1px 1px 1px gray;
    border-radius: 6px;
    margin-top: 5px;
  }

  & > input.submit-button {
    background-color: #2ea44f;
    color: #ffffff;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
  }
`;

export const Div = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: large;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  height: 20px;
  width: 100%;
`;
