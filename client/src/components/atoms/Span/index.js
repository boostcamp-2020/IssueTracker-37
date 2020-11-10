import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { StyledSpan } from './style';

const Span = (props) => {
  const {
    spanType,
    children,
    onClick,
    hoverColor,
    afterContent,
    color,
    className,
    fontWeight,
  } = props;

  return (
    <StyledSpan
      spanType={spanType}
      onClick={onClick}
      hoverColor={hoverColor}
      afterContent={afterContent}
      color={color}
      fontWeight={fontWeight}
      className={cn(className)}
    >
      {children}
    </StyledSpan>
  );
};

Span.defaultProps = {
  onClick: () => { },
};

Span.propTypes = {
  spanType: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  hoverColor: PropTypes.string,
  afterContent: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default Span;
