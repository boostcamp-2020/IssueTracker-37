import React from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import PropTypes from 'prop-types';
import NavButton from '@molecules/NavButton';
import SearchBox from '@molecules/SearchBox';
import Button from '@atoms/Button';

import { StyledNavbar } from './style';

const NavBar = (props) => {
  const { className, labelCount, milestoneCount } = props;
  const history = useHistory();
  const options = [
    'Open issues',
    'Your issues',
    'Everything assigned to you',
    'Everything mentioning you',
    'Closed issues',
  ];

  return (
    <StyledNavbar className={cn(className)}>
      <SearchBox
        afterContent="▼"
        placeholder="is:issue is:open"
        className="searchBox"
        options={options}
      >
        Filter
      </SearchBox>
      <NavButton
        labelCount={labelCount}
        milestoneCount={milestoneCount}
        className="navBtn"
      ></NavButton>
      <Button
        buttonType="GREEN"
        className="newIssueBtn"
        onClick={() => history.push('/createIssue')}
      >
        New issue
      </Button>
    </StyledNavbar>
  );
};

NavBar.defaultProps = {
  milestoneCount: 0,
  labelCount: 0,
};
NavBar.propTypes = {
  className: PropTypes.string,
  milestoneCount: PropTypes.number,
  labelCount: PropTypes.number,
};

export default NavBar;
