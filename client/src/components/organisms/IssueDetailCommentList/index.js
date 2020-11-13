import React from 'react';
import PropTypes from 'prop-types';
import IssueDetailCommentItem from '@molecules/IssueDetailCommentItem';

import { IssueDetailCommentListWrapper } from './style';

const IssueDetailCommentList = ({ issue, user, setIssue }) => {
  return (
    <IssueDetailCommentListWrapper>
      <IssueDetailCommentItem
        issue={issue}
        user={user}
        setIssue={setIssue}
      ></IssueDetailCommentItem>
      {issue.Comments?.map((comment) => (
        <IssueDetailCommentItem // 그냥 컴멘트..
          key={comment.id} // 작성자가 쓴댓글..
          comment={comment}
          issue={issue}
          user={user}
          setIssue={setIssue}
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
  setIssue: PropTypes.func,
};
export default IssueDetailCommentList;
