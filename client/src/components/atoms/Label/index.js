import React from 'react';
import PropTypes from 'prop-types';

import { StyledLabel } from './style';

const Label = (props) => {
  const { htmlFor, children } = props;

  return <StyledLabel htmlFor={htmlFor}> {children} </StyledLabel>;
};

Label.defaultProps = {
  htmlFor: '',
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.any,
};

export default Label;
