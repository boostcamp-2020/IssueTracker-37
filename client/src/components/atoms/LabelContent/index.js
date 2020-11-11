import React from 'react';
import PropTypes from 'prop-types';

import IssueLabel from '@atoms/IssueLabel';
import { StyledLabelContent, StyledContentWrapper } from './style';

const LabelContent = ({ checkList }) => {
  return (
    <StyledLabelContent>
      {checkList.map((list) => (
        <StyledContentWrapper key={list.id}>
          <IssueLabel labelColor={list.color}>{list.title}</IssueLabel>
        </StyledContentWrapper>
      ))}
    </StyledLabelContent>
  );
};

LabelContent.defaultProps = {};

LabelContent.propTypes = {
  checkList: PropTypes.array,
};

export default LabelContent;
