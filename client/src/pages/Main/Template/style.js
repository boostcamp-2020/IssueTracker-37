import styled from 'styled-components';

export const StyledMainTemplate = styled.div`
  & > main {
    padding: 0 80px;
  }
  & > main > nav {
    margin-top: 40px;
  }

  & > main > section {
    margin-top: 20px;
  }

  & .main-drowdown-menu {
    width: 300px;
    right: -10px;
    margin-top: 30px;
  }
`;
