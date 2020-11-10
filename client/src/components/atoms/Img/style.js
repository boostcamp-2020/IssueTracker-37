import styled from 'styled-components';

const imgSet = {
  DEFAULT: `
    width: 16px;
    height: 16px;
  `,

  AVATAR_SMALL: `
    width: 20px;
    height: 20px;
    border-radius: 50%;
  `,

  AVARTAR_LARGE: `
    width: 40px;
    height: 40px;
    border-radius: 50%;
  `,
};

export const StyledImg = styled.img`
  ${({ imgType = 'DEFAULT' }) => imgSet[imgType]};
`;
