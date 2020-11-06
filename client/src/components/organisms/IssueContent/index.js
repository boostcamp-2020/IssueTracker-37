import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import IssueListHeader from '@molecules/IssueListHeader';
import IssueItem from '@molecules/IssueItem';

import { StyledIssueContent } from './style';

const IssueContent = (props) => {
  const { users, issues, labels, milestones, className } = props;

  return (
    <StyledIssueContent className={cn(className)}>
      <IssueListHeader
        users={users}
        labels={labels}
        milestones={milestones}
      ></IssueListHeader>
      {issues.map((issue) => (
        <IssueItem key={issue.id} issue={issue}></IssueItem>
      ))}
    </StyledIssueContent>
  );
};

IssueContent.defaultProps = {};

IssueContent.propTypes = {
  issues: PropTypes.array,
  className: PropTypes.string,
  users: PropTypes.array,
  labels: PropTypes.array,
  milestones: PropTypes.array,
};

export default IssueContent;
