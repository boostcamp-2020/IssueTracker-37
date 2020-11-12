const { default: styled } = require('styled-components');

export const StyledDetailIssueHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
  padding-bottom: 25px;
  margin-bottom: 20px;
`;

export const DetailIssueHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;

  & > button {
    height: 30px;
  }
`;

export const DetailIssueHeaderBottom = styled.div`
  margin-top: 10px;

  & > span {
    margin-left: 10px;
  }

  .open {
    background-color: green;
    border-radius: 6px;
  }
  .close {
    background-color: red;
    border-radius: 6px;
  }
`;

export const DetailIssueTitleWrapper = styled.div`
  & > Span {
    font-weight: bold;
    font-size: 30px;
  }

  .title-tag {
    margin-left: 10px;
  }
`;

export const StyledIssueEditForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledIssueEditButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 2 0 0;
  margin-right: 10px;

  & > button {
    margin-right: 10px;
  }
`;

export const StyledIssueEditInputWrapper = styled.div`
  flex: 8 0 0;
  width: 100%;

  & > input {
    width: 100%;
    padding: 5px 12px;
    background-color: #fff;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    outline: none;
    box-shadow: rgba(225, 228, 232, 0.2);
  }
`;
