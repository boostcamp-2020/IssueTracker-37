import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import request from '@lib/axios';
import useFetch from '@hooks/useFetch';
import Header from '@organisms/Header';
import SimpleNavbar from '@organisms/SimpleNavbar';
import MilestoneContent from '@organisms/MilestoneContent';
import Template from './Template';

const MilstonePage = () => {
  const [milestones, setMilestones] = useFetch({
    uri: `/milestone`,
    initialData: [],
  });

  const [isState, setIsState] = useState(true);
  const history = useHistory();
  const onDelete = async (id) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      await request.delete({ uri: `/milestone/${id}` });
      setMilestones([...milestones.filter((milestone) => milestone.id !== id)]);
    }
  };

  const onChangeState = (state) => {
    if (state !== isState) setIsState(state);
  };

  const updateMilestoneState = async (payload) => {
    try {
      const id = payload.id;

      payload.state = !payload.state;
      delete payload.id;
      await request.put({
        uri: `/milestone/${id}`,
        data: payload,
      });

      payload.id = id;
      setMilestones(
        milestones.map((milestone) =>
          milestone.id === id ? payload : milestone,
        ),
      );
    } catch (err) {
      alert('Milestone 업데이트 실패');
    }
  };

  return (
    <Template
      Header={<Header></Header>}
      Navbar={
        <SimpleNavbar
          buttonName="New milestone"
          onClick={() => history.push('/milestone/create')}
        ></SimpleNavbar>
      }
      MilestoneContent={
        <MilestoneContent
          milestones={milestones}
          onDelete={onDelete}
          isState={isState}
          onChangeState={onChangeState}
          updateMilestoneState={updateMilestoneState}
        ></MilestoneContent>
      }
    ></Template>
  );
};

export default MilstonePage;
