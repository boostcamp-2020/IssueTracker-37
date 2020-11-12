import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Span from '@atoms/Span';
import LabelItem from '@molecules/LabelItem';
import LabelForm from '@molecules/LabelForm';
import { StyledLabelContent, StyledLabelListHeader } from './style';

const LabelContent = (props) => {
  const {
    labels,
    className,
    isForm,
    onOpenForm,
    onCloseForm,
    onSubmit,
    onDelete,
    isDuplicate,
  } = props;

  const labelHeader = `${labels.length} Labels`;

  const componentSelector = (label) => {
    return label.id !== isForm ? (
      <LabelItem
        key={label.id}
        label={label}
        onDelete={() => onDelete(label.id)}
        onEdit={() => onOpenForm(label.id)}
      ></LabelItem>
    ) : (
        <LabelForm
          key={label.id}
          label={label}
          onCloseForm={onCloseForm}
          onDelete={onDelete}
          submitName="Save changes"
          onSubmit={onSubmit}
          formType="edit"
          isDuplicate={isDuplicate}
        ></LabelForm>
      );
  };

  return (
    <StyledLabelContent className={cn(className)}>
      <StyledLabelListHeader>
        <Span>{labelHeader}</Span>
      </StyledLabelListHeader>

      {labels && labels.map((label) => componentSelector(label))}
    </StyledLabelContent>
  );
};

LabelContent.defaultProps = {};

LabelContent.propTypes = {
  labels: PropTypes.array,
  className: PropTypes.string,
  setLabels: PropTypes.func,
  isForm: PropTypes.number,
  setIsForm: PropTypes.func,
  onOpenForm: PropTypes.func,
  onCloseForm: PropTypes.func,
  onSubmit: PropTypes.func,
  isDuplicate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default LabelContent;
