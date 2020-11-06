import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckBox } from './style';

const CheckBox = (props) => {
  const { checkboxType } = props;

  return <StyledCheckBox type="checkbox" checkboxType={checkboxType} />;
};

CheckBox.defaultProps = {};

CheckBox.propTypes = {
  checkboxType: PropTypes.string,
};

export default CheckBox;
