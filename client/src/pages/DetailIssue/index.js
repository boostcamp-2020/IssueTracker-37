import React, { useEffect } from 'react';
import Header from '@organisms/Header';
import DetailIssueHeader from '@organisms/DetailIssueHeader';
import { StyledDetailIssueWrapper } from './style';

const DetailIssue = () => {
  useEffect(() => {});

  return (
    <>
      <Header></Header>
      <StyledDetailIssueWrapper>
        <DetailIssueHeader></DetailIssueHeader>
      </StyledDetailIssueWrapper>
    </>
  );
};

export default DetailIssue;
