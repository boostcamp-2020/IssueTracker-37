import React from 'react';
import PropTypes from 'prop-types';

import Input from '@atoms/Input';
import Button from '@atoms/Button';
import Span from '@atoms/Span';
import TextArea from '@atoms/TextArea';
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
    <StyledIssueForm Layout={IssueFormProps?.type}>
      {IssueFormProps?.user && IssueFormProps?.type !== 'editIssue' && (
        <Img imgType="AVARTAR_LARGE" src={IssueFormProps?.user?.profile}></Img>
      )}
      {IssueFormProps.type === 'newIssue' && (
        <Input {...IssueFormProps?.inputProps} />
      )}

      <StyledIssueFormContent>
        <StyledTextAreaWrapper>
          <TextArea {...IssueFormProps?.textAreaProps}></TextArea>
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
        {IssueFormProps?.type === 'commentIssue' && IssueFormProps.IssueState && (
          <ImgTitleCount
            className="commentIssue"
            SVGName="CLOSED_ISSUE"
            color="black"
            onClick={IssueFormProps?.buttonProps?.onClickCancel}
          >
            Close Issue
          </ImgTitleCount>
        )}
        {IssueFormProps?.type === 'commentIssue' &&
          !IssueFormProps.IssueState && (
            <Button onClick={IssueFormProps?.buttonProps?.onClickCancel}>
              Reopen Issue
            </Button>
          )}
        {IssueFormProps?.type === 'editIssue' && (
          <Button
            onClick={IssueFormProps?.buttonProps?.onClickCancel}
            color="red"
          >
            {IssueFormProps?.buttonProps?.leftButton}
          </Button>
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
