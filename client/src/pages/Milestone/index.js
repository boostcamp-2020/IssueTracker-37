import React, { useEffect, useState } from 'react';
import request from '@lib/axios';
import Header from '@organisms/Header';
import SimpleNavbar from '@organisms/SimpleNavbar';
import Template from './Template';

const MilstonePage = () => {
  // useEffect(() => {
  //   (async () => {
  //     const {
  //       data: { data },
  //     } = await request.get({
  //       uri: `/milestone`,
  //     });

  //     setMilestones(data);
  //   })();
  // }, []);

  return (
    <Template
      Header={<Header></Header>}
      Navbar={<SimpleNavbar buttonName="New milestone"></SimpleNavbar>}
    // MilstoneContent={<MilstoneContent></MilstoneContent>}
    ></Template>
  );
};

export default MilstonePage;
