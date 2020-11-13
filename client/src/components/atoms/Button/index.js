import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { StyledButton } from './style';

const Button = (props) => {
  const {
    afterContent,
    children,
    onClick,
    buttonType,
    className,
    isActived,
  } = props;

  return (
    <StyledButton
      buttonType={buttonType}
      afterContent={afterContent}
      onClick={onClick}
      className={cn(className)}
      isActived={isActived}
      disabled={isActived ? false : 'disabled'}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  onClick: () => {},
  isActived: true,
};

Button.propTypes = {
  afterContent: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.string,
  buttonType: PropTypes.string,
  className: PropTypes.string,
  isActived: PropTypes.bool,
};

export default Button;
