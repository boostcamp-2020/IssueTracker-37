import { useState, useEffect } from 'react';
import request from '@lib/axios';

const useFetch = ({ uri, initialData, option }) => {
  const [fetchData, setFetchData] = useState(initialData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await request.get({ uri });

      if (option) {
        setFetchData(data.map((v) => ({ ...v, [option.name]: option.value })));
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      if (!option) setFetchData(data);
    })();
  }, []);

  return [fetchData, setFetchData, loading];
};

export default useFetch;
