import React, { useState } from 'react';

import Span from '@atoms/Span';
import Button from '@atoms/Button';
import Input from '@atoms/Input';
import ImgTitleCount from '@molecules/ImgTitleCount';

import {
  StyledDetailIssueHeader,
  DetailIssueHeaderTop,
  DetailIssueHeaderBottom,
  DetailIssueTitleWrapper,
} from './style';

const DetailIssueHeader = () => {
  return (
    <StyledDetailIssueHeader>
      <DetailIssueHeaderTop>
        {false ? (
          <>
            <Input></Input>
            <Button>Edit</Button>
            <Span>Cancle</Span>
          </>
        ) : (
          <>
            <DetailIssueTitleWrapper>
              <Span>레이블 목록 보기 구현</Span>
              <Span color="gray" className="title-tag">
                #1
              </Span>
            </DetailIssueTitleWrapper>
            <Button>Edit</Button>
          </>
        )}
      </DetailIssueHeaderTop>
      <DetailIssueHeaderBottom>
        <ImgTitleCount
          SVGName={true ? 'OPENED_ISSUE' : 'CLOSED_ISSUE'}
          color="white"
          className={true ? 'open' : 'close'}
        >
          Opened
        </ImgTitleCount>
        <Span color="gray">이슈작성자이름</Span>
        <Span>언제 열렸는지, 닫혔는지 몇개 코멘트 달렸는지</Span>
      </DetailIssueHeaderBottom>
    </StyledDetailIssueHeader>
  );
};

export default DetailIssueHeader;
