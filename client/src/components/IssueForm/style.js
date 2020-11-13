import styled from 'styled-components';

export const StyledIssueForm = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${(props) => props.Layout === 'commentIssue' && 'margin-left: 50px'};
  ${(props) => props.Layout === 'newIssue' && 'margin: 40px 40px 40px 100px;'};
  ${(props) => props.Layout === 'editIssue' && 'margin: 0'};
  padding: 10px;
  border: 1px solid rgb(204 197 197);
  border-radius: 6px;

  & > img {
    position: absolute;
    top: 0;
    left: -55px;
  }

  & > input {
    padding: 10px;
    border-radius: 6px;
    box-shadow: rgba(225, 228, 232, 0.2);
    background: #fafbfc;
  }
`;

export const StyledIssueFormContent = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    cursor: pointer;
    border-top: 1px dotted;
    background: #fafbfc;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    padding: 10px;
  }
`;

export const StyledIssueFormFooter = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.Layout === 'newIssue' ? 'space-between' : 'flex-end'};
  padding: 10px;

  .commentIssue {
    border-radius: 6px;
    background-color: #fafbfc;
    border: 1px solid rgba(27, 31, 35, 0.15);
  }
  & > button {
    margin-left: 3px;
  }
`;

export const StyledTextAreaWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 15px;

  & > textarea {
    height: 250px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    box-shadow: rgba(225, 228, 232, 0.2);
  }

  & > span {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
`;

export const HiddenImageInput = styled.input`
  visibility: hidden;
  height: 0;
`;
