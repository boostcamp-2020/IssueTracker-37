import React from 'react';
import PropTypes from 'prop-types';

import Span from '@atoms/Span';
import DropdownButton from '@molecules/DropdownButton';

import { StyledIssueOption, StyledIssueOptionBottom } from './style';

const IssueOption = ({ IssueOptionProps }) => {
  return (
    <>
      <StyledIssueOption>
        <DropdownButton {...IssueOptionProps}></DropdownButton>
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
  IssueOptionProps: PropTypes.object,
};

export default IssueOption;
