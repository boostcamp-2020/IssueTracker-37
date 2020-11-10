import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '@atoms/Button';
import Dropdown from '@molecules/Dropdown';
import { StyledDropdownButton } from './style';

const DropdownButton = (props) => {
  const { className, buttonName, title, items, onClick, isState } = props;

  return (
    <StyledDropdownButton className={cn(className)}>
      <Button className="toggleBtn" onClick={onClick} afterContent="▼">
        {buttonName}
      </Button>
      {isState && (
        <Dropdown className="dropdown" title={title} items={items}></Dropdown>
      )}
    </StyledDropdownButton>
  );
};

DropdownButton.defaultProps = {
  items: [''],
  isState: false,
};

DropdownButton.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array,
  buttonName: PropTypes.string,
  onClick: PropTypes.func,
  isState: PropTypes.bool,
};

export default DropdownButton;
