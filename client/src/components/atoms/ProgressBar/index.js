import React from 'react';
import PropTypes from 'prop-types';

import { StyledProgressBarWrapper, StyledProgressBar } from './style';

const ProgressBar = ({ percent }) => {
  return (
    <>
      <StyledProgressBarWrapper>
        <StyledProgressBar percent={percent}></StyledProgressBar>
      </StyledProgressBarWrapper>
    </>
  );
};

ProgressBar.defaultProps = {
  percent: '0',
};

ProgressBar.propTypes = {
  percent: PropTypes.string,
};

export default ProgressBar;
