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
          <IssueOption></IssueOption>
          <IssueOption></IssueOption>
          <IssueOption></IssueOption>
        </StyledRightContent>
      </StyledWrapper>
    </>
  );
};

export default CreateIssue;
