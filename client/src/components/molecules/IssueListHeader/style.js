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

  .headerBtn {
    border: none;
    flex: 2 0 0;
    height: 100%;
    font-weight: normal;
    color: #606770;
    outline: none;
    padding: 0;
  }

  .empty {
    height: 100%;
    flex: 14 0 0;
  }

  .dropDownButton {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2 0 0;
  }

  .dropdown {
    position: absolute;
    top: 25px;
    right: 10px;
    z-index: 1;
  }

  & > .container .dropDownButtonContainer {
    display: flex;
    flex: 10 0 0;
  }
`;
