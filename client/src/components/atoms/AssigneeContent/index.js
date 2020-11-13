import React from 'react';
import PropTypes from 'prop-types';

import Img from '@atoms/Img';
import Span from '@atoms/Span';
import { StyledAssigneeContent, StyledContentWrapper } from './style';

const AssigneeContent = ({ checkList }) => {
  return (
    <StyledAssigneeContent>
      {checkList?.map((list) => (
        <StyledContentWrapper key={list.id}>
          <Img src={list.profile}></Img>
          <Span>{list.name}</Span>
        </StyledContentWrapper>
      ))}
    </StyledAssigneeContent>
  );
};

AssigneeContent.defaultProps = {};

AssigneeContent.propTypes = {
  checkList: PropTypes.array,
};

export default AssigneeContent;
