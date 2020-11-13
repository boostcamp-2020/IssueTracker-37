import React, { useEffect, useState } from 'react';
import request from '@lib/axios';
import { parser, filter } from '@utils/filter';
import Header from '@organisms/Header';
import Navbar from '@organisms/Navbar';
import IssueContent from '@organisms/IssueContent';
import useFetch from '@hooks/useFetch';
import Template from './Template';

const HEADER_CHECK = 0;
const sortOptionsConverter = {
  Newest: 'created-desc',
  Oldest: 'created-asc',
  'Most commented': 'comments-desc ',
  'Least commented': 'comments-asc',
  'Recently updated': 'updated-desc',
  'Least recently updated': 'updated-asc',
};

const searchBoxOptionsConverter = {
  'Open issues': { type: 'is', value: 'open' },
  'Closed issues': { type: 'is', value: 'closed' },
  'Your issues': { type: 'author', value: '내이름' },
  'Everything assigned to you': { type: 'assignee', value: '내이름' },
};

const initialFilterOptions = {
  titles: [],
  options: {},
};

const filterOptionsToString = (filterOptions) => {
  let text = `${filterOptions.titles.join(' ')}`;

  for (const [key, value] of Object.entries(filterOptions.options)) {
    text += ` ${key}:${value}`;
  }

  return text;
};

const MainPage = () => {
  const [filterOptions, setFilterOptions] = useState(initialFilterOptions);
  const [issues, setIssues] = useFetch({
    uri: '/issue',
    initialData: [],
    option: { name: 'checked', value: false },
  });
  const [users] = useFetch({ uri: '/user', initialData: [] });
  const [milestones] = useFetch({
    uri: '/milestone',
    initialData: [],
  });
  const [labels] = useFetch({ uri: '/label', initialData: [] });
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [totalCheck, setTotalCheck] = useState({
    id: HEADER_CHECK,
    value: false,
  });

  useEffect(() => {
    setInputValue(filterOptionsToString(filterOptions));
    setFilteredIssues(filter(issues, filterOptions));
  }, [filterOptions]);

  useEffect(() => {
    setFilteredIssues([...issues]);
  }, [issues]);

  const onFilter = (input) => {
    const options = parser(input);

    setFilterOptions(options);
  };

  const onBulkUpdate = async (value) => {
    const state = value === 'Open';

    const checkedList = filteredIssues.reduce((acc, issue) => {
      if (issue.checked) {
        acc.push(issue.id);
      }
      return acc;
    }, []);

    try {
      await request.put({
        uri: '/issue',
        data: { issues: checkedList, state },
      });
      const {
        data: { data },
      } = await request.get({ uri: 'issue' });

      setTotalCheck({ ...totalCheck, value: false });
      setIssues(data.map((v) => ({ ...v, checked: false })));
    } catch (err) {
      alert('업데이트를 실패했습니다.');
    }
  };

  const dropdownEventHandler = (type, value) => {
    if (type !== 'markAs') {
      const temp = { ...filterOptions };
      let tempValue = value;

      if (tempValue.includes(' ')) {
        tempValue = `"${tempValue}"`;
      }

      if (type === 'searchBox') {
        const searchOption = searchBoxOptionsConverter[value];

        temp.options = {};
        temp.options[searchOption.type] = searchOption.value;
      } else {
        temp.options[type] =
          type === 'sort' ? sortOptionsConverter[tempValue] : tempValue;
      }

      setFilterOptions(temp);
    } else {
      onBulkUpdate(value);
    }
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onCheckBoxChange = (e) => {
    const id = Number(e.target.value);
    const isChecked = e.target.checked;

    let temp = [];

    if (id === HEADER_CHECK) {
      temp = filteredIssues.map((issue) => {
        const newIssue = { ...issue };

        newIssue.checked = isChecked;

        return newIssue;
      });
      setTotalCheck({ ...totalCheck, value: !totalCheck.value });
    } else {
      const index = filteredIssues.findIndex((issue) => issue.id === id);

      temp = [...filteredIssues];
      temp[index].checked = isChecked;

      if (filteredIssues.every((issue) => issue.checked))
        setTotalCheck({ ...totalCheck, value: true });
      else setTotalCheck({ ...totalCheck, value: false });
    }

    setFilteredIssues(temp);
  };

  return (
    <Template
      Header={<Header></Header>}
      Navbar={
        <Navbar
          labelCount={labels.length}
          milestoneCount={milestones.length}
          onFilter={onFilter}
          inputValue={inputValue}
          onChange={onChange}
          onClick={dropdownEventHandler}
        ></Navbar>
      }
      IssueContent={
        <IssueContent
          issues={filteredIssues}
          milestones={milestones}
          labels={labels}
          users={users}
          onClick={dropdownEventHandler}
          onCheckBoxChange={onCheckBoxChange}
          totalCheck={totalCheck}
        ></IssueContent>
      }
    ></Template>
  );
};

export default MainPage;
