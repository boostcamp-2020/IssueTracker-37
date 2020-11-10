import React, { useEffect, useState } from 'react';
import request from '@lib/axios';
import LabelContent from '@organisms/LabelContent';
import Header from '@organisms/Header';
import SimpleNavbar from '@organisms/SimpleNavbar';
import Template from './Template';

const LabelPage = () => {
  const [labels, setLabels] = useState([]);
  const [isForm, setIsForm] = useState(-1);

  const onOpenForm = (id) => {
    setIsForm(id);
  };

  const onCloseForm = (e) => {
    e.preventDefault();
    setIsForm(-1);
  };

  const onSubmit = async (type, payload) => {
    if (type === 'edit') {
      try {
        const id = payload.id;

        delete payload.id;
        await request.put({
          uri: `/label/${id}`,
          data: payload,
        });

        setLabels(
          labels.map((label) => (label.id === id ? { id, ...payload } : label)),
        );
        setIsForm(-1);
      } catch (err) {
        alert('업데이트 실패');
      }
    }
  };

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await request.get({
        uri: `/label`,
      });

      setLabels(data);
    })();
  }, []);

  return (
    <Template
      Header={<Header></Header>}
      Navbar={<SimpleNavbar buttonName="New Label"></SimpleNavbar>}
      LabelContent={
        <LabelContent
          labels={labels}
          setLabels={setLabels}
          isForm={isForm}
          onOpenForm={onOpenForm}
          onCloseForm={onCloseForm}
          onSubmit={onSubmit}
        ></LabelContent>
      }
    ></Template>
  );
};

export default LabelPage;
