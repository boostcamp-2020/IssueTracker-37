import React from 'react';
import PropTypes from 'prop-types';

import Span from '@atoms/Span';
import Img from '@atoms/Img';

import {
  StyledDropdownItem,
  StyledDropdownItemImage,
  StyledDropdownItemContent,
  StyledDropdownItemDescription,
  StyledDropdownItemTitle,
} from './style';

const _DropdownItem = ({ children, onClick, className, dropdownType }) => {
  return (
    <StyledDropdownItem onClick={onClick}>
      <StyledDropdownItemImage>
        {dropdownType === 'assignee' ? (
          <Img src="https://avatars3.githubusercontent.com/u/52775389?s=60&v=4"></Img>
        ) : (
            ''
          )}
        {dropdownType === 'label' ? <Span className="label"></Span> : ''}
      </StyledDropdownItemImage>
      <StyledDropdownItemContent>
        <StyledDropdownItemTitle>mileStion</StyledDropdownItemTitle>
        <StyledDropdownItemDescription>due_data</StyledDropdownItemDescription>
      </StyledDropdownItemContent>
    </StyledDropdownItem>
  );
};

_DropdownItem.defaultProps = {
  onClick: () => { },
};

_DropdownItem.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  dropdownType: PropTypes.string,
};

export default _DropdownItem;
