import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './style';

const Button = (props) => {
  const { afterContent, children, onClick, buttonType } = props;

  return (
    <StyledButton
      buttonType={buttonType}
      afterContent={afterContent}
      onClick={onClick}
    >
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
  type: PropTypes.string,
  buttonType: PropTypes.string,
};

export default Button;
