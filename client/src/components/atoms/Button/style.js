import styled, { css } from 'styled-components';

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

const buttonSet = {
  DEFAULT: `
      background-color: #fafbfc;
      color: #24292e;
      border: 1px solid rgba(30, 30, 30, 0.5);
    `,
  GREEN: `
      background-color: #2ea44f;
      color: #ffffff;   
      border: 1px solid rgba(27, 31, 35, 0.15);
    `,
  DISABLED: `
    opacity: 0.5
  `,
};

const sizeSet = {
  DEFAULT: `
    font-size: 14px;
    padding: 5px 16px;
  `,
};

export const StyledButton = styled.button`
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  ${afterOption}
  ${({ buttonType = 'DEFAULT' }) => buttonSet[buttonType]};
  ${({ size = 'DEFAULT' }) => sizeSet[size]}
  ${(props) => (props.isActived ? `opacity: 1` : `opacity: 0.3`)};
`;
