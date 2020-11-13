import styled from 'styled-components';

export const StyledDropdownButton = styled.div`
  
  position: relative;
  justify-content: center;
  align-items: center;

  & > .dropdown {
    position: absolute;
    top: 25px;
    right: 10px;
    z-index: 1;
  }

  & > .toggleBtn {
    border: none;
    height: 100%;
    font-weight: normal;
    color: #606770;
    outline: none;
    padding: 0;

`;

export const StyledDropdownHeader = styled.div`
  width: fit-content;
  outline: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  &:hover {
    & > span {
      color: #0366d6;
    }

    & > svg > path {
      fill: #0366d6;
    }
  }

  & svg {
    display: none;
  }
`;

export const StyledDropdownMenu = styled.div`
  position: absolute;
  top: -5px;
  right: 0;
  width: 200px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  z-index: 1;
  box-shadow: 2px 3px 2px lightgray;
  & > span.dropdown-menu-header {
    padding: 8px 30px;
    cursor: unset;
    display: block;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: #fafbfc;
    color: #24292e;
  }
`;
