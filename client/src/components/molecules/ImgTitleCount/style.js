import styled from 'styled-components';

export const StyledImgTitleCount = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 5px 16px;

  &:hover {
    background-color: #f6f8fa;
  }

  & > img {
    margin-right: 10px;
  }

  & > span.round {
    margin-left: 10px;
    padding: 0 6px;
    color: #24292e;
    background-color: #d1d5da80;
    border-radius: 50%;
  }
`;
