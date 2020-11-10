import React from 'react';
import cn from 'classnames';

import PropTypes from 'prop-types';
import NavButton from '@molecules/NavButton';
import Button from '@atoms/Button';

import { StyledSimpleNavbar } from './style';

const SimpleNavBar = ({ className, onClick, buttonName }) => {
  return (
    <StyledSimpleNavbar className={cn(className)}>
      <NavButton className="navBtn" displayCount="none"></NavButton>
      <Button buttonType="GREEN" className="newLabelBtn" onClick={onClick}>
        {buttonName}
      </Button>
    </StyledSimpleNavbar>
  );
};

SimpleNavBar.defaultProps = {
  onClick: () => { },
};
SimpleNavBar.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  buttonName: PropTypes.string,
};

export default SimpleNavBar;
