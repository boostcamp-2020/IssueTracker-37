import styled from 'styled-components';

export const StyledIssueListHeader = styled.div`
  display: flex;
  width: 100%;
  background-color: #fafbfc;
  height: 55px;
  border-bottom: 1px solid #e1e4e8;
  float: right;
  padding: 10px;

  & > input {
    display: block;
    margin: auto 0 auto 16px;
    -webkit-appearance: checkbox;
  }
  & > img {
    display: block;
    margin: auto 0 auto 16px;
  }

  .container {
    display: flex;
    flex: 24 0 0;
  }

  .empty {
    height: 100%;
    flex: 14 0 0;
  }

  & > .container .dropDownButtonContainer {
    display: flex;
    flex: 10 0 0;
  }

  & > .container .dropDownButtonContainer .dropDownBtn {
    flex: 2 0 0;
  }
`;
