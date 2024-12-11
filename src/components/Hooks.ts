import { useState, useEffect } from 'react';

const usePersistedCounter = (key = 'counter') => {
  const [counter, setCounter] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(key, counter.toString());
  }, [counter, key]);

  const handleInc = () => setCounter((prev) => prev + 1);
  const handleDec = () => setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  const handleReset = () => setCounter(0);

  return { counter, handleInc, handleDec, handleReset };
};

export default usePersistedCounter;
