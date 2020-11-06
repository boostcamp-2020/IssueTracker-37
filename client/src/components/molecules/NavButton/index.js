import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import labelImg from '@img/label.png';
import milestoneImg from '@img/MilestoneImg.png';
import cn from 'classnames';

import { StyledNavButton } from './style';
import ImgTitleCount from '../ImgTitleCount';

const NavButton = (props) => {
  const { labelCount, milestoneCount, className } = props;
  const history = useHistory();

  return (
    <StyledNavButton className={cn(className)}>
      <ImgTitleCount
        src={labelImg}
        alt="라벨 아이콘"
        count={labelCount}
        className="label"
        onClick={() => history.push('/label')}
      >
        Labels
      </ImgTitleCount>
      <ImgTitleCount
        src={milestoneImg}
        alt="마일스톤 아이콘"
        count={milestoneCount}
        onClick={() => history.push('/milestone')}
      >
        Milestones
      </ImgTitleCount>
    </StyledNavButton>
  );
};

ImgTitleCount.defaultProps = {};

ImgTitleCount.propTypes = {
  labelCount: PropTypes.number,
  milestoneCount: PropTypes.number,
  className: PropTypes.string,
};

export default NavButton;
