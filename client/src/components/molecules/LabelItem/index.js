import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import IssueLabel from '@atoms/IssueLabel';
import Span from '@atoms/Span';
import LabelForm from '@molecules/LabelForm';

import { StyledLabelItem } from './style';

const LabelItem = (props) => {
  const {
    label,
    className,
    onEdit,
    onDelete,
    isForm,
    onClose,
    onSubmit,
  } = props;

  return (
    <>
      {isForm !== label.id ? (
        <StyledLabelItem className={cn(className)}>
          <div className="item-label">
            <IssueLabel className="label" labelColor={label.color}>
              {label.title}
            </IssueLabel>
          </div>
          <div className="item-description">
            <Span>{label.description}</Span>
          </div>
          <div className="item-buttons">
            <Span onClick={onEdit}>Edit</Span>
            <Span onClick={onDelete}>Delete</Span>
          </div>
        </StyledLabelItem>
      ) : (
          <LabelForm
            label={label}
            onCloseForm={onClose}
            onDelete={onDelete}
            submitName="Save changes"
            onSubmit={onSubmit}
            formType="edit"
          ></LabelForm>
        )}
    </>
  );
};

LabelItem.defaultProps = {
  onEdit: () => { },
  onDelete: () => { },
};

LabelItem.propTypes = {
  label: PropTypes.object,
  className: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onClose: PropTypes.func,
  isForm: PropTypes.number,
  onSubmit: PropTypes.func,
};

export default LabelItem;
