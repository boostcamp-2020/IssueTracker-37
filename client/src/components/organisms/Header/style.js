import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 62px;
  background-color: #24292e;

  & > button {
    position: absolute;
    right: 30px;
  }
`;
