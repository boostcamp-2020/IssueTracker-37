import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  border: 1px solid blue;
  height: 100%;
  margin-top: 50px;
`;

export const StyledLeftContent = styled.div`
  flex: 7 0 0;
  border: 1px solid green;
`;

export const StyledRightContent = styled.div`
  flex: 3 0 0;
  padding-top: 40px;
  border: 1px solid red;
`;
