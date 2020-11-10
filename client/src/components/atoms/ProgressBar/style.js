import styled from 'styled-components';

export const StyledProgressBar = styled.div`
  width: ${(prop) => prop.percent}%;
  height: 10px;
  background-color: #28a745;
  border: 1px solid #28a745;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-radius: ${(prop) => (prop.percent === 100 ? '6px' : '')};
`;

export const StyledProgressBarWrapper = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e1e4e8;
  border-radius: 6px;
  margin-bottom: 10px;
`;
