import styled from 'styled-components';

export const StyledDropdownButton = styled.div`
  position: relative;
`;

export const StyledDropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  
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
  border: 1px solid #fafbfc;
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
