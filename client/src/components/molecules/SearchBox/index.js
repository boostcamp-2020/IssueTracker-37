import React from 'react';
import PropTypes from 'prop-types';

import Input from '@atoms/Input';
import Button from '@atoms/Button';

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
    onClick,
    children,
  } = props;

  const searchbar = 'searchbox';

  return (
    <StyledSearchBox>
      <Button
        onClick={onClick}
        afterContent={afterContent}
        className={searchbar}
      >
        {children}
      </Button>
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
  onClick: PropTypes.func,
};

export default SearchBox;
