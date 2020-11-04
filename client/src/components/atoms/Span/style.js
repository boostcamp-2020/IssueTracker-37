import styled, { css } from 'styled-components';

const hoverOption = css`
  ${(props) =>
    props.hoverColor &&
    css`
      &:hover {
        color: ${props.hoverColor};
      }
    `}
`;

const afterOption = css`
  ${(props) =>
    props.afterContent &&
    css`
      &:after {
        content: '${props.afterContent}';
        margin-left: 5px;
      }
    `}
`;

const spanSet = {
  DEFAULT: `
    font-size: 16px;
  `,
  SMALL: `
    font-size: 14px;
  `,
  LARGE: `
    font-size: 18px;
  `,
};

export const StyledSpan = styled.span`
  color: ${(props) => props.color || 'black'};
  ${afterOption}
  ${hoverOption}
  ${({ spanType = 'DEFAULT' }) => spanSet[spanType]};
`;
