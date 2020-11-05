import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { StyledButton } from './style';

const Button = (props) => {
  const { afterContent, children, onClick, buttonType, className } = props;

  return (
    <StyledButton
      buttonType={buttonType}
      afterContent={afterContent}
      onClick={onClick}
      className={cn(className)}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  onClick: () => { },
};

Button.propTypes = {
  afterContent: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.string,
  buttonType: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
