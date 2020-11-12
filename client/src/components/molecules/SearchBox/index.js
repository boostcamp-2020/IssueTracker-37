import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Input from '@atoms/Input';
import DropdownButton from '@molecules/DropdownButton';

import { StyledSearchBox } from './style';

const SearchBox = (props) => {
  const {
    inputValue,
    placeholder,
    afterContent,
    options,
    onFilter,
    className,
    onChange,
    onClick,
  } = props;

  const searchbar = 'searchbox';

  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      onFilter(inputValue);
    }
  };

  return (
    <StyledSearchBox className={cn(className)}>
      <DropdownButton
        className="search-dropdown"
        buttonName="Label"
        title="Filters"
        dropdownHeader="Filter Issues"
        spanType="DEFAULT"
        color="BLACK"
        items={options}
        afterContent={afterContent}
        onClick={onClick}
        dropdownType="searchBox"
      ></DropdownButton>

      <Input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onKeyPress={onKeyPressHandler}
        className={searchbar}
        onChange={onChange}
      />
    </StyledSearchBox>
  );
};

SearchBox.defaultProps = {};

SearchBox.propTypes = {
  type: PropTypes.string,
  inputValue: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  afterContent: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  options: PropTypes.array,
  onFilter: PropTypes.func,
  onClick: PropTypes.func,
};

export default SearchBox;
