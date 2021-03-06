import styled from 'styled-components';

export const StyledImgTitle = styled.div`
  display: flex;
  align-items: center;

  &.header {
    & > span {
      margin-left: 5px;
      color: white;
    }
  }

  &.button {
    & > span {
      color: #586069;
      margin-left: 10px;
    }
  }

  &.issue {
    & > span {
      margin-left: 3px;
      font-size: 14px;
      color: gray;
    }
  }
`;
