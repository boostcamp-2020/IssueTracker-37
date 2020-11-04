import styled from 'styled-components';

const checkboxSet = {
  DEFAULT: `
  `,
};

export const StyledCheckbox = styled.input`
  ${({ checkboxType = 'DEFAULT' }) => checkboxSet[checkboxType]};
`;
