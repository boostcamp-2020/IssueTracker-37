import styled from 'styled-components';

const checkboxSet = {
  DEFAULT: `
  `,
};

export const StyledCheckBox = styled.input`
  ${({ checkboxType = 'DEFAULT' }) => checkboxSet[checkboxType]};
`;
