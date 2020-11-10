import { useState, useEffect } from 'react';
import request from '@lib/axios';

const useFetch = (uri) => {
  const [initialData, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await request.get({ uri });

      setData(data);
    })();
  }, []);

  return [initialData, setData];
};

export default useFetch;
