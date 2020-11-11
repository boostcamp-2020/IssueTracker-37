import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import request from '@lib/axios';
import Header from '@organisms/Header';
import SimpleNavbar from '@organisms/SimpleNavbar';
import MilestoneForm from '@molecules/MilestoneForm';
import Template from './Template';

const InitailState = {
  title: '',
  description: '',
  due_date: '',
  state: true,
};

const EditMilestonePage = () => {
  const { id } = useParams();

  const history = useHistory();
  const [milestone, setMilestone] = useState(InitailState);

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await request.get({ uri: `/milestone/${id}` });

      if (data.due_date) data.due_date = data.due_date.substring(0, 10);
      else data.due_date = '';
      setMilestone(data);
    })();
  }, []);

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
