import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { StyledInput } from './style';

const Input = (props) => {
  const {
    type,
    value,
    name,
    placeholder,
    id,
    onChange,
    className,
    onKeyPress,
    refInput,
  } = props;

  return (
    <StyledInput
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      id={id}
      ref={refInput}
      onChange={onChange}
      onKeyPress={onKeyPress}
      className={cn(className)}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  onChange: () => { },
};

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  onKeyPress: PropTypes.func,
  refInput: PropTypes.any,
};

export default Input;
