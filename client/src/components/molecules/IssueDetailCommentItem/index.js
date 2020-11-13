import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import request from '@lib/axios';
import Span from '@atoms/Span';
import Button from '@atoms/Button';
import SVG from '@atoms/SVG';
import Img from '@atoms/Img';
import IssueForm from '@components/IssueForm';
import { getDateDiff } from '@utils/DateDiff';
import useInput from '@hooks/useInput';
import { useDebounce } from '@hooks/useDebounce';

import {
  StyledItemWrapper,
  StyledItemHeader,
  StyledItemContent,
  StyledHeaderRight,
  StyledHeaderLeft,
  StyledItem,
} from './style';

const IssueDetailCommentItem = ({ issue, comment, user, setIssue }) => {
  const initData = Object.keys(comment).length
    ? comment.content
    : issue.content;
  const [content, onChangeContent, setContent] = useInput(initData);

  const [visible] = useDebounce(content);
  const [isActived, setIsActived] = useState(true);
  const [isEdited, setIsEdited] = useState(false);
  const imageRef = useRef(null);

  const onChangeImageInput = (e) => {
    const formData = new FormData();

    formData.append('image', e.target.files[0]);
  };

  const onClickEdit = () => {
    setIsEdited((pre) => !pre);
  };

  const IssueFormProps = {
    type: 'editIssue',
    textAreaProps: {
      placeholder: 'Leave a Comment',
      name: 'content',
      value: content,
      onChange: onChangeContent,
    },

    ImageProps: {
      onChange: onChangeImageInput,
      imageRef,
    },

    buttonProps: {
      isActived,
      onClickCancel: () => {
        setIsEdited(false);
      },
      onClickSubmit: async () => {
        try {
          await request.put({
            uri: `${location.pathname}/comment/${comment.id}`,
            data: {
              content,
            },
          });

          const newComment = issue.Comments.map((item) =>
            item.id === comment.id ? { ...item, content } : item,
          );

          console.log(newComment);
          setContent('');
          setIsEdited(false);
          setIssue({ ...issue, Comments: newComment });
        } catch (error) {
          console.error(error);
        }
      },
      leftButton: 'Cancle',
      rightButton: 'sumbit',
    },
    user,
  };

  let renderComponent = '';

  if (!comment) {
    renderComponent =
      user.id === issue.id ? (
        <>
          <Button>Owner</Button>
          <SVG SVGName="IMOJI" color="#6a737d"></SVG>
          <Span color="GRAY">Edit</Span>
        </>
      ) : (
          <SVG SVGName="IMOJI" color="#6a737d"></SVG>
        );
  }

  if (comment) {
    renderComponent =
      user.id === comment.User?.id ? (
        <>
          <Button>Owner</Button>
          <SVG SVGName="IMOJI" color="#6a737d"></SVG>
          <Span color="GRAY" onClick={onClickEdit}>
            Edit
          </Span>
        </>
      ) : (
          <SVG SVGName="IMOJI" color="#6a737d"></SVG>
        );
  }

  return (
    <>
      <StyledItemWrapper>
        {Object.keys(comment).length ? (
          <Img imgType="AVARTAR_LARGE" src={comment.User?.profile}></Img>
        ) : (
            <Img imgType="AVARTAR_LARGE" src={issue.User?.profile}></Img>
          )}

        {isEdited ? (
          <IssueForm
            IssueFormProps={IssueFormProps}
            visible={visible}
          ></IssueForm>
        ) : (
            <StyledItem>
              {Object.keys(comment).length ? (
                <StyledItemHeader>
                  <StyledHeaderLeft>
                    <Span fontWeight="600">{comment.User?.name}</Span>
                    <Span color="GRAY">
                      commented {getDateDiff(comment.updatedAt)} ago
                  </Span>
                  </StyledHeaderLeft>
                  <StyledHeaderRight>{renderComponent}</StyledHeaderRight>
                </StyledItemHeader>
              ) : (
                  <StyledItemHeader type="issue">
                    <StyledHeaderLeft>
                      <Span fontWeight="600">{issue.User?.name}</Span>
                      <Span color="GRAY">
                        commented {getDateDiff(issue.updatedAt)} ago
                  </Span>
                    </StyledHeaderLeft>
                    <StyledHeaderRight>{renderComponent}</StyledHeaderRight>
                  </StyledItemHeader>
                )}

              {Object.keys(comment).length ? (
                <StyledItemContent>{comment.content}</StyledItemContent>
              ) : (
                  <StyledItemContent type="issue">
                    {issue.content}
                  </StyledItemContent>
                )}
            </StyledItem>
          )}
      </StyledItemWrapper>
    </>
  );
};

IssueDetailCommentItem.defaultProps = {
  issue: {},
  comment: {},
};

IssueDetailCommentItem.propTypes = {
  issue: PropTypes.object,
  comment: PropTypes.object,
  user: PropTypes.object,
  setIssue: PropTypes.func,
};

export default IssueDetailCommentItem;
