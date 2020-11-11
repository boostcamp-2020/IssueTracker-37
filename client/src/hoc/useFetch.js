import { useState, useEffect } from 'react';
import request from '@lib/axios';

const useFetch = (uri, option) => {
  const [initialData, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await request.get({ uri });

      if (option) {
        setData(data.map((v) => ({ ...v, [option.name]: option.value })));
      }
      if (!option) setData(data);
    })();
  }, []);

  return [initialData, setData];
};

export default useFetch;
