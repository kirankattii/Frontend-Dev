import React, { useEffect, useState } from 'react';

function useDebouncedResize(delay = 300) {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      clearTimeout(handleResize.timer);
      handleResize.timer = setTimeout(() => {
        setSize(window.innerWidth);
      }, delay);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [delay]);
  return size;
}

export default function ResizeComponent() {
  const width = useDebouncedResize();

  return (
    <div className="p-6 text-center">
      <p className="text-lg font-medium">Window Width: {width}px</p>
    </div>
  );
}
