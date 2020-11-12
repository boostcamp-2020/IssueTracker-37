import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import request from '@lib/axios';
import Header from '@organisms/Header';
import SubHeader from '@molecules/SubHeader';
import MilestoneForm from '@molecules/MilestoneForm';
import Span from '@atoms/Span';
import Template from './Template';

const InitailState = {
  title: '',
  description: '',
  due_date: '',
  state: true,
};

const CreateMilestonePage = () => {
  const history = useHistory();
  const [milestone, setMilestone] = useState(InitailState);

  const SubHeaderDescription =
    'Create a new milestone to help organize your issues and pull requests. Learn more about milestones and issues.';

  const onSubmit = async () => {
    try {
      await request.post({
        uri: `/milestone`,
        data: milestone,
      });
      history.replace('/milestone');
    } catch (err) {
      alert('이미 존재하는 title 입니다.');
    }
  };

  return (
    <Template
      Header={<Header></Header>}
      SubHeader={
        <SubHeader
          title="New milestone"
          description={SubHeaderDescription}
        ></SubHeader>
      }
      MilestoneForm={
        <MilestoneForm
          milestone={milestone}
          onSubmit={onSubmit}
          setMilestone={setMilestone}
          formType="create"
        ></MilestoneForm>
      }
    ></Template>
  );
};

export default CreateMilestonePage;
