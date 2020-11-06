import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Input from '@atoms/Input';
import Button from '@atoms/Button';
import Dropdown from '@molecules/Dropdown';

import { StyledSearchBox } from './style';

const SearchBox = (props) => {
  const {
    type,
    value,
    name,
    placeholder,
    id,
    afterContent,
    onChange,
    options,
    children,
    className,
  } = props;

  const searchbar = 'searchbox';
  const [isFilter, setIsFilter] = useState(false);

  const onClick = () => {
    setIsFilter(!isFilter);
  };

  const title = 'Filter issues';

  return (
    <StyledSearchBox className={cn(className)}>
      <Button
        onClick={onClick}
        afterContent={afterContent}
        className={searchbar}
      >
        {children}
      </Button>
      {isFilter ? <Dropdown title={title} items={options}></Dropdown> : ``}
      <Input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        className={searchbar}
      />
    </StyledSearchBox>
  );
};

SearchBox.defaultProps = {};

SearchBox.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  afterContent: PropTypes.string,
  children: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  options: PropTypes.array,
};

export default SearchBox;
