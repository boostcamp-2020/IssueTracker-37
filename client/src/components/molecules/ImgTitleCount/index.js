import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Img from '@atoms/Img';
import Span from '@atoms/Span';

import { StyledImgTitleCount } from './style';

const ImgTitleCount = (props) => {
  const { src, alt, children, count, className, onClick } = props;
  const spanType = 'LARGE';

  return (
    <StyledImgTitleCount className={cn(className)} onClick={onClick}>
      <Img src={src} alt={alt}></Img>
      <Span spanType={spanType} color="GRAY">
        {children}
      </Span>
      <Span spanType={spanType} className="round">
        {String(count)}
      </Span>
    </StyledImgTitleCount>
  );
};

ImgTitleCount.defaultProps = {
  onClick: () => {},
};

ImgTitleCount.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.string,
  styleType: PropTypes.string,
  count: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImgTitleCount;
