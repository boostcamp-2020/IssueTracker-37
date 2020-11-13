import styled, { keyframes } from 'styled-components';

export const StyledLoadingWrapper = styled.div`
  width: 100%;
  height: 817px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform : rotate(0deg);
  }to {
    transform : rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border: 10px dotted gray;
  border-radius: 50%;
`;

export const StyledLoading = styled.div`
  animation: ${rotate} 2s infinite;
  margin-bottom: 20px;
`;
