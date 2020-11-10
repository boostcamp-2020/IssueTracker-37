import React, { useState } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import IssueLabel from '@atoms/IssueLabel';
import Label from '@atoms/Label';
import Button from '@atoms/Button';
import Span from '@atoms/Span';
import Input from '@atoms/Input';
import SVG from '@atoms/SVG';

import {
  StyledLabelForm,
  StyledRandomButton,
  StyledItemLabel,
  StyledFormContainer,
} from './style';

const getRandomColor = () => {
  const colorCode = `#${Math.round(Math.random() * 255)
      .toString(16)
      .padStart(2, '0') +
    Math.round(Math.random() * 255)
      .toString(16)
      .padStart(2, '0') +
    Math.round(Math.random() * 255)
      .toString(16)
      .padStart(2, '0')
    }`;

  return colorCode;
};

const LabelForm = (props) => {
  const {
    label,
    className,
    onCloseForm,
    onDelete,
    submitName,
    onSubmit,
    formType,
  } = props;

  const InitialState = {
    title: label.title,
    description: label.description,
    color: label.color,
  };

  const [labelForm, setLabelForm] = useState(InitialState);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setLabelForm({ ...labelForm, [name]: value });
  };

  const onClickNewColor = () => {
    setLabelForm({ ...labelForm, color: getRandomColor() });
  };

  const onClick = (e) => {
    e.preventDefault();
    onSubmit(formType, { id: label.id, ...labelForm });
  };

  return (
    <StyledLabelForm className={cn(className)}>
      <StyledItemLabel>
        <IssueLabel className="label" labelColor={labelForm.color}>
          {labelForm.title}
        </IssueLabel>
        {onDelete && (
          <Span className="deleteButton" onClick={onDelete}>
            Delete
          </Span>
        )}
      </StyledItemLabel>
      <StyledFormContainer>
        <div className="label-title-form">
          <Label htmlFor="title">Label title</Label>
          <Input
            id="title"
            type="text"
            name="title"
            value={labelForm.title}
            onChange={onChangeHandler}
          />
        </div>
        <div className="label-description-form">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            type="text"
            name="description"
            value={labelForm.description}
            onChange={onChangeHandler}
          />
        </div>
        <div className="label-color-form">
          <Label htmlFor="color">Color</Label>
          <div className="label-color-input">
            <StyledRandomButton onClick={onClickNewColor}>
              <SVG SVGName="NEW_COLOR" color="white" size="SMALL"></SVG>
            </StyledRandomButton>
            <Input
              id="color"
              type="text"
              name="color"
              value={labelForm.color}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="item-buttons">
          <Button onClick={onCloseForm}>Cancel</Button>
          <Button buttonType="GREEN" onClick={onClick}>
            {submitName}
          </Button>
        </div>
      </StyledFormContainer>
    </StyledLabelForm>
  );
};

LabelForm.defaultProps = {
  onEdit: () => { },
  onDelete: () => { },
  label: {
    title: 'sample',
    color: getRandomColor(),
  },
  onSubmit: () => { },
};

LabelForm.propTypes = {
  label: PropTypes.object,
  className: PropTypes.string,
  onCloseForm: PropTypes.func,
  onDelete: PropTypes.func,
  submitName: PropTypes.string,
  onSubmit: PropTypes.func,
  formType: PropTypes.string,
};

export default LabelForm;
