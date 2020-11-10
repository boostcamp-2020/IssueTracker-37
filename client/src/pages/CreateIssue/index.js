import React, { useState, useEffect, useRef } from 'react';
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
  const { title, content } = IssueContents;

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
      onClick: () => { },
      items: [
        {
          id: 1,
          name: 'sumniy',
          profile: null,
        },
        {
          id: 2,
          name: 'test',
          profile: null,
        },
        {
          id: 3,
          name: 'Kimakjun',
          profile: null,
        },
        {
          id: 4,
          name: '김학준',
          profile: null,
        },
        {
          id: 5,
          name: 'hoo00nn',
          profile: null,
        },
      ],
    },

    label: {
      SVGName: 'SETTING',
      color: 'gray',
      title: 'label',
      dropdownHeader: 'Apply labels to this issue',
      dropdownType: 'label',
      items: [
        {
          id: 1,
          title: 'test33',
          description: '',
          color: '#8339c7',
          createdAt: '2020-11-09 03:22:44',
          updatedAt: '2020-11-10 13:18:09',
        },
        {
          id: 11,
          title: 'qewr',
          description: 'qwer',
          color: '#6b5a34',
          createdAt: '2020-11-10 13:47:37',
          updatedAt: '2020-11-10 14:26:09',
        },
      ],
      onClick: () => { },
    },

    milstone: {
      SVGName: 'SETTING',
      color: 'gray',
      title: 'milestone',
      dropdownHeader: 'Set milestone',
      dropdownType: 'milestone',
      items: [
        {
          id: 1,
          title: 'sad',
          description: '',
          due_date: '',
          state: true,
          createdAt: '2020-11-05 00:00:00',
          updatedAt: '2020-11-09 15:02:19',
          Issues: [],
        },
        {
          id: 2,
          title: '마일스톤 insert 테스트',
          description: '내용',
          due_date: '2020-11-12 09:00:00',
          state: true,
          createdAt: '2020-11-09 14:59:17',
          updatedAt: '2020-11-09 14:59:17',
          Issues: [],
        },
        {
          id: 3,
          title: '마일스톤 insert 테스트',
          description: '내용',
          due_date: '2020-11-12 09:00:00',
          state: true,
          createdAt: '2020-11-09 14:59:19',
          updatedAt: '2020-11-09 14:59:19',
          Issues: [],
        },
      ],
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
