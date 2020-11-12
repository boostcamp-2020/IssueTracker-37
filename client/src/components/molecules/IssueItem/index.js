import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import CheckBox from '@atoms/CheckBox';
import Img from '@atoms/Img';
import SVG from '@atoms/SVG';
import Span from '@atoms/Span';
import ImageTitle from '@atoms/ImgTitle';
import IssueLabel from '@atoms/IssueLabel';
import milestoneImg from '@img/MilestoneImg.png';
import { getDateDiff } from '@utils/DateDiff';

import {
  StyledIssueItem,
  StyledIssueItemContent,
  StyledIssueTitle,
  StyledIssueFooter,
  StyledAssgineeContainer,
  StyledIssueImageContent,
  StyledSortContainer,
} from './style';

const getIssueDescription = (issue) => {
  const state = issue.state ? 'open' : 'close';
  const {
    id,
    createdAt,
    User: { name },
  } = issue;

  return `#${id} ${state} ${getDateDiff(createdAt)} ago by ${name}`;
};

const IssueItem = (props) => {
  const { issue, onCheckBoxChange } = props;
  const history = useHistory();
  const SVGName = issue.state ? 'OPENED_ISSUE' : 'CLOSED_ISSUE';
  const color = issue.state ? '#22863a' : '#cb2431';

  return (
    <StyledIssueItem>
      <CheckBox
        value={issue.id}
        onChange={onCheckBoxChange}
        isChecked={issue.checked}
      ></CheckBox>
      <SVG SVGName={SVGName} color={color}></SVG>

      <StyledIssueItemContent
        onClick={() => history.push(`/issue/${issue.id}`)}
      >
        <StyledIssueTitle>
          <Span className="issue-item-title" spanType="LARGE">
            {issue.title}
          </Span>
          {issue.Labels.map((label) => (
            <IssueLabel
              key={label.id}
              labelColor={label.color}
              className="issueLabel"
            >
              {label.title}
            </IssueLabel>
          ))}
        </StyledIssueTitle>

        <StyledIssueFooter>
          <Span spanType="SMALL" color="GRAY">
            {getIssueDescription(issue)}
          </Span>
          {issue.Milestone && (
            <ImageTitle src={milestoneImg} styleType="issue">
              {issue.Milestone.title}
            </ImageTitle>
          )}
        </StyledIssueFooter>
      </StyledIssueItemContent>
      <StyledIssueImageContent>
        <StyledAssgineeContainer>
          {issue.Assignees.map((assignee) => (
            <Img key={assignee.id} src={assignee.User.profile}></Img>
          ))}
        </StyledAssgineeContainer>
        <StyledSortContainer></StyledSortContainer>
      </StyledIssueImageContent>
    </StyledIssueItem>
  );
};

IssueItem.defaultProps = {};

IssueItem.propTypes = {
  issue: PropTypes.object,
  onCheckBoxChange: PropTypes.func,
};

export default IssueItem;
