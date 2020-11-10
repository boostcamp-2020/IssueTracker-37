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
}) => {
  const [isOpened, setOpened] = useState(false);
  const openDropdown = () => {
    setOpened((pre) => !pre);
  };
  const test = [1, 2, 3, 4];

  return (
    <StyledDropdownButton>
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
            {test.map((v, i) => (
              <_DropdownItem key={i}></_DropdownItem>
            ))}
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
};

export default DropdownButton;
