import React, { useState, useEffect, useRef } from 'react';

import useFetch from '@hoc/useFetch';
import Header from '@organisms/Header';
import IssueForm from '@components/IssueForm';
import IssueOption from '@components/IssueOption';
import { StyledWrapper, StyledLeftContent, StyledRightContent } from './style';

const initialInputs = {
  title: '',
  content: '',
};

const CreateIssue = () => {
  // 유저정보 받아오기. => hook 을 사용하면 좋을듯.

  const [IssueContents, setIssueContents] = useState(initialInputs);
  const [visible, setVisible] = useState(false);
  const [isActived, setIsActived] = useState(false);

  const [assigneeCheckList, setAssigneeCheckList] = useState([]);
  const [labelCheckList, setLabelCheckList] = useState([]);

  const [assignees, setAssignees] = useFetch('/user');
  const [milestones, setMilestones] = useFetch('/milestone');
  const [labels, setLabels] = useFetch('/label');

  const { title, content } = IssueContents;

  useEffect(() => {
    // console.log(assigneeCheckList);
  }, assigneeCheckList);

  const imageRef = useRef(null);

  const onChangeIssueContent = (e) => {
    const { name, value } = e.target;

    setIssueContents({ ...IssueContents, [name]: value });
  };

  const onChangeImageInput = (e) => {
    const formData = new FormData();

    formData.append('image', e.target.files[0]);
  };

  useEffect(() => {
    setVisible(true);
    const Timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      clearTimeout(Timer);
    };
  }, [content]);

  useEffect(() => {
    title.length === 0 ? setIsActived(false) : setIsActived(true);
  }, [title]);

  const IssueFormProps = {
    inputProps: {
      placeholder: 'Title',
      name: 'title',
      value: title,
      onChange: onChangeIssueContent,
    },

    textAreaProps: {
      placeholder: 'Leave a Comment',
      name: 'content',
      value: content,
      onChange: onChangeIssueContent,
    },

    ImageProps: {
      onChange: onChangeImageInput,
      imageRef,
    },

    buttonProps: {
      isActived,
    },
  };

  const IssueOptionProps = {
    assignee: {
      SVGName: 'SETTING',
      color: 'gray',
      title: 'Assignees',
      dropdownType: 'assignee',
      dropdownHeader: 'Assign up to 10 people to this issue',
      src: 'https://avatars3.githubusercontent.com/u/52775389?s=60&v=4',
      onClick: (id) => { },
      checkList: assigneeCheckList,
      items: assignees,
    },

    label: {
      SVGName: 'SETTING',
      color: 'gray',
      title: 'label',
      dropdownHeader: 'Apply labels to this issue',
      dropdownType: 'label',
      checkList: labelCheckList,
      items: labels,
      onClick: () => { },
    },

    milstone: {
      SVGName: 'SETTING',
      color: 'gray',
      title: 'milestone',
      dropdownHeader: 'Set milestone',
      dropdownType: 'milestone',
      checkList: [],
      items: milestones,
      onClick: () => { },
    },
  };

  return (
    <>
      <Header></Header>
      <StyledWrapper>
        <StyledLeftContent>
          <IssueForm
            IssueFormProps={IssueFormProps}
            visible={visible}
          ></IssueForm>
        </StyledLeftContent>
        <StyledRightContent>
          <IssueOption
            IssueOptionProps={IssueOptionProps.assignee}
          ></IssueOption>
          <IssueOption IssueOptionProps={IssueOptionProps.label}></IssueOption>
          <IssueOption
            IssueOptionProps={IssueOptionProps.milstone}
          ></IssueOption>
        </StyledRightContent>
      </StyledWrapper>
    </>
  );
};

export default CreateIssue;
