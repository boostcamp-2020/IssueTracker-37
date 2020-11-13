import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Span from '@atoms/Span';
import SVG from '@atoms/SVG';
import _DropdownItem from '@atoms/_DropdownItem';

import {
  StyledDropdownButton,
  StyledDropdownMenu,
  StyledDropdownHeader,
} from './style';

const typeHandler = (item, dropdownType) => {
  const dropdownItemTitle =
    dropdownType === 'assignee' || dropdownType === 'author'
      ? item.name
      : item.title;
  let dropdownItemDescription = '';

  if (dropdownType === 'label') dropdownItemDescription = item.description;
  if (dropdownType === 'milestone') dropdownItemDescription = item.due_date;

  return [dropdownItemTitle, dropdownItemDescription];
};

const DropdownButton = ({
  title,
  SVGName,
  color,
  dropdownHeader,
  dropdownType,
  spanType,
  onClick,
  items,
  afterContent,
  className,
}) => {
  const [isOpened, setOpened] = useState(false);
  const openDropdown = () => {
    setOpened((pre) => !pre);
  };

  return (
    <StyledDropdownButton
      className={cn(className)}
      onBlur={() => setOpened(false)}
      tabIndex={-1}
    >
      <StyledDropdownHeader className="dropdown-header" onClick={openDropdown}>
        <Span spanType={spanType} color={color} afterContent={afterContent}>
          {title}
        </Span>
        <SVG SVGName={SVGName} color={color}></SVG>
      </StyledDropdownHeader>
      {isOpened && (
        <StyledDropdownMenu className="main-drowdown-menu">
          <Span
            spanType="SMALL"
            fontWeight="bold"
            className="dropdown-menu-header"
          >
            {dropdownHeader}
          </Span>
          <ul>
            {items.map((item) => {
              const [dropdownItemTitle, dropdownItemDescription] = typeHandler(
                item,
                dropdownType,
              );

              return (
                <_DropdownItem
                  key={item.id}
                  src={item.profile}
                  title={dropdownItemTitle}
                  description={dropdownItemDescription}
                  color={item.color}
                  onClick={() => {
                    openDropdown();
                    onClick(dropdownType, dropdownItemTitle);
                  }}
                  dropdownType={dropdownType}
                  isChecked={item.isChecked}
                ></_DropdownItem>
              );
            })}
          </ul>
        </StyledDropdownMenu>
      )}
    </StyledDropdownButton>
  );
};

DropdownButton.defaultProps = {
  color: 'GRAY',
  spanType: 'LARGE',
};

DropdownButton.propTypes = {
  title: PropTypes.string,
  SVGName: PropTypes.string,
  color: PropTypes.string,
  dropdownHeader: PropTypes.string,
  dropdownType: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
  items: PropTypes.array,
  spanType: PropTypes.string,
  afterContent: PropTypes.string,
  className: PropTypes.string,
};

export default DropdownButton;
