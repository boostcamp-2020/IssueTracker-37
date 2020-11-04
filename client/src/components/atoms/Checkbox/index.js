import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckbox } from './style';

const Checkbox = (props) => {
  const { checkboxType } = props;

  return <StyledCheckbox type="checkbox" checkboxType={checkboxType} />;
};

Checkbox.defaultProps = {};

Checkbox.propTypes = {
  checkboxType: PropTypes.string,
};

export default Checkbox;
