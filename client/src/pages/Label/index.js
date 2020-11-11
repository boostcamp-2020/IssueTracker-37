import React, { useEffect, useState } from 'react';
import request from '@lib/axios';
import LabelContent from '@organisms/LabelContent';
import Header from '@organisms/Header';
import SimpleNavbar from '@organisms/SimpleNavbar';
import LabelForm from '@molecules/LabelForm';
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

  const onToggle = (e) => {
    e.preventDefault();
    if (isForm !== -1) {
      setIsForm(-1);
    } else {
      setIsForm(0);
    }
  };
  const onDelete = async (id) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      await request.delete({ uri: `/label/${id}` });
      setLabels([...labels.filter((label) => label.id !== id)]);
    }
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
        alert('Label 업데이트 실패');
      }
    } else if (type === 'create') {
      try {
        delete payload.id;
        const {
          data: { data },
        } = await request.post({
          uri: `/label`,
          data: payload,
        });

        delete data.updated_at;
        delete data.created_at;

        setLabels([data, ...labels]);
        setIsForm(-1);
      } catch (err) {
        alert('Label 생성 실패');
      }
    }
  };

  const isDuplicate = (title) => {
    const result = labels.find((label) => label.title === title);

    return !!result;
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
      Navbar={
        <SimpleNavbar onClick={onToggle} buttonName="New label"></SimpleNavbar>
      }
      // onSubmit, onCloseForm, submitName, formType
      LabelForm={
        isForm === 0 && (
          <LabelForm
            onSubmit={onSubmit}
            onCloseForm={onCloseForm}
            submitName="Create label"
            formType="create"
            isDuplicate={isDuplicate}
          ></LabelForm>
        )
      }
      LabelContent={
        <LabelContent
          labels={labels}
          setLabels={setLabels}
          isForm={isForm}
          onOpenForm={onOpenForm}
          onCloseForm={onCloseForm}
          onSubmit={onSubmit}
          isDuplicate={isDuplicate}
          onDelete={onDelete}
        ></LabelContent>
      }
    ></Template>
  );
};

export default LabelPage;
