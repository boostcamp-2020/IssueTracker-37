import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import IssueLabel from '@atoms/IssueLabel';
import Span from '@atoms/Span';

import { StyledLabelItem } from './style';

const LabelItem = (props) => {
  const { label, className, onEdit, onDelete } = props;

  return (
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
  isForm: PropTypes.number,
};

export default LabelItem;
