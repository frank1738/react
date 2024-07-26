import { useState, useEffect } from 'react';

const useDebounce = (text, timer) => {
  const [debounce, setDebounce] = useState('');
  useEffect(() => {
    const time = setTimeout(() => {
      setDebounce(text);
    }, timer);
    return () => clearInterval(time);
  }, [text, timer]);
  return debounce;
};

export default useDebounce;
