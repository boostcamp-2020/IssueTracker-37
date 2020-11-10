import React, { useEffect, useState } from 'react';
import request from '@lib/axios';
import Header from '@organisms/Header';
import Navbar from '@organisms/Navbar';
import IssueContent from '@organisms/IssueContent';
import Template from './Template';

const getData = async (resourceName, setData) => {
  const {
    data: { data },
  } = await request.get({
    uri: `/${resourceName}`,
  });

  setData(data);
};

const MainPage = () => {
  // header
  // Navbar => users  labels.length, milestone.length;
  // IssueContent => issues, users, labels, milestones;
  const [issues, setIssues] = useState([]);
  const [users, setUsers] = useState([]);
  const [milestones, setMilestones] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    getData('label', setLabels);
    getData('issue', setIssues);
    getData('milestone', setMilestones);
    getData('user', setUsers);
  }, []);

  return (
    <Template
      Header={<Header></Header>}
      Navbar={
        <Navbar
          labelCount={labels.length}
          milestoneCount={milestones.length}
        ></Navbar>
      }
      IssueContent={
        <IssueContent
          issues={issues}
          milestones={milestones}
          labels={labels}
          users={users}
        ></IssueContent>
      }
    ></Template>
  );
};

export default MainPage;
