import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { getFontColor } from '@utils/color';
import { StyledIssueLabel } from './style';

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
