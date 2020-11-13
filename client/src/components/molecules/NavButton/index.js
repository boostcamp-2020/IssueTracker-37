import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';

import cn from 'classnames';

import { StyledNavButton } from './style';
import ImgTitleCount from '../ImgTitleCount';

const NavButton = (props) => {
  const { labelCount, milestoneCount, className, displayCount } = props;
  const history = useHistory();
  const location = useLocation();

  return (
    <StyledNavButton className={cn(className)}>
      <ImgTitleCount
        SVGName={'LABEL'}
        count={labelCount}
        className={
          location.pathname.includes('label') ? 'label selected' : 'label'
        }
        onClick={() => history.push('/label')}
        displayCount={displayCount}
      >
        Labels
      </ImgTitleCount>
      <ImgTitleCount
        SVGName={'MILESTONE'}
        count={milestoneCount}
        className={
          location.pathname.includes('milestone')
            ? 'milestone selected'
            : 'milestone'
        }
        onClick={() => history.push('/milestone')}
        displayCount={displayCount}
      >
        Milestones
      </ImgTitleCount>
    </StyledNavButton>
  );
};

NavButton.defaultProps = {};

NavButton.propTypes = {
  labelCount: PropTypes.number,
  milestoneCount: PropTypes.number,
  className: PropTypes.string,
  displayCount: PropTypes.string,
};

export default NavButton;
