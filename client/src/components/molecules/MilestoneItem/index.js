import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import ImgTitleCount from '@molecules/ImgTitleCount';
import ProgressBar from '@molecules/ProgressBar';
import Span from '@atoms/Span';
import { StyledMilestoneItem } from './style';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const getDueDate = (dueDate) => {
  const date = new Date(dueDate);

  if (!dueDate) return 'No due date';
  return `Due by ${monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
};

const getRate = (milestone) => {
  const total = milestone.Issues.length;
  const open = milestone.Issues.filter((issue) => issue.state === true).length;
  const close = total - open;
  const rate = total > 0 ? (close / total) * 100 : 0;

  return {
    rate: Math.round(rate),
    open: String(open),
    close: String(close),
  };
};
const MilestoneItem = (props) => {
  const {
    milestone,
    isState,
    className,
    onDelete,
    updateMilestoneState,
  } = props;
  const history = useHistory();
  const issueState = getRate(milestone);
  const changeButton = isState ? 'Close' : 'Reopen';

  return (
    <StyledMilestoneItem className={cn(className)}>
      <div>
        <div className="title">
          <Span fontWeight="bold">{milestone.title}</Span>
        </div>
        <ImgTitleCount
          SVGName={'CALENDAR'}
          spanType="SMALL"
          displayCount="none"
          color="GRAY"
          className="dueDate"
        >
          {getDueDate(milestone.due_date)}
        </ImgTitleCount>
        <div className="description">
          <Span spanType="SMALL" color="GRAY">
            {milestone.description}
          </Span>
        </div>
      </div>

      <div>
        <div className="rate">
          <ProgressBar percent={issueState.rate} />
        </div>

        <div className="states">
          <Span>{`${issueState.rate}% complete`}</Span>
          <Span>{`${issueState.open} opend`}</Span>
          <Span>{`${issueState.close} closed`}</Span>
        </div>
        <div className="buttons">
          <Span
            color="#2e7adc"
            onClick={() => history.push(`/milestone/edit/${milestone.id}`)}
          >
            Edit
          </Span>
          <Span color="#2e7adc" onClick={() => updateMilestoneState(milestone)}>
            {changeButton}
          </Span>
          <Span color="#d2424d" onClick={() => onDelete(milestone.id)}>
            Delete
          </Span>
        </div>
      </div>
    </StyledMilestoneItem>
  );
};

MilestoneItem.defaultProps = {
  onDelete: () => { },
};

MilestoneItem.propTypes = {
  milestone: PropTypes.object,
  isState: PropTypes.bool,
  className: PropTypes.string,
  onDelete: PropTypes.func,
  updateMilestoneState: PropTypes.func,
};

export default MilestoneItem;
