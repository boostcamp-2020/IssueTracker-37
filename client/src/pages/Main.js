import React from 'react';
import Header from '@organisms/Header';
import NavBar from '@organisms/Navbar';

const main = () => {
  return (
    <>
      <Header />
      <NavBar labelCount={1} milestoneCount={1}></NavBar>
      {/* <Dropdown title={title} items={items}></Dropdown> */}
    </>
  );
};

export default main;
