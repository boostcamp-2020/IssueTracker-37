import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import CheckBox from '@atoms/CheckBox';
import Img from '@atoms/Img';

import DropDownButton from '@molecules/DropdownButton';

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
          <DropDownButton
            className="dropDownBtn"
            onClick={() => onClick('Author')}
            buttonName="Author"
            title="Filter by author"
            items={users}
            isState={isState.Author}
          ></DropDownButton>

          <DropDownButton
            className="dropDownBtn"
            onClick={() => onClick('Label')}
            buttonName="Label"
            title="Filter by label"
            items={labels}
            isState={isState.Label}
          ></DropDownButton>

          <DropDownButton
            className="dropDownBtn"
            onClick={() => onClick('Milestone')}
            buttonName="Milestone"
            title="Filter by milestone"
            items={milestones}
            isState={isState.Milestone}
          ></DropDownButton>

          <DropDownButton
            className="dropDownBtn"
            onClick={() => onClick('Assignee')}
            buttonName="Assignee"
            title="Filter by who’s assigned"
            items={users}
            isState={isState.Assignee}
          ></DropDownButton>

          <DropDownButton
            className="dropDownBtn"
            onClick={() => onClick('Sort')}
            buttonName="Sort"
            title="Sort by"
            items={sortOptions}
            isState={isState.Sort}
          ></DropDownButton>
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
