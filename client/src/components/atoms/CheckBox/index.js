import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckBox } from './style';

const CheckBox = (props) => {
  const { checkboxType, value, isChecked, name, onChange } = props;

  return (
    <StyledCheckBox
      name={name}
      value={value}
      type="checkbox"
      checkboxType={checkboxType}
      checked={isChecked}
      onChange={onChange}
    />
  );
};

CheckBox.defaultProps = {};

CheckBox.propTypes = {
  checkboxType: PropTypes.string,
  value: PropTypes.number,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default CheckBox;
