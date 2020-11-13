import React, { useEffect, useState, useRef } from 'react';

import request from '@lib/axios';
import Header from '@organisms/Header';
import useFetch from '@hooks/useFetch';
import { useUser } from '@hooks/useUser';
import { useDebounce } from '@hooks/useDebounce';

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
  const [user] = useUser();
  const [loading, setLoading] = useState(true);

  const [isEdited, setIsEdited] = useState(false);
  const [isActived, setIsActived] = useState(true);
  const [isContentActived, setIsContentActived] = useState(false);
  const [title, onChangeTitle, setTitle] = useInput();
  const [content, onChangeIssueContent, setContent] = useInput();
  const [visible] = useDebounce({ second: 2000, data: content });

  const [issue, setIssue] = useState({});
  const [assigneeCheckList, setAssigneeCheckList] = useState([]);
  const [labelCheckList, setLabelCheckList] = useState([]);
  const [milestoneCheckList, setMilestoneCheckList] = useState([]);

  const [assignees, setAssignees] = useFetch({
    uri: '/user',
    option: { name: 'isChecked', value: false },
  });

  const [milestones, setMilestones] = useFetch({
    uri: '/milestone',
    option: { name: 'isChecked', value: false },
  });

  const [labels, setLabels] = useFetch({
    uri: '/label',
    option: { name: 'isChecked', value: false },
  });

  const IssueOptionProps = {
    assignee: {
      SVGName: 'SETTING',
      color: 'gray',
      title: 'Assignees',
      dropdownType: 'assignee',
      dropdownHeader: 'Assign up to 10 people to this issue',
      checkList: assigneeCheckList,
      items: assignees,
      onClickSpan: () => {
        setAssigneeCheckList([user]);
        setAssignees(
          assignees.map((assignee) =>
            user.id === assignee.id
              ? { ...assignee, isChecked: true }
              : assignee,
          ),
        );
      },
      onClick: (id) => {
        const [selectedItem] = assignees.filter((item) => id === item.id);

        if (selectedItem.isChecked) {
          setAssignees(
            assignees.map((item) =>
              selectedItem.id === item.id
                ? { ...item, isChecked: false }
                : item,
            ),
          );

          setAssigneeCheckList(
            assigneeCheckList.filter((item) => item.id !== id),
          );
        }

        if (!selectedItem.isChecked) {
          selectedItem.isChecked = true;

          setAssignees(
            assignees.map((item) =>
              selectedItem.id === item.id ? { ...item, isChecked: true } : item,
            ),
          );

          setAssigneeCheckList([...assigneeCheckList, selectedItem]);
        }
      },
    },

    label: {
      SVGName: 'SETTING',
      color: 'gray',
      title: 'label',
      dropdownHeader: 'Apply labels to this issue',
      dropdownType: 'label',
      checkList: labelCheckList,
      items: labels,
      onClick: (id) => {
        const [selectedItem] = labels.filter((item) => id === item.id);

        if (selectedItem.isChecked) {
          setLabels(
            labels.map((item) =>
              selectedItem.id === item.id
                ? { ...item, isChecked: false }
                : item,
            ),
          );

          setLabelCheckList(labelCheckList.filter((item) => item.id !== id));
        }

        if (!selectedItem.isChecked) {
          selectedItem.isChecked = true;

          setLabels(
            labels.map((item) =>
              selectedItem.id === item.id ? { ...item, isChecked: true } : item,
            ),
          );

          setLabelCheckList([...labelCheckList, selectedItem]);
        }
      },
    },

    milstone: {
      SVGName: 'SETTING',
      color: 'gray',
      title: 'milestone',
      dropdownHeader: 'Set milestone',
      dropdownType: 'milestone',
      checkList: milestoneCheckList,
      items: milestones,
      onClick: (id) => {
        const [selectedItem] = milestones.filter((item) => id === item.id);

        if (selectedItem.isChecked) {
          setMilestones(
            milestones.map((item) =>
              selectedItem.id === item.id
                ? { ...item, isChecked: false }
                : item,
            ),
          );

          setMilestoneCheckList([]);
        }

        if (!selectedItem.isChecked) {
          selectedItem.isChecked = true;

          setMilestones(
            milestones.map((item) =>
              selectedItem.id === item.id
                ? { ...item, isChecked: true }
                : { ...item, isChecked: false },
            ),
          );

          setMilestoneCheckList([selectedItem]);
        }
      },
    },
  };

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await request.get({ uri: location.pathname });

      const labelList = data.Labels;
      const milestoneList = data.Milestone;
      const assigneeList = [data.User];

      setTimeout(() => {
        setLoading(false);
      }, 1000);

      setIssue(data);

      setAssigneeCheckList(assigneeList);
      setLabelCheckList(labelList);
      setMilestoneCheckList([milestoneList]);
    })();
  }, []);

  useEffect(() => {
    title?.length === 0 ? setIsActived(false) : setIsActived(true);
  }, [title]);

  useEffect(() => {
    content?.length === 0
      ? setIsContentActived(false)
      : setIsContentActived(true);
  }, [content]);

  useEffect(() => {
    if (!loading) {
      setTitle(issue.title);
    }
  }, [issue]);

  const imageRef = useRef(null);
  const onChangeImageInput = (e) => {
    const formData = new FormData();

    formData.append('image', e.target.files[0]);
  };

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

  const IssueFormProps = {
    type: 'commentIssue',
    IssueState: issue?.state,
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
      isActived: isContentActived,
      onClickCancel: async () => {
        try {
          await request.put({
            uri: `/issue/${issue.id}`,
            data: { state: !issue.state },
          });
          setIssue({ ...issue, state: !issue.state });
        } catch (error) {
          console.error(error);
        }
      },
      onClickSubmit: async () => {
        if (content.length === 0) return alert('0 글자는 등록되지 않습니다.');
        try {
          const {
            data: { data },
          } = await request.post({
            uri: `/issue/${issue.id}/comment`,
            data: { content },
          });

          setContent(''); // FIX: 현재 이슈에 댓글에 새로생성된 댓글 추가해줘여함.
          setIssue({ ...issue, Comments: [...issue.Comments, data] });
          alert('댓글 등록완료.');
        } catch (error) {
          console.error(error);
        }
      },
      leftButton: 'Cancle',
      rightButton: 'sumbit',
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
                <IssueDetailCommentList
                  issue={issue}
                  user={user}
                  setIssue={setIssue}
                />
                <IssueForm
                  IssueFormProps={IssueFormProps}
                  visible={visible}
                ></IssueForm>
              </StyledLeftContent>
              <StyledRightContent>
                <IssueOption
                  IssueOptionProps={IssueOptionProps.assignee}
                ></IssueOption>
                <IssueOption
                  IssueOptionProps={IssueOptionProps.label}
                ></IssueOption>
                <IssueOption
                  IssueOptionProps={IssueOptionProps.milstone}
                ></IssueOption>
              </StyledRightContent>
            </>
          )}
      </StyledDetailIssueWrapper>
    </>
  );
};

export default DetailIssue;
