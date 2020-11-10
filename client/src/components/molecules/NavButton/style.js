import styled from 'styled-components';

export const StyledNavButton = styled.div`
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  width: fit-content;
  .label {
    border-right: 1px solid #e1e4e8;
  }
  .selected {
    background-color: #0366d6;
  }

  .selected:hover {
    background-color: #0366d6;
  }

  .selected path {
    fill: white;
  }

  .selected > span {
    color: white;
  }
`;
