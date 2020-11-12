import React from 'react';
import PropTypes from 'prop-types';

import Span from '@atoms/Span';
import { StyledSubHeader } from './style';

const SubHeader = (props) => {
  const { title, description } = props;

  return (
    <StyledSubHeader>
      <Span className="title" fontWeight="bold">
        {title}
      </Span>
      <Span className="description">{description}</Span>
    </StyledSubHeader>
  );
};

SubHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SubHeader;
