import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Dropdown from '@molecules/Dropdown';
import CheckBox from '@atoms/CheckBox';
import Img from '@atoms/Img';
import Button from '@atoms/Button';
import openedIssue from '@img/OpenedIssueImg.png';

import { StyledIssueListHeader } from './style';

const InitialState = {
  Author: false,
  Label: false,
  Milestone: false,
  Assignee: false,
  Sort: false,
};

const IssueListHeader = (props) => {
  const { className, users, labels, milestones, sortOptions } = props;
  const [isState, setIsState] = useState(InitialState);

  const onClick = (type) => {
    setIsState({ ...InitialState, [type]: !isState[type] });
  };

  return (
    <StyledIssueListHeader className={cn(className)}>
      <CheckBox></CheckBox>
      <Img src={openedIssue} alt="이슈 아이콘"></Img>
      <div className="container">
        <div className="empty"></div>
        <div className="dropDownButtonContainer">
          <div className="dropDownButton">
            <Button
              className="headerBtn"
              onClick={() => onClick('Author')}
              afterContent="▼"
            >
              Author
            </Button>
            {isState.Author && (
              <Dropdown
                className="dropdown"
                title="Filter by author"
                items={users}
              ></Dropdown>
            )}
          </div>

          <div className="dropDownButton">
            <Button
              className="headerBtn"
              onClick={() => onClick('Label')}
              afterContent="▼"
            >
              Label
            </Button>
            {isState.Label && (
              <Dropdown
                className="dropdown"
                title="Filter by label"
                items={labels}
              ></Dropdown>
            )}
          </div>

          <div className="dropDownButton">
            <Button
              className="headerBtn"
              onClick={() => onClick('Milestone')}
              afterContent="▼"
            >
              Milestone
            </Button>
            {isState.Milestone && (
              <Dropdown
                className="dropdown"
                title="Filter by milestone"
                items={milestones}
              ></Dropdown>
            )}
          </div>
          <div className="dropDownButton">
            <Button
              className="headerBtn"
              onClick={() => onClick('Assignee')}
              afterContent="▼"
            >
              Assignee
            </Button>
            {isState.Assignee && (
              <Dropdown
                className="dropdown"
                title="Filter by who’s assigned"
                items={users}
              ></Dropdown>
            )}
          </div>

          <div className="dropDownButton">
            <Button
              className="headerBtn"
              onClick={() => onClick('Sort')}
              afterContent="▼"
            >
              Sort
            </Button>
            {isState.Sort && (
              <Dropdown
                className="dropdown"
                title="Sort by"
                items={sortOptions}
              ></Dropdown>
            )}
          </div>
        </div>
      </div>
    </StyledIssueListHeader>
  );
};

IssueListHeader.defaultProps = {
  sortOptions: [
    'Newest',
    'Oldest',
    'Most commented',
    'Least commented',
    'Recently updated',
  ],
};

IssueListHeader.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array,
  labels: PropTypes.array,
  milestones: PropTypes.array,
  sortOptions: PropTypes.array,
};

export default IssueListHeader;
