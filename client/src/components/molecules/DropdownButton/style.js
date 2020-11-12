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
`;

export const StyledDropdownMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: 100%;
  border: 1px solid #959da5;
  border-radius: 6px;
  z-index: 1;

  & > span.dropdown-menu-header {
    display: block;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 8px 10px;
    background-color: white;
    color: #24292e;
  }
`;
