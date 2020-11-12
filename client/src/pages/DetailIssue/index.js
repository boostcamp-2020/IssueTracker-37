import React, { useEffect, useState } from 'react';
import request from '@lib/axios';
import Header from '@organisms/Header';
import useFetch from '@hooks/useFetch';
import DetailIssueHeader from '@organisms/DetailIssueHeader';
import IssueDetailCommentList from '@organisms/IssueDetailCommentList';
import Loading from '@molecules/Loading';
import IssueForm from '@components/IssueForm';
import IssueOption from '@components/IssueOption';
import useInput from '../../hooks/useInput';

import {
  StyledDetailIssueWrapper,
  StyledLeftContent,
  StyledRightContent,
} from './style';

const DetailIssue = () => {
  const [issue, setIssue, loading] = useFetch(location.pathname);
  const [isEdited, setIsEdited] = useState(false);
  const [isActived, setIsActived] = useState(true);
  const [title, onChangeTitle, setTitle] = useInput();

  useEffect(() => {
    title?.length === 0 ? setIsActived(false) : setIsActived(true);
  }, [title]);

  useEffect(() => {
    if (!loading) {
      setTitle(issue.title);
    }
  }, [issue]);

  const EventHandler = {
    onOpenEdit: () => {
      setTitle(issue.title);
      setIsEdited(true);
    },
    onCloseEdit: () => {
      setIsEdited(false);
    },

    onClickSave: async () => {
      const { data } = await request.put({
        uri: location.pathname,
        data: {
          title,
        },
      });

      if (data.state === 'success') {
        setIssue({ ...issue, title });
        setIsEdited(false);
      }
      alert(data.message);
    },
    onChangeTitle,
  };

  const DetailIssueHeaderProps = {
    issue,
    isEdited,
    isActived,
    titleInputs: {
      name: 'title',
      value: title,
    },
  };

  const IssueOptionProps = {
    assignee: {
      SVGName: 'SETTING',
      color: 'gray',
      title: 'Assignees',
      dropdownType: 'assignee',
      dropdownHeader: 'Assign up to 10 people to this issue',
      checkList: [],
      items: [{}],
      onClickSpan: () => {},
    },
  };

  const IssueFormProps = {
    type: 'commentIssue',
    buttonProps: {
      rightButton: 'Comment',
    },
  };

  return (
    <>
      <Header></Header>
      <StyledDetailIssueWrapper>
        {loading ? (
          <Loading />
        ) : (
          <>
            <StyledLeftContent>
              <DetailIssueHeader
                DetailIssueHeaderProps={DetailIssueHeaderProps}
                {...EventHandler}
              ></DetailIssueHeader>
              <IssueDetailCommentList issue={issue} />
              <IssueForm IssueFormProps={IssueFormProps}></IssueForm>
            </StyledLeftContent>
            <StyledRightContent>
              <IssueOption
                IssueOptionProps={IssueOptionProps.assignee}
              ></IssueOption>
              <IssueOption
                IssueOptionProps={IssueOptionProps.assignee}
              ></IssueOption>
              <IssueOption
                IssueOptionProps={IssueOptionProps.assignee}
              ></IssueOption>
            </StyledRightContent>
          </>
        )}
      </StyledDetailIssueWrapper>
    </>
  );
};

export default DetailIssue;
