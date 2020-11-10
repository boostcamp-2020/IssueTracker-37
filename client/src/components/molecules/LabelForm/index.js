import React, { useState } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import IssueLabel from '@atoms/IssueLabel';
import Label from '@atoms/Label';
import Button from '@atoms/Button';
import Span from '@atoms/Span';
import Input from '@atoms/Input';
import SVG from '@atoms/SVG';
import { getRandomColor, getFontColor } from '@utils/color';

import {
  StyledLabelForm,
  StyledRandomButton,
  StyledItemLabel,
  StyledFormContainer,
} from './style';

const LabelForm = (props) => {
  const {
    label,
    className,
    onCloseForm,
    onDelete,
    submitName,
    onSubmit,
    formType,
    isDuplicate,
  } = props;

  const InitialState = {
    title: label.title,
    description: label.description,
    color: label.color,
  };

  const [labelForm, setLabelForm] = useState(InitialState);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === 'title') {
      let btnState = 'disabled';

      if (value.length > 0) {
        if (label.title === value || !isDuplicate(value)) {
          btnState = 'enabled';
        }
      }
      console.log(btnState);
    }

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
          {labelForm.title.length > 0 ? labelForm.title : 'Label preview'}
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
            placeholder="Label name"
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
            placeholder="Description (optional)"
          />
        </div>
        <div className="label-color-form">
          <Label htmlFor="color">Color</Label>
          <div className="label-color-input">
            <StyledRandomButton
              color={labelForm.color}
              onClick={onClickNewColor}
            >
              <SVG
                SVGName="NEW_COLOR"
                color={getFontColor(labelForm.color)}
                size="SMALL"
              ></SVG>
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
          <Button type="submit" buttonType="GREEN" onClick={onClick}>
            {submitName}
          </Button>
        </div>
      </StyledFormContainer>
    </StyledLabelForm>
  );
};

LabelForm.defaultProps = {
  onEdit: () => { },
  label: {
    title: '',
    description: '',
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
  isDuplicate: PropTypes.func,
};

export default LabelForm;
