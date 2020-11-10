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
    if (IssueOptionProps.title === 'Assignees') {
      setDefalutCotent('No one-assign yourself');
      setRenderComponent(
        <AssigneeContent checkList={IssueOptionProps.items}></AssigneeContent>,
      );
    }

    if (IssueOptionProps.title === 'label') {
      setDefalutCotent('None yet');
      setRenderComponent(
        <LabelContent checkList={IssueOptionProps.items}></LabelContent>,
      );
    }

    if (IssueOptionProps.title === 'milestone') {
      setRenderComponent(
        <MilestoneContent
          checkList={IssueOptionProps.items}
          percent="30"
        ></MilestoneContent>,
      );
    }
  }, []);

  return (
    <>
      <StyledIssueOption>
        <DropdownButton {...IssueOptionProps}></DropdownButton>
        <StyledIssueOptionBottom>
          {IssueOptionProps.checkList.length === 0 ? (
            <Span color="GRAY" spanType="SMALL">
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
