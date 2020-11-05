import React from 'react';
import Header from '@organisms/Header';
import SearchBox from '@molecules/SearchBox';

const main = () => {
  return (
    <>
      <Header />
      <SearchBox afterContent="▼" placeholder="is:issue is:open">
        Filter
      </SearchBox>
    </>
  );
};

export default main;
