import styled from 'styled-components';

export const StyledMilestoneContent = styled.div`
  border: 1px solid #e1e4e8;
  border-radius: 6px;

  & > *:not(:last-child) {
    border-bottom: 1px solid #e1e4e8;
  }

  & .selected {
    background-color: blue;
  }
`;

export const StyledMilestoneHeader = styled.div`
  background-color: #fafbfc;
  height: auto;
  min-height: 40px;
  line-height: 40px;
`;
