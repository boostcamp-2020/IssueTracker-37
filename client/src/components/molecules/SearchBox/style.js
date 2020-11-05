import styled from 'styled-components';

export const StyledSearchBox = styled.div`
  position: relative;
  border: 1px solid #e1e4e8;
  border-radius: 5px;
  & > button.searchbox {
    border: none;
    border-radius: 0;
    border-left-top-radius: 5px;
    border-left-bottom-radius: 5px;
    border-right: 1px solid rgba(27, 31, 35, 0.15);
    height: 100%;
  }

  & > input.searchbox {
    padding: 5px 12px 5px 32px;
    border: none;
    border-rigth-top: 5px;
    border-rigth-bottom: 5px;
  }
`;
