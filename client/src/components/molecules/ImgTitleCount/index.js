import React from 'react';
import PropTypes from 'prop-types';

import Img from '@atoms/Img';
import Span from '@atoms/Span';

import { StyledImgTitleCount } from './style';

const ImgTitleCount = (props) => {
  const { src, alt, children, count } = props;
  const spanType = 'LARGE';

  return (
    <StyledImgTitleCount>
      <Img src={src} alt={alt}></Img>
      <Span spanType={spanType} color="GRAY">
        {children}
      </Span>
      <Span spanType={spanType} className="round">
        {count}
      </Span>
    </StyledImgTitleCount>
  );
};

ImgTitleCount.defaultProps = {};

ImgTitleCount.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.string,
  styleType: PropTypes.string,
  count: PropTypes.string,
};

export default ImgTitleCount;
