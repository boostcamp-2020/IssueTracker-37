import styled from 'styled-components';

const textAreaSet = {
  COMMENT: `
    min-height: 100px;
  `,
  ISSUE: `
    min-height: 200px;
  `,
};

export const StyledTextArea = styled.textarea`
  font-size: 14px;
  rsor: text;t;
  width: 100%;
  height: 100%;
  max-height: 500px;
  padding: 8px;
  resize: vertical;
  background-color: #fafbfc;
  ${({ textAreaType = 'COMMENT' }) => textAreaSet[textAreaType]};

  &:focus {
    background-color: #ffffff;
    border-color: #0366d6;
  }
`;
