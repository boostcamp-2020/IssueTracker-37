import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label``;

const Label = ({ htmlfor, children }) => {
  const commonProps = {
    htmlfor,
  };

  return <StyledLabel {...commonProps}> {children} </StyledLabel>;
};

Label.defaultProps = {
  htmlfor: '',
};

Label.propTypes = {
  htmlfor: PropTypes.string,
  children: PropTypes.string,
};

export default Label;
