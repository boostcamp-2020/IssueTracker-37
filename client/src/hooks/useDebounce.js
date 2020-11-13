import { useEffect, useState } from 'react';

export const useDebounce = ({ second, data }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const Timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(Timer);
  }, [data]);
  return [visible];
};
