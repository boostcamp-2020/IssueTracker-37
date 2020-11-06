import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { StyledIssueLabel } from './style';

const getFontColor = (labelColor) => {
  const standardColor = '#888888';
  const [white, black] = ['#ffffff', '#000000'];

  if (standardColor > labelColor) return white;
  if (standardColor < labelColor) return black;
};

const IssueLabel = (props) => {
  const { children, labelColor, className } = props;
  const fontColor = getFontColor(labelColor);

  return (
    <StyledIssueLabel
      labelColor={labelColor}
      fontColor={fontColor}
      className={cn(className)}
    >
      {children}
    </StyledIssueLabel>
  );
};

IssueLabel.defaultProps = {};

IssueLabel.propTypes = {
  children: PropTypes.string,
  labelColor: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default IssueLabel;
