import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Span from '@atoms/Span';
import SVG from '@atoms/SVG';
import _DropdownItem from '@atoms/_DropdownItem';

import {
  StyledDropdownButton,
  StyledDropdownMenu,
  StyledDropdownHeader,
} from './style';

const DropdownButton = ({
  title,
  SVGName,
  color,
  dropdownHeader,
  dropdownType,
  onClick,
  items,
}) => {
  const [isOpened, setOpened] = useState(false);
  const openDropdown = () => {
    setOpened((pre) => !pre);
  };

  return (
    <StyledDropdownButton onBlur={() => setOpened(false)} tabIndex={-1}>
      <StyledDropdownHeader onClick={openDropdown}>
        <Span spanType="LARGE" color="GRAY">
          {title}
        </Span>
        <SVG SVGName={SVGName} color={color}></SVG>
      </StyledDropdownHeader>
      {isOpened && (
        <StyledDropdownMenu>
          <Span
            spanType="SMALL"
            fontWeight="600"
            className="dropdown-menu-header"
          >
            {dropdownHeader}
          </Span>
          <ul>
            {items.map((item) => {
              const dropdownItemTitle =
                dropdownType === 'assignee' ? item.name : item.title;
              let dropdownItemDescription = '';

              if (dropdownType === 'label')
                dropdownItemDescription = item.description;
              if (dropdownType === 'milestone')
                dropdownItemDescription = item.due_date;

              return (
                <_DropdownItem
                  key={item.id}
                  src={item.profile}
                  title={dropdownItemTitle}
                  description={dropdownItemDescription}
                  color={item.color}
                  onClick={() => onClick(item.id)}
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

DropdownButton.defaultProps = {};

DropdownButton.propTypes = {
  title: PropTypes.string,
  SVGName: PropTypes.string,
  color: PropTypes.string,
  dropdownHeader: PropTypes.string,
  dropdownType: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
  items: PropTypes.array,
};

export default DropdownButton;
