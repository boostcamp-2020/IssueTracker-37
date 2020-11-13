import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Span from '@atoms/Span';
import DropdownButton from '@molecules/DropdownButton';
import AssigneeContent from '@atoms/AssigneeContent';
import LabelContent from '@atoms/LabelContent';
import MilestoneContent from '@atoms/MilestoneContent';

import { StyledIssueOption, StyledIssueOptionBottom } from './style';

const IssueOption = ({ IssueOptionProps }) => {
  const [defaultContent, setDefalutCotent] = useState('');
  const [renderComponent, setRenderComponent] = useState([]);

  useEffect(() => {
    if (IssueOptionProps?.title === 'Assignees') {
      setDefalutCotent('No one-assign yourself');
      setRenderComponent(
        <AssigneeContent
          checkList={IssueOptionProps?.checkList}
        ></AssigneeContent>,
      );
    }

    if (IssueOptionProps?.title === 'label') {
      setDefalutCotent('None yet');
      setRenderComponent(
        <LabelContent checkList={IssueOptionProps?.checkList}></LabelContent>,
      );
    }

    if (IssueOptionProps?.title === 'milestone') {
      if (IssueOptionProps?.checkList?.length === 0) {
        setDefalutCotent('No milestone');
        return;
      }

      const InitialIssuesLength =
        IssueOptionProps?.checkList[0]?.Issues?.length;
      const ClosedIssuesLength = IssueOptionProps?.checkList[0]?.Issues?.filter(
        (issue) => issue.state === false,
      ).length;
      const percent = Number((ClosedIssuesLength / InitialIssuesLength) * 100);

      setRenderComponent(
        <MilestoneContent
          checkList={IssueOptionProps?.checkList}
          percent={percent}
        ></MilestoneContent>,
      );
    }
  }, [IssueOptionProps?.checkList]);

  return (
    <>
      <StyledIssueOption>
        <DropdownButton
          {...IssueOptionProps}
          className="issue-option"
        ></DropdownButton>
        <StyledIssueOptionBottom>
          {IssueOptionProps?.checkList?.length === 0 ? (
            <Span
              color="GRAY"
              spanType="SMALL"
              onClick={IssueOptionProps?.onClickSpan}
            >
              {defaultContent}
            </Span>
          ) : (
              renderComponent
            )}
        </StyledIssueOptionBottom>
      </StyledIssueOption>
    </>
  );
};

IssueOption.defaultProps = {};

IssueOption.propTypes = {
  IssueOptionProps: PropTypes.object,
};

export default IssueOption;
