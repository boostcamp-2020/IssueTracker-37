import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 62px;
  background-color: #24292e;

  & > span {
    cursor: pointer;
  }

  & > svg {
    margin-right: 10px;
  }

  & > button {
    position: absolute;
    right: 30px;
  }

  & > div:hover {
    background-color: #24292e;
  }
`;
