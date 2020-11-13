import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import request from '@lib/axios';
import useFetch from '@hooks/useFetch';
import { useUser } from '@hooks/useUser';
import Header from '@organisms/Header';
import IssueForm from '@components/IssueForm';
import IssueOption from '@components/IssueOption';
import { StyledWrapper, StyledLeftContent, StyledRightContent } from './style';

const initialInputs = {
  title: '',
  content: '',
};

const CreateIssue = () => {
  const [user] = useUser();
  const history = useHistory();
  const [IssueContents, setIssueContents] = useState(initialInputs);
  const [visible, setVisible] = useState(false);
  const [isActived, setIsActived] = useState(false);

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
    type: 'newIssue',
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
      onClickCancel: () => {
        history.push('/');
      },
      onClickSubmit: async () => {
        if (title.legth === 0) return;
        const payload = {
          issue: {
            title,
            content,
            state: true,
            user_id: user.id,
            milestone_id:
              milestoneCheckList.length === 0 ? null : milestoneCheckList[0].id,
          },
          assignees: assigneeCheckList.map((assignee) => ({
            assignee_id: assignee.id,
          })),
          labels: labelCheckList.map((label) => ({ label_id: label.id })),
        };

        try {
          const { data } = await request.post({
            uri: location.pathname,
            data: payload,
          });

          alert(data.message);
          history.push('/');
        } catch (error) {
          console.error(error);
          alert(error);
        }
      },
      leftButton: 'Cancle',
      rightButton: 'sumbit',
    },
    user,
  };

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
            checkList={assigneeCheckList}
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
