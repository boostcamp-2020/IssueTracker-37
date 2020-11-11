import styled from 'styled-components';

export const StyledMilestoneForm = styled.form`
  padding-bottom: 20px;
  & label {
    font-weight: bold;
  }

  & input {
    width: 440px;
    height: 30px;
    padding: 5px;
    border-radius: 6px;
    border-color: #e1e4e8;
  }

  & textarea {
    width: 70%;
    border-radius: 6px;
    border: 1px solid #e1e4e8;
  }
  & hr {
    border-bottom: 1px solid #eaecef;
    margin-bottom: 20px;
  }
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
`;

export const StyledFormActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  & > button {
    white-space: nowrap;
    margin-left: 5px;
    height: 35px;
  }
`;
