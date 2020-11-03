import React from 'react';
import PropTypes from 'prop-types';

import { StyledLabel } from './style';

const Label = (props) => {
  const { htmlfor, children } = props;

  return <StyledLabel htmlfor={htmlfor}> {children} </StyledLabel>;
};

Label.defaultProps = {
  htmlfor: '',
};

Label.propTypes = {
  htmlfor: PropTypes.string,
  children: PropTypes.string,
};

export default Label;
