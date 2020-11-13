import React from 'react';
import PropTypes from 'prop-types';

import SVG from '@atoms/SVG';
import Span from '@atoms/Span';

import { StyledNoneDataBox } from './style';

const NoneDataBox = (props) => {
  const { SVGName } = props;
  const COLOR_GRAY = '#a3aab1';

  return (
    <StyledNoneDataBox>
      <SVG SVGName={SVGName} size="LARGE" color={COLOR_GRAY}></SVG>
      <Span spanType="LARGE" fontWeight="bold" color={COLOR_GRAY}>
        No result matched your search.
      </Span>
    </StyledNoneDataBox>
  );
};

NoneDataBox.propTypes = {
  SVGName: PropTypes.string,
};
export default NoneDataBox;
