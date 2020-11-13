import React from 'react';
import Span from '@atoms/Span';
import { StyledLoading, StyledLoadingWrapper, Spinner } from './style';

const Loding = () => {
  return (
    <StyledLoadingWrapper>
      <StyledLoading>
        <Spinner></Spinner>
      </StyledLoading>
      <Span spanType="LARGE">데이터를 준비중 입니다.</Span>
    </StyledLoadingWrapper>
  );
};

export default Loding;
