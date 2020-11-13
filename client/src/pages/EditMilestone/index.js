import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import request from '@lib/axios';
import useFetch from '@hooks/useFetch';
import Header from '@organisms/Header';
import SimpleNavbar from '@organisms/SimpleNavbar';
import MilestoneForm from '@molecules/MilestoneForm';
import Template from './Template';

const initialData = {
  title: '',
  description: '',
  due_date: '',
  state: true,
};

const EditMilestonePage = () => {
  const { id } = useParams();

  const history = useHistory();
  const [milestone, setMilestone] = useFetch({
    uri: `/milestone/${id}`,
    initialData,
  });

  const onSubmit = async () => {
    try {
      await request.put({
        uri: `/milestone/${id}`,
        data: milestone,
      });

      history.replace('/milestone');
    } catch (err) {
      alert('마일스톤 업데이트에 실패했습니다.');
    }
  };

  const onCloseMilestone = async () => {
    const payload = { ...milestone };

    payload.state = !payload.state;
    delete payload.id;
    try {
      await request.put({
        uri: `/milestone/${id}`,
        data: payload,
      });

      history.replace('/milestone');
    } catch (err) {
      alert('마일스톤 업데이트에 실패했습니다.');
    }
  };

  return (
    <Template
      Header={<Header></Header>}
      Navbar={<SimpleNavbar></SimpleNavbar>}
      MilestoneForm={
        <MilestoneForm
          milestone={milestone}
          onSubmit={onSubmit}
          onCloseMilestone={onCloseMilestone}
          setMilestone={setMilestone}
          formType="edit"
        ></MilestoneForm>
      }
    ></Template>
  );
};

export default EditMilestonePage;
