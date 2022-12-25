import { useEffect, useRef } from 'react';

const useFadeInOnLoad = () => {
  const element = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (element.current) {
        element.current.classList.add('opacity-100');
      }
    }, 500);
  }, []);
  return element;
};

export default useFadeInOnLoad;
