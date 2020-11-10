import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SVG from '@atoms/SVG';
import Span from '@atoms/Span';

import { StyledImgTitleCount } from './style';

const ImgTitleCount = (props) => {
  const {
    children,
    count,
    className,
    onClick,
    SVGName,
    color,
    displayCount,
  } = props;
  const spanType = 'LARGE';

  return (
    <StyledImgTitleCount className={cn(className)} onClick={onClick}>
      <SVG SVGName={SVGName} color={color}></SVG>
      <Span spanType={spanType} color="GRAY">
        {children}
      </Span>
      {displayCount === 'imgTitleCount' && (
        <Span spanType={spanType} className="round">
          {String(count)}
        </Span>
      )}
    </StyledImgTitleCount>
  );
};

ImgTitleCount.defaultProps = {
  onClick: () => { },
  type: 'imgTitleCount',
};

ImgTitleCount.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.string,
  styleType: PropTypes.string,
  count: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  SVGName: PropTypes.string,
  displayCount: PropTypes.string,
};

export default ImgTitleCount;
