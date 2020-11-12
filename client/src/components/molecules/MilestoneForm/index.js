import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import cn from 'classnames';
import Button from '@atoms/Button';
import Input from '@atoms/Input';
import Label from '@atoms/Label';
import TextArea from '@atoms/TextArea';

import {
  StyledMilestoneForm,
  StyledFormContainer,
  StyledFormActions,
  StyledFormGroup,
} from './style';

const MilestoneForm = (props) => {
  const {
    milestone,
    onSubmit,
    onCloseMilestone,
    className,
    setMilestone,
    formType,
  } = props;
  const [isActived, setIsActived] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (milestone.title.length > 0) {
      setIsActived(true);
    }
  }, [milestone]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === 'title') {
      if (value.length > 0) {
        setIsActived(true);
      } else {
        setIsActived(false);
      }
    }
    setMilestone({ ...milestone, [name]: value });
  };

  const onAction = (e, fn) => {
    e.preventDefault();
    fn();
  };

  return (
    <StyledMilestoneForm className={cn(className)}>
      <hr></hr>
      <StyledFormContainer>
        <StyledFormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            value={milestone.title}
            name="title"
            placeholder="Title"
            onChange={onChangeHandler}
            className="input-small"
          ></Input>
        </StyledFormGroup>
        <StyledFormGroup>
          <Label htmlFor="date">Due date (optional)</Label>
          <Input
            id="date"
            type="date"
            value={milestone.due_date}
            name="due_date"
            onChange={onChangeHandler}
            className="input-small"
          ></Input>
        </StyledFormGroup>
        <StyledFormGroup>
          <Label htmlFor="description">Description (optional)</Label>
          <TextArea
            id="description"
            name="description"
            textAreaType="MILESTONE"
            value={milestone.description}
            onChange={onChangeHandler}
            className="input-large"
          ></TextArea>
        </StyledFormGroup>
        <hr></hr>
        <StyledFormActions>
          <Button
            onClick={(e) => onAction(e, () => history.push('/milestone'))}
          >
            Cancel
          </Button>
          {formType === 'edit' && (
            <Button onClick={(e) => onAction(e, onCloseMilestone)}>
              {!milestone.state ? `Reopen milestone` : 'Close milestone'}
            </Button>
          )}
          <Button
            isActived={isActived}
            type="submit"
            buttonType="GREEN"
            onClick={(e) => onAction(e, onSubmit)}
          >
            {formType === 'edit' ? 'Save changes' : 'Create milestone'}
          </Button>
        </StyledFormActions>
      </StyledFormContainer>
    </StyledMilestoneForm>
  );
};

MilestoneForm.defaultProps = {
  milestone: {
    title: '',
    due_date: null,
    description: '',
    state: true,
  },
};

MilestoneForm.propTypes = {
  milestone: PropTypes.object,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  onCloseMilestone: PropTypes.func,
  setMilestone: PropTypes.func,
  formType: PropTypes.string,
};

export default MilestoneForm;
