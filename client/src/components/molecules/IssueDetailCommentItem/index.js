import React from 'react';
import PropTypes from 'prop-types';

import Span from '@atoms/Span';
import Button from '@atoms/Button';
import SVG from '@atoms/SVG';
import Img from '@atoms/Img';
import { getDateDiff } from '@utils/DateDiff';

import {
  StyledItemWrapper,
  StyledItemHeader,
  StyledItemContent,
  StyledHeaderRight,
  StyledHeaderLeft,
  StyledItem,
} from './style';

const IssueDetailCommentItem = ({ issue, comment, user }) => {
  let renderComponent = '';

  if (!issue) {
    renderComponent =
      user.id === issue.id ? (
        <>
          <Button>Owner</Button>
          <SVG SVGName="IMOJI" color="#6a737d"></SVG>
          <Span color="GRAY">Edit</Span>
        </>
      ) : (
          <SVG SVGName="IMOJI" color="#6a737d"></SVG>
        );
  }

  if (issue) {
    renderComponent =
      user.id === comment.User?.id ? (
        <>
          <Button>Owner</Button>
          <SVG SVGName="IMOJI" color="#6a737d"></SVG>
          <Span color="GRAY">Edit</Span>
        </>
      ) : (
          <SVG SVGName="IMOJI" color="#6a737d"></SVG>
        );
  }

  return (
    <>
      <StyledItemWrapper>
        {Object.keys(issue).length ? (
          <Img imgType="AVARTAR_LARGE" src={issue.User?.profile}></Img>
        ) : (
            <Img imgType="AVARTAR_LARGE" src={comment.User?.profile}></Img>
          )}
        <StyledItem>
          {Object.keys(issue).length ? (
            <StyledItemHeader type="issue">
              <StyledHeaderLeft>
                <Span fontWeight="600">{issue.User?.name}</Span>
                <Span color="GRAY">
                  commented {getDateDiff(issue.updatedAt)} ago
                </Span>
              </StyledHeaderLeft>
              <StyledHeaderRight>{renderComponent}</StyledHeaderRight>
            </StyledItemHeader>
          ) : (
              <StyledItemHeader>
                <StyledHeaderLeft>
                  <Span fontWeight="600">{comment.User?.name}</Span>
                  <Span color="GRAY">
                    commented {getDateDiff(comment.updatedAt)} ago
                </Span>
                </StyledHeaderLeft>
                <StyledHeaderRight>{renderComponent}</StyledHeaderRight>
              </StyledItemHeader>
            )}

          {Object.keys(issue).length ? (
            <StyledItemContent type="issue">{issue.content}</StyledItemContent>
          ) : (
              <StyledItemContent>{comment.content}</StyledItemContent>
            )}
        </StyledItem>
      </StyledItemWrapper>
    </>
  );
};

IssueDetailCommentItem.defaultProps = {
  issue: {},
  comment: {},
};

IssueDetailCommentItem.propTypes = {
  issue: PropTypes.object,
  comment: PropTypes.object,
  user: PropTypes.object,
};

export default IssueDetailCommentItem;
