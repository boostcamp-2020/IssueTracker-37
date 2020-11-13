import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Span from '@atoms/Span';
import Button from '@atoms/Button';
import Input from '@atoms/Input';
import ImgTitleCount from '@molecules/ImgTitleCount';
import { getDateDiff } from '@utils/DateDiff';

import {
  StyledDetailIssueHeader,
  DetailIssueHeaderTop,
  DetailIssueHeaderBottom,
  DetailIssueTitleWrapper,
  StyledIssueEditButtonWrapper,
  StyledIssueEditForm,
  StyledIssueEditInputWrapper,
} from './style';

const DetailIssueHeader = ({
  DetailIssueHeaderProps,
  onClickSave,
  onOpenEdit,
  onCloseEdit,
  onChangeTitle,
}) => {
  return (
    <StyledDetailIssueHeader>
      <DetailIssueHeaderTop>
        {DetailIssueHeaderProps.isEdited ? (
          <StyledIssueEditForm>
            <StyledIssueEditInputWrapper>
              <Input
                {...DetailIssueHeaderProps.titleInputs}
                onChange={onChangeTitle}
              ></Input>
            </StyledIssueEditInputWrapper>
            <StyledIssueEditButtonWrapper>
              <Button
                isActived={DetailIssueHeaderProps.isActived}
                onClick={onClickSave}
              >
                Save
              </Button>
              <Span onClick={onCloseEdit}>Cancle</Span>
            </StyledIssueEditButtonWrapper>
          </StyledIssueEditForm>
        ) : (
            <>
              <DetailIssueTitleWrapper>
                <Span>{DetailIssueHeaderProps.issue.title}</Span>
                <Span color="gray" className="title-tag">
                  #{DetailIssueHeaderProps.issue.id}
                </Span>
              </DetailIssueTitleWrapper>
              <Button onClick={onOpenEdit}>Edit</Button>
            </>
          )}
      </DetailIssueHeaderTop>
      <DetailIssueHeaderBottom>
        <ImgTitleCount
          SVGName={
            DetailIssueHeaderProps.state ? 'OPENED_ISSUE' : 'CLOSED_ISSUE'
          }
          color="white"
          className={DetailIssueHeaderProps.issue.state ? 'open' : 'close'}
        >
          {DetailIssueHeaderProps.issue.state ? 'opened' : 'closed'}
        </ImgTitleCount>
        <Span color="gray">{DetailIssueHeaderProps.issue.User?.name}</Span>
        <Span>
          {DetailIssueHeaderProps.issue.state ? 'opened' : 'closed'} this issue{' '}
          {getDateDiff(DetailIssueHeaderProps.issue.updatedAt)} ·{' '}
          {DetailIssueHeaderProps.issue.Comments?.length || 0} comments
        </Span>
      </DetailIssueHeaderBottom>
    </StyledDetailIssueHeader>
  );
};

DetailIssueHeader.defaultProps = {};

DetailIssueHeader.propTypes = {
  issue: PropTypes.array,
  isEdited: PropTypes.bool,
  onClickSave: PropTypes.func,
  onCloseEdit: PropTypes.func,
  onOpenEdit: PropTypes.func,
  onChangeTitle: PropTypes.func,
  DetailIssueHeaderProps: PropTypes.object,
};

export default DetailIssueHeader;
