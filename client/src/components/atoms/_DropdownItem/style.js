import styled from 'styled-components';

export const StyledDropdownItem = styled.div`
  display: flex;
  padding: 7px 10px;
  border-top: 1px solid black;
  background-color: white;
  z-index: 1;
`;

export const StyledDropdownItemImage = styled.div`
  & > span.label,
  & > img {
    display: block;
    background-color: red;
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
`;

export const StyledDropdownItemContent = styled.div``;

export const StyledDropdownItemTitle = styled.div``;

export const StyledDropdownItemDescription = styled.div``;
