import React, { useState } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import Dropdown from '@molecules/Dropdown';

import Checkbox from '@atoms/Checkbox';
import Img from '@atoms/Img';
import Button from '@atoms/Button';
import openedIssue from '@img/opened_issue.png';

import { StyledIssueListHeader } from './style';

const InitialState = {
  Author: false,
  Label: false,
  Milestone: false,
  Assignee: false,
  Sort: false,
};

const IssueListHeader = (props) => {
  const { className } = props;

  const [isState, setIsState] = useState(InitialState);
  const items = ['test1', 'test2', 'test3'];

  const onClick = (event) => {
    const tempState = {
      Author: false,
      Label: false,
      Milestone: false,
      Assignee: false,
      Sort: false,
    };

    tempState[event.target.innerHTML] = !isState[event.target.innerHTML];

    setIsState(tempState);
  };

  return (
    <StyledIssueListHeader className={cn(className)}>
      <Checkbox></Checkbox>
      <Img src={openedIssue} alt="이슈 아이콘"></Img>
      <div className="container">
        <div className="empty"></div>
        <div className="dropDownButton">
          <Button className="headerBtn" onClick={onClick} afterContent="▼">
            Author
          </Button>
          {isState.Author ? (
            <Dropdown
              className="dropdown"
              title="Filter by author"
              items={items}
            ></Dropdown>
          ) : (
            ``
          )}
        </div>

        <div className="dropDownButton">
          <Button className="headerBtn" onClick={onClick} afterContent="▼">
            Label
          </Button>
          {isState.Label ? (
            <Dropdown
              className="dropdown"
              title="Filter by author"
              items={items}
            ></Dropdown>
          ) : (
            ``
          )}
        </div>

        <div className="dropDownButton">
          <Button className="headerBtn" onClick={onClick} afterContent="▼">
            Milestone
          </Button>
          {isState.Milestone ? (
            <Dropdown
              className="dropdown"
              title="Filter by milestone"
              items={items}
            ></Dropdown>
          ) : (
            ``
          )}
        </div>
        <div className="dropDownButton">
          <Button className="headerBtn" onClick={onClick} afterContent="▼">
            Assignee
          </Button>
          {isState.Assignee ? (
            <Dropdown
              className="dropdown"
              title="Filter by who’s assigned"
              items={items}
            ></Dropdown>
          ) : (
            ``
          )}
        </div>

        <div className="dropDownButton">
          <Button className="headerBtn" onClick={onClick} afterContent="▼">
            Sort
          </Button>
          {isState.Sort ? (
            <Dropdown
              className="dropdown"
              title="Sort by"
              items={items}
            ></Dropdown>
          ) : (
            ``
          )}
        </div>
      </div>
    </StyledIssueListHeader>
  );
};

IssueListHeader.defaultProps = {
  onClick: () => {},
};

IssueListHeader.propTypes = {
  className: PropTypes.string,
};

export default IssueListHeader;
