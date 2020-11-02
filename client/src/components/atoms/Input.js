import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  backgroud-color: #fafbfc;
  border: 1px solid gray;
  outline: none;
  &:focus {
    background-color: #ffffff;
    border-color: #0366d6;
  }
`;

const Input = ({ id, type, value, name, onChange, placeholder }) => {
  const commonProps = {
    type,
    value,
    name,
    placeholder,
    id,
  };

  return <StyledInput {...commonProps} onChange={onChange} />;
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
