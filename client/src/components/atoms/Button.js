import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

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

const StyledButton = styled.button`
  border-radius: 6px;
  text-align: center;
  background-color: #2ea44f;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  ${afterOption}
`;

const Button = ({ afterContent, children, onClick }) => {
  const commonProps = {
    afterContent,
  };

  return (
    <StyledButton {...commonProps} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  afterContent: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
};

export default Button;
