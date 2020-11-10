import styled from 'styled-components';

export const StyledLabelContent = styled.div`
  border: 1px solid #e1e4e8;
  border-radius: 6px;

  & > *:not(:last-child) {
    border-bottom: 1px solid #e1e4e8;
  }
`;

export const StyledLabelListHeader = styled.div`
  background-color: #fafbfc;
  height: 62px;
  line-height: 62px;
  padding: 0 25px;
  font-weight: bold;
`;
