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
  }
`;
