import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { StyledDropdownTitle } from './style';

const DropdownTitle = (props) => {
  const { children, className } = props;

  return (
    <StyledDropdownTitle className={cn(className)}>
      {children}
    </StyledDropdownTitle>
  );
};

DropdownTitle.defaultProps = {};

DropdownTitle.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  key: PropTypes.string,
};

export default DropdownTitle;
