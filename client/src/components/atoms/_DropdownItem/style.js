import styled from 'styled-components';

export const StyledDropdownItem = styled.div`
  display: flex;
  padding: 7px 10px;
  border-top: 1px solid rgb(204 197 197);
  background-color: white;
  z-index: 1;
`;

export const StyledDropdownItemImage = styled.div`
  & > span.label {
    display: block;
    width: 14px;
    height: 14px;
    background-color: ${(props) => props.color};
    margin-right: 10px;
  }

  & > img {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
`;

export const StyledCheckMarkWrapper = styled.div`
  width: 20px;
`;

export const StyledDropdownItemContent = styled.div``;

export const StyledDropdownItemTitle = styled.div``;

export const StyledDropdownItemDescription = styled.div``;
