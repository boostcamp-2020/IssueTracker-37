import styled from 'styled-components';

export const StyledDropdown = styled.div`
  display: flex;
  position: absolute;
  margin-top: 10px;
  flex-direction: column;
  border: solid 1px #e1e4e8;
  border-radius: 4px;
  width: 300px;
  & > div:not(:last-child) {
    border-bottom: 1px solid #e1e4e8;
  }
`;
