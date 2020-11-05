import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { StyledDropdownItem } from './style';

const DropdownItem = (props) => {
  const { children, onClick, className } = props;

  return (
    <StyledDropdownItem className={cn(className)} onClick={onClick}>
      {children}
    </StyledDropdownItem>
  );
};

DropdownItem.defaultProps = {
  onClick: () => {},
};

DropdownItem.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default DropdownItem;
