import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Span from '@atoms/Span';
import LabelItem from '@molecules/LabelItem';
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

  return (
    <StyledLabelContent className={cn(className)}>
      <StyledLabelListHeader>
        <Span>{labelHeader}</Span>
      </StyledLabelListHeader>

      {labels &&
        labels.map((label) => (
          <LabelItem
            key={label.id}
            label={label}
            isForm={isForm}
            onDelete={() => onDelete(label.id)}
            onEdit={() => onOpenForm(label.id)}
            onClose={onCloseForm}
            onSubmit={onSubmit}
            isDuplicate={isDuplicate}
          ></LabelItem>
        ))}
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
