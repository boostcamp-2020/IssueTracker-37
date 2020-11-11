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

const IssueForm = ({ IssueFormProps, visible }) => {
  return (
    <StyledIssueForm>
      <Img imgType="AVARTAR_LARGE" src={IssueFormProps.user.profile}></Img>
      <Input {...IssueFormProps.inputProps} />
      <StyledIssueFormContent>
        <StyledTextAreaWrapper>
          <Textarea {...IssueFormProps.textAreaProps}></Textarea>
          {visible && (
            <Span spanType="SMALL" color="GRAY">
              {IssueFormProps.textAreaProps.value.length} Character
            </Span>
          )}
        </StyledTextAreaWrapper>
        <Span
          color="GRAY"
          onClick={() => IssueFormProps.ImageProps.imageRef.current.click()}
        >
          Add Images
        </Span>
        <HiddenImageInput
          type="file"
          ref={IssueFormProps.ImageProps.imageRef}
          onChange={IssueFormProps.ImageProps.onChange}
        />
      </StyledIssueFormContent>
      <StyledIssueFormFooter>
        <Span color="GRAY" onClick={IssueFormProps.buttonProps.onClickCancel}>
          Cancle
        </Span>
        <Button
          isActived={IssueFormProps.buttonProps.isActived}
          buttonType="GREEN"
          onClick={IssueFormProps.buttonProps.onClickSubmit}
        >
          Submit New Issue
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
};

export default IssueForm;
