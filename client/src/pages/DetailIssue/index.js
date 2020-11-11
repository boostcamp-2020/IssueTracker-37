import React, { useEffect, useReducer, useState } from 'react';
import request from '@lib/axios';
import Header from '@organisms/Header';
import useFetch from '@hoc/useFetch';
import DetailIssueHeader from '@organisms/DetailIssueHeader';
import { StyledDetailIssueWrapper } from './style';
import useInput from '../../hooks/useInput';

const DetailIssue = () => {
  const [issue, setIssue, loading] = useFetch(location.pathname);
  const [isEdited, setIsEdited] = useState(false);
  const [isActived, setIsActived] = useState(true);
  const [title, onChangeTitle, setTitle] = useInput();

  useEffect(() => {
    title?.length === 0 ? setIsActived(false) : setIsActived(true);
  }, [title]);

  useEffect(() => {
    if(!loading){
      setTitle(issue.title);
    }
  }, [issue]);

  const EventHandler = {
    onOpenEdit: () => {
      setIsEdited(true);
    },
    onCloseEdit: () => {
      setIsEdited(false);
    },

    onClickSave: async () => {
      const { data } = await request.put({uri : location.pathname, data: {
        title
      }});

      if (data.state === 'success'){
        setIssue({...issue, title});
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

  return (
    <>
      <Header></Header>
      <StyledDetailIssueWrapper>
        {loading ? (
          <div>loading...</div>
        ) : (
          <DetailIssueHeader
            DetailIssueHeaderProps={DetailIssueHeaderProps}
            {...EventHandler}
          ></DetailIssueHeader>
        )}
      </StyledDetailIssueWrapper>
    </>
  );
};

export default DetailIssue;
