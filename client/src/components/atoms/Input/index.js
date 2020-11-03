import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './style';

const Input = (props) => {
  const { type, value, name, placeholder, id, onChange } = props;

  return (
    <StyledInput
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  onChange: () => {},
};

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default Input;
