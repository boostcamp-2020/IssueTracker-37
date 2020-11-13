import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ImgTitleCount from '@molecules/ImgTitleCount';
import MilestoneItem from '@molecules/MilestoneItem';
import NoneDataBox from '@molecules/NoneDataBox';
import { StyledMilestoneContent, StyledMilestoneHeader } from './style';

const Initailize = (milestones, isState) => {
  const data = milestones.filter((milestone) => milestone.state === isState);
  const total = milestones.length;
  const openCount = isState ? data.length : total - data.length;
  const closeCount = !isState ? data.length : total - data.length;

  return { openCount, closeCount, data };
};

const MilestoneContent = (props) => {
  const {
    milestones,
    className,
    onDelete,
    isState,
    onChangeState,
    updateMilestoneState,
  } = props;
  const currMilestones = Initailize(milestones, isState);

  return (
    <StyledMilestoneContent className={cn(className)}>
      <StyledMilestoneHeader>
        <ImgTitleCount
          SVGName={'MILESTONE'}
          spanType="DEFAULT"
          displayCount="none"
          onClick={() => onChangeState(true)}
          color={isState ? 'black' : 'gray'}
        >
          {`${String(currMilestones.openCount)} Opens`}
        </ImgTitleCount>
        <ImgTitleCount
          SVGName={'CLOSED_MILESTON'}
          spanType="DEFAULT"
          displayCount="none"
          onClick={() => onChangeState(false)}
          color={!isState ? 'black' : 'gray'}
        >
          {`${String(currMilestones.closeCount)} Closes`}
        </ImgTitleCount>
      </StyledMilestoneHeader>

      {currMilestones.data.length > 0 ? (
        <>
          {currMilestones.data.map((milestone) => (
            <MilestoneItem
              key={milestone.id}
              milestone={milestone}
              onDelete={onDelete}
              isState={isState}
              updateMilestoneState={updateMilestoneState}
            ></MilestoneItem>
          ))}
        </>
      ) : (
          <>
            <NoneDataBox SVGName="MILESTONE"></NoneDataBox>
          </>
        )}
    </StyledMilestoneContent>
  );
};

MilestoneContent.defaultProps = {};

MilestoneContent.propTypes = {
  milestones: PropTypes.array,
  className: PropTypes.string,
  onDelete: PropTypes.func,
  isState: PropTypes.bool,
  onChangeState: PropTypes.func,
  updateMilestoneState: PropTypes.func,
};

export default MilestoneContent;
