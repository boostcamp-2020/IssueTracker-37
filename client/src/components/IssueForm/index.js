import React from 'react';
import PropTypes from 'prop-types';

import Input from '@atoms/Input';
import Button from '@atoms/Button';
import Span from '@atoms/Span';
import Textarea from '@atoms/Textarea';
import Img from '@atoms/Img';

import {
  StyledIssueForm,
  StyledIssueFormContent,
  StyledIssueFormFooter,
  StyledTextAreaWrapper,
  HiddenImageInput,
} from './style';
import ImgTitleCount from '../molecules/ImgTitleCount';

const IssueForm = ({ IssueFormProps, visible, IssueState }) => {

  return (
    <StyledIssueForm Layout="commentIssue">
      {IssueFormProps?.user && (
        <Img imgType="AVARTAR_LARGE" src={IssueFormProps?.user?.profile}></Img>
      )}
      <Input {...IssueFormProps?.inputProps} />
      <StyledIssueFormContent>
        <StyledTextAreaWrapper>
          <Textarea {...IssueFormProps?.textAreaProps}></Textarea>
          {visible && (
            <Span spanType="SMALL" color="GRAY">
              {IssueFormProps?.textAreaProps.value.length} Character
            </Span>
          )}
        </StyledTextAreaWrapper>
        <Span
          color="GRAY"
          onClick={() => IssueFormProps?.ImageProps?.imageRef?.current.click()}
        >
          Add Images
        </Span>
        <HiddenImageInput
          type="file"
          ref={IssueFormProps?.ImageProps?.imageRef}
          onChange={IssueFormProps?.ImageProps?.onChange}
        />
      </StyledIssueFormContent>
      <StyledIssueFormFooter Layout={IssueFormProps?.type}>
        {IssueFormProps?.type === 'newIssue' && (
          <Span
            color="GRAY"
            onClick={IssueFormProps?.buttonProps?.onClickCancel}
          >
            {IssueFormProps?.buttonProps?.leftButton}
          </Span>
        )}
        {IssueFormProps?.type === 'commentIssue' && IssueState && (
          <ImgTitleCount
            className="commentIssue"
            SVGName="CLOSED_ISSUE"
            color="black"
          >
            Close Issue
          </ImgTitleCount>
        )}
        {IssueFormProps?.type === 'commentIssue' && !IssueState && (
          <Button>Reopen Issue</Button>
        )}
        {IssueFormProps?.type === 'editIssue' && (
          <Button color="red">{IssueFormProps?.buttonProps?.leftButton}</Button>
        )}
        <Button
          isActived={IssueFormProps?.buttonProps?.isActived}
          buttonType="GREEN"
          onClick={IssueFormProps?.buttonProps?.onClickSubmit}
        >
          {IssueFormProps?.buttonProps?.rightButton}
        </Button>
      </StyledIssueFormFooter>
    </StyledIssueForm>
  );
};

IssueForm.defaultProps = {};

IssueForm.propTypes = {
  IssueFormProps: PropTypes.object,
  visible: PropTypes.bool,
  imageRef: PropTypes.object,
  IssueState: PropTypes.string,
};

export default IssueForm;
