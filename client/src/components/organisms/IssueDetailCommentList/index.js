import React from 'react';
import PropTypes from 'prop-types';
import IssueDetailCommentItem from '@molecules/IssueDetailCommentItem';

import { IssueDetailCommentListWrapper } from './style';

const IssueDetailCommentList = ({ issue, user }) => {
  return (
    <IssueDetailCommentListWrapper>
      <IssueDetailCommentItem
        issue={issue}
        user={user}
      ></IssueDetailCommentItem>
      {issue.Comments?.map((comment) => (
        <IssueDetailCommentItem // 그냥 컴멘트..
          key={comment.id} // 작성자가 쓴댓글..
          comment={comment}
          user={user}
        ></IssueDetailCommentItem>
      ))}
    </IssueDetailCommentListWrapper>
  );
};

IssueDetailCommentList.defaultProps = {
  issue: {},
  user: {},
};

IssueDetailCommentList.propTypes = {
  issue: PropTypes.object,
  user: PropTypes.object,
};
export default IssueDetailCommentList;
