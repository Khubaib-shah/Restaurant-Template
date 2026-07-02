import { useEffect, useState, RefObject } from 'react';

export function useSticky(ref: RefObject<HTMLElement | null>, offset = 0) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      // If the top bounding rect goes below or equals our offset, it is stuck
      setIsSticky(rect.top <= offset + 1); // add 1px buffer
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, offset]);

  return isSticky;
}
