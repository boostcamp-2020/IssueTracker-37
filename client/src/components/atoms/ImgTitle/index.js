import React from 'react';
import PropTypes from 'prop-types';

import Img from '@atoms/Img';
import Span from '@atoms/Span';

import { StyledImgTitle } from './style';

const ImgTitle = (props) => {
  const { src, alt, children, styleType } = props;

  return (
    <StyledImgTitle className={styleType}>
      <Img src={src} alt={alt}></Img>
      <Span>{children}</Span>
    </StyledImgTitle>
  );
};

ImgTitle.defaultProps = {};

ImgTitle.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.string,
  styleType: PropTypes.string,
};

export default ImgTitle;
