import React, { useEffect, useState } from 'react';
import request from '@lib/axios';
import Header from '@organisms/Header';
import Navbar from '@organisms/Navbar';
import IssueContent from '@organisms/IssueContent';
import Template from './Template';

const MainPage = () => {
  // header
  // Navbar => users  labels.length, milestone.length;
  // IssueContent => issues, users, labels, milestones;
  const [issues, setIssue] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await request.get({
        uri: '/issue',
      });

      setIssue(data);
    })();
  }, []);
  return (
    <Template
      Header={<Header></Header>}
      Navbar={<Navbar labelCount={1} milestoneCount={1}></Navbar>}
      IssueContent={<IssueContent issues={issues}></IssueContent>}
    ></Template>
  );
};

export default MainPage;
