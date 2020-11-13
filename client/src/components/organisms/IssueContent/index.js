import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import IssueListHeader from '@molecules/IssueListHeader';
import IssueItem from '@molecules/IssueItem';

import { StyledIssueContent } from './style';

const IssueContent = (props) => {
  const {
    users,
    issues,
    labels,
    milestones,
    className,
    onClick,
    onCheckBoxChange,
    markAsOptions,
    totalCheck,
  } = props;

  return (
    <StyledIssueContent className={cn(className)}>
      <IssueListHeader
        issues={issues}
        users={users}
        labels={labels}
        milestones={milestones}
        onClick={onClick}
        onCheckBoxChange={onCheckBoxChange}
        totalCheck={totalCheck}
        markAsOptions={markAsOptions}
      ></IssueListHeader>
      {issues.map((issue) => (
        <IssueItem
          key={issue.id}
          issue={issue}
          onCheckBoxChange={onCheckBoxChange}
        ></IssueItem>
      ))}
    </StyledIssueContent>
  );
};

IssueContent.defaultProps = {
  markAsOptions: [
    { id: 1, title: 'Open' },
    { id: 2, title: 'Closed' },
  ],
};

IssueContent.propTypes = {
  issues: PropTypes.array,
  className: PropTypes.string,
  users: PropTypes.array,
  labels: PropTypes.array,
  milestones: PropTypes.array,
  onClick: PropTypes.func,
  onCheckBoxChange: PropTypes.func,
  markAsOptions: PropTypes.object,
  totalCheck: PropTypes.object,
};

export default IssueContent;
