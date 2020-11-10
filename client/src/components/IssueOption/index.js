import React from 'react';
import PropTypes from 'prop-types';

import Span from '@atoms/Span';
import DropdownButton from '@molecules/DropdownButton';

import {
  StyledIssueOption,
  // StyledIssueOptionTop,
  StyledIssueOptionBottom,
} from './style';

const IssueOption = ({ SVGName, color, title, dropdownHeader }) => {
  return (
    <>
      <StyledIssueOption>
        <DropdownButton
          SVGName={SVGName}
          color={color}
          title={title}
          dropdownHeader={dropdownHeader}
        ></DropdownButton>
        <StyledIssueOptionBottom>
          <Span color="GRAY" spanType="SMALL">
            No one-assign yourself
          </Span>
        </StyledIssueOptionBottom>
      </StyledIssueOption>
    </>
  );
};

IssueOption.defaultProps = {};

IssueOption.propTypes = {
  SVGName: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  dropdownHeader: PropTypes.string,
};

export default IssueOption;
