/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';

const useFadeInOnScroll = () => {
  const element = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (element.current) {
        const rect = element.current.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.current.classList.add('opacity-100');
        }
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return element;
};

export default useFadeInOnScroll;
