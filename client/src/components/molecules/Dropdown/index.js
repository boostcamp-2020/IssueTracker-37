import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import DropdownTitle from '@atoms/DropdownTitle';
import DropdownItem from '@atoms/DropdownItem';
import { StyledDropdown } from './style';

const Dropdown = (props) => {
  const { className, title, items } = props;

  return (
    <StyledDropdown className={cn(className)}>
      <DropdownTitle>{title}</DropdownTitle>
      {items.map((item) => {
        return <DropdownItem key={item.toString()}>{item}</DropdownItem>;
      })}
    </StyledDropdown>
  );
};

Dropdown.defaultProps = {
  items: [''],
};

Dropdown.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array,
};

export default Dropdown;
