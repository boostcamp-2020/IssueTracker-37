import styled from 'styled-components';

export const StyledLabelForm = styled.form`
  padding: 20px;
`;

export const StyledRandomButton = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5319e7;
  border: solid 1px black;
  border-radius: 6px;
  height: 30px;
  width: 30px;
  padding: 4px;
  margin-right: 5px;
  cursor: pointer;
  & > span {
  }
`;

export const StyledItemLabel = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 0 10px;
  .deleteButton {
    cursor: pointer;
  }
  & > span {
    height: 25px;
  }
`;

export const StyledFormContainer = styled.div`
  display: flex;
  align-items: bottom;
  flex: 20;
  height: 63px;

  .label-title-form {
    flex: 3;
  }
  .label-description-form {
    flex: 8;
  }
  .label-color-form {
    flex: 2;
  }

  & input {
    height: 30px;
    padding: 5px;
    border-radius: 6px;
    border-color: #e1e4e8;
  }

  & label {
    font-weight: bold;
  }

  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    label {
      margin-bottom: 10px;
    }
  }

  .label-color-input {
    display: flex;
  }

  .item-buttons {
    flex: 5;
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
    flex-direction: row;
  }

  .item-buttons > button {
    margin-left: 5px;
    height: 35px;
  }
`;
