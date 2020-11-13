import styled from 'styled-components';

export const StyledLabelItem = styled.div`
  display: flex;
  width: 100%;
  flex: 20 0 0;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  height: 62px;

  & > .item-label {
    flex: 6 0 0;
  }

  & > .item-description {
    flex: 12 0 0;
  }

  & > .item-buttons {
    margin-left: auto;
    text-align: right;
    flex: 2 0 0;
  }

  .item-buttons > span {
    margin-left: 10px;
    cursor: pointer;
  }
`;
