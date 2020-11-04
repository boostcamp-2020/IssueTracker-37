import React from 'react';
import PropTypes from 'prop-types';

import { StyledImg } from './style';

const Img = (props) => {
  const { src, alt, imgType } = props;

  return <StyledImg src={src} alt={alt} imgType={imgType} />;
};

Img.defaultProps = {};

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  imgType: PropTypes.string,
};

export default Img;
