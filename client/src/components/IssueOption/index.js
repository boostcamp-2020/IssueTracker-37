import React from 'react';

import Span from '@atoms/Span';
import SVG from '@atoms/SVG';

import {
  StyledIssueOption,
  StyledIssueOptionTop,
  StyledIssueOptionBottom,
} from './style';

const IssueOption = () => {
  return (
    <>
      <StyledIssueOption>
        <StyledIssueOptionTop>
          <Span>Assignees</Span>
          <SVG SVGName="SETTING" color="gray"></SVG>
        </StyledIssueOptionTop>
        <StyledIssueOptionBottom>
          <Span color="GRAY" spanType="SMALL">
            No one-assign yourself
          </Span>
        </StyledIssueOptionBottom>
      </StyledIssueOption>
    </>
  );
};

export default IssueOption;
