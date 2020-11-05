import styled from 'styled-components';

export const StyledIssueItem = styled.div`
  display: flex;
  width: 100%;
  height: 62px;
  border: 1px solid #f6f8fa;
  padding: 10px;

  &:hover {
    background-color: #f6f8fa;
  }

  & > input {
    display: block;
    margin-top: 4px;
    margin-left: 16px;
    -webkit-appearance: checkbox;
  }

  & > img {
    display: block;
    margin-top: 4px;
    margin-left: 16px;
    margin-right: 3px;
  }
`;

export const StyledIssueItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 20 0 0;
  margin-left: 10px;
`;

export const StyledIssueFooter = styled.div`
  display: flex;
  align-items: center;
  flex: 12 0 0;

  & > span {
    margin-right: 5px;
  }
`;

export const StyledIssueImageContent = styled.div`
  display: flex;
  flex: 4 0 0;
`;

export const StyledAssgineeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;

  & > img {
    border-radius: 50%;
    margin-right: 3px;
  }
`;

export const StyledSortContainer = styled.div`
  flex: 1 0 0;
`;

export const StyledIssueTitle = styled.div`
  margin-bottom: 5px;

  & > span:nth-child(1) {
    font-weight: 500;
    margin-right: 5px;
  }

  & > span.issue-item-title:hover {
    color: #0366d6;
  }
`;
