import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [screenSize, setScreenSize] = useState(false);

  useEffect(() => {
    const mdQuery = window.matchMedia(query);

    const changeScreenSize = event => {
      if (event.matches) {
        setScreenSize(true);
      } else {
        setScreenSize(false);
      }
    };

    changeScreenSize(mdQuery);

    mdQuery.addEventListener('change', changeScreenSize);

    return () => mdQuery.removeEventListener('change', changeScreenSize);
  }, []);

  return screenSize;
}
