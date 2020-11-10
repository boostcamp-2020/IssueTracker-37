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

const _DropdownItem = ({
  onClick,
  dropdownType,
  title,
  src,
  description,
  color,
}) => {
  return (
    <StyledDropdownItem onClick={onClick}>
      <StyledDropdownItemImage color={color}>
        {dropdownType === 'assignee' ? <Img src={src}></Img> : ''}
        {dropdownType === 'label' ? <Span className="label"></Span> : ''}
      </StyledDropdownItemImage>
      <StyledDropdownItemContent>
        <StyledDropdownItemTitle>{title}</StyledDropdownItemTitle>
        <StyledDropdownItemDescription>
          <Span spanType="SMALL" color="GRAY">
            {dropdownType === 'label'
              ? description || 'no label description'
              : ''}
            {dropdownType === 'milestone' ? description || 'no due date' : ''}
          </Span>
        </StyledDropdownItemDescription>
      </StyledDropdownItemContent>
    </StyledDropdownItem>
  );
};

_DropdownItem.defaultProps = {
  onClick: () => { },
};

_DropdownItem.propTypes = {
  src: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
  dropdownType: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default _DropdownItem;
