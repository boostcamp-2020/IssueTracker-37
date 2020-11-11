const { default: styled } = require('styled-components');

export const StyledDetailIssueHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
  padding-bottom: 25px;
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
  }
  .close {
    background-color: red;
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
