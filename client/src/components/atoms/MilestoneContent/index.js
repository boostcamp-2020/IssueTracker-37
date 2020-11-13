import React from 'react';
import PropTypes from 'prop-types';

import Span from '@atoms/Span';
import ProgressBar from '@atoms/ProgressBar';

import {
  StyledMilestoneContent,
  StyledContentWrapper,
  StyledContentBottom,
} from './style';

const MilestoneContent = ({ checkList, percent }) => {
  return (
    <StyledMilestoneContent>
      {checkList?.map((list) => (
        <StyledContentWrapper key={list?.id}>
          <ProgressBar percent={percent}></ProgressBar>
          <StyledContentBottom>
            <Span spanType="SMALL">{list?.title}</Span>
          </StyledContentBottom>
        </StyledContentWrapper>
      ))}
    </StyledMilestoneContent>
  );
};

MilestoneContent.defaultProps = {};

MilestoneContent.propTypes = {
  checkList: PropTypes.array,
  percent: PropTypes.string,
};

export default MilestoneContent;
