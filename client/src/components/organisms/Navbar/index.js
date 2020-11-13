import React from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import PropTypes from 'prop-types';
import NavButton from '@molecules/NavButton';
import SearchBox from '@molecules/SearchBox';
import Button from '@atoms/Button';

import { StyledNavbar } from './style';

const NavBar = (props) => {
  const {
    className,
    labelCount,
    milestoneCount,
    options,
    onFilter,
    inputValue,
    onChange,
    onClick,
  } = props;
  const history = useHistory();

  return (
    <StyledNavbar className={cn(className)}>
      <SearchBox
        afterContent="▼"
        placeholder="Search all issues"
        className="searchBox"
        onFilter={onFilter}
        options={options}
        inputValue={inputValue}
        onChange={onChange}
        onClick={onClick}
      >
        Filter
      </SearchBox>
      <NavButton
        labelCount={labelCount}
        milestoneCount={milestoneCount}
        className="navBtn"
        displayCount="imgTitleCount"
      ></NavButton>
      <Button
        buttonType="GREEN"
        className="newIssueBtn"
        onClick={() => history.push('/issue')}
      >
        New issue
      </Button>
    </StyledNavbar>
  );
};

NavBar.defaultProps = {
  milestoneCount: 0,
  labelCount: 0,
  options: [
    { id: 1, title: 'Open issues' },
    { id: 2, title: 'Your issues' },
    { id: 3, title: 'Everything assigned to you' },
    { id: 4, title: 'Closed issues' },
  ],
};
NavBar.propTypes = {
  className: PropTypes.string,
  milestoneCount: PropTypes.number,
  labelCount: PropTypes.number,
  options: PropTypes.array,
  onFilter: PropTypes.func,
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default NavBar;
