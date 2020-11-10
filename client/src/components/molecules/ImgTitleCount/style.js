import styled from 'styled-components';

export const StyledImgTitleCount = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 5px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f6f8fa;
  }

  & > SVG {
    margin-right: 10px;
  }

  & > span.round {
    margin-left: 10px;
    padding: 2px 8px;
    background-color: #d1d5da80;
    border-radius: 50%;
    font-size: 14px;
  }
`;
