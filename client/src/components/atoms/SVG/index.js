import React from 'react';
import PropTypes from 'prop-types';

import icons from '@img/svgs.js';

const SVG = (props) => {
  const { SVGName, color, size } = props;
  const sizeSet = {
    DEFAULT: '16px',
    SMALL: '20px',
    LARGE: '40px',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      role="img"
      width={sizeSet[size]}
      height={sizeSet[size]}
    >
      <path fillRule="evenodd" fill={color} d={icons[SVGName]}></path>
    </svg>
  );
};

SVG.defaultProps = {
  color: 'black',
  size: 'DEFAULT',
};

SVG.propTypes = {
  color: PropTypes.string,
  SVGType: PropTypes.string,
  SVGName: PropTypes.string,
  size: PropTypes.string,
};

export default SVG;
