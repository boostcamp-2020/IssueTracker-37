import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import CheckBox from '@atoms/CheckBox';
import Img from '@atoms/Img';

import DropDownButton from '@molecules/DropdownButton';

import openedIssue from '@img/OpenedIssueImg.png';

import { StyledIssueListHeader } from './style';

const IssueListHeader = (props) => {
  const {
    className,
    issues,
    users,
    labels,
    milestones,
    sortOptions,
    onClick,
    onCheckBoxChange,
    markAsOptions,
    totalCheck,
  } = props;

  const checkedCount = () => {
    return issues.filter((issue) => issue.checked).length;
  };

  return (
    <StyledIssueListHeader className={cn(className)}>
      <CheckBox
        onChange={onCheckBoxChange}
        value={totalCheck.id}
        isChecked={totalCheck.value}
      ></CheckBox>
      <Img src={openedIssue} alt="이슈 아이콘"></Img>
      <div className="container">
        <div className="empty"></div>
        <div className="dropDownButtonContainer">
          {checkedCount() === 0 ? (
            <>
              <DropDownButton
                dropdownType="author"
                className="dropDownBtn"
                onClick={onClick}
                title="Author"
                dropdownHeader="Filter by author"
                items={users}
                afterContent="▼"
                spanType="SMALL"
              ></DropDownButton>

              <DropDownButton
                dropdownType="label"
                className="dropDownBtn"
                onClick={onClick}
                title="Label"
                dropdownHeader="Filter by label"
                items={labels}
                afterContent="▼"
                spanType="SMALL"
              ></DropDownButton>

              <DropDownButton
                dropdownType="milestone"
                className="dropDownBtn"
                onClick={onClick}
                title="Milestone"
                dropdownHeader="Filter by milestone"
                items={milestones}
                afterContent="▼"
                spanType="SMALL"
              ></DropDownButton>

              <DropDownButton
                dropdownType="assignee"
                className="dropDownBtn"
                onClick={onClick}
                title="Assignee"
                dropdownHeader="Filter by who’s assigned"
                items={users}
                afterContent="▼"
                spanType="SMALL"
              ></DropDownButton>

              <DropDownButton
                dropdownType="sort"
                className="dropDownBtn"
                onClick={onClick}
                title="Sort"
                dropdownHeader="Sort by"
                items={sortOptions}
                afterContent="▼"
                spanType="SMALL"
              ></DropDownButton>
            </>
          ) : (
              <DropDownButton
                dropdownType="markAs"
                className="mark-as-button"
                onClick={onClick}
                title="Mark as"
                dropdownHeader="Actions"
                items={markAsOptions}
                afterContent="▼"
                spanType="SMALL"
              ></DropDownButton>
            )}
        </div>
      </div>
    </StyledIssueListHeader>
  );
};

IssueListHeader.defaultProps = {
  sortOptions: [
    { id: 1, title: 'Newest' },
    { id: 2, title: 'Oldest' },
    { id: 3, title: 'Most commented' },
    { id: 4, title: 'Least commented' },
    { id: 5, title: 'Recently updated' },
    { id: 6, title: 'Least recently updated' },
  ],
};

IssueListHeader.propTypes = {
  className: PropTypes.string,
  issues: PropTypes.array,
  users: PropTypes.array,
  labels: PropTypes.array,
  milestones: PropTypes.array,
  sortOptions: PropTypes.array,
  onClick: PropTypes.func,
  onCheckBoxChange: PropTypes.func,
  markAsOptions: PropTypes.array,
  totalCheck: PropTypes.object,
};

export default IssueListHeader;
