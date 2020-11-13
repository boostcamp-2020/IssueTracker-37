import styled from 'styled-components';

export const StyledSearchBox = styled.div`
  display: flex;
  border: 1px solid #e1e4e8;
  border-radius: 5px;

  & > input.searchbox {
    padding: 5px 12px 5px 32px;
    width: 100%;
    border: none;
    border-rigth-top: 5px;
    border-rigth-bottom: 5px;
  }

  & .search-dropdown {
    width: 120px;
    background-color: #fafbfc;
    line-height: 20px;
    padding: 5px 16px;
    border-right: 1px solid #e1e4e8;
    white-space: nowrap;
    cursor: pointer;
  }

  & .search-dropdown div {
    margin-bottom: 0px;
  }

  & .main-drowdown-menu {
    top: 10px;
    left: -20px;
  }
`;
