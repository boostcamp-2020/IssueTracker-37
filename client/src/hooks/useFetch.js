import { useState, useEffect } from 'react';
import request from '@lib/axios';

const useFetch = (uri, option) => {
  const [initialData, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await request.get({ uri });

      if (option) {
        setData(data.map((v) => ({ ...v, [option.name]: option.value })));
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      if (!option) setData(data);
    })();
  }, []);

  return [initialData, setData, loading];
};

export default useFetch;
