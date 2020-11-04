import React from 'react';
import PropTypes from 'prop-types';

import { StyledTextArea } from './style';

const TextArea = (props) => {
  const { onChange, name, value, placeholder, textAreaType } = props;

  return (
    <StyledTextArea
      name={name}
      value={value}
      placeholder={placeholder}
      textAreaType={textAreaType}
      onChange={onChange}
    />
  );
};

TextArea.defaultProps = {
  onChange: () => { },
};

TextArea.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  textAreaType: PropTypes.string,
};

export default TextArea;
