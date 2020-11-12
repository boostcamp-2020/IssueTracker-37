import { useState } from 'react';

const useInput = (init = '') => {
  const [input, setInput] = useState(init);
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange, setInput];
};

export default useInput;
