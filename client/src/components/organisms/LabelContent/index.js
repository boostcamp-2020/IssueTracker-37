import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Span from '@atoms/Span';
import LabelItem from '@molecules/LabelItem';
import request from '@lib/axios';
import { StyledLabelContent, StyledLabelListHeader } from './style';

const LabelContent = (props) => {
  const {
    labels,
    className,
    setLabels,
    isForm,
    onOpenForm,
    onCloseForm,
    onSubmit,
    isDuplicate,
  } = props;

  const onDelete = async (id) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      await request.delete({ uri: `/label/${id}` });
      setLabels([...labels.filter((label) => label.id !== id)]);
    }
  };

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
};

export default LabelContent;
