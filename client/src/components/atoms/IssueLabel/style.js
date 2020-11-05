import styled from 'styled-components';

export const StyledIssueLabel = styled.span`
  padding: 3px 10px;
  font-weight: bold;
  background-color: ${(props) => props.labelColor};
  color: ${(props) => props.fontColor};
  border-radius: 15px;
`;
