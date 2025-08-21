import React, {  useLayoutEffect, useRef, useState } from "react";

const MeasureWidth = () => {
  const [width, setWidth] = useState(0);
  const widthRef = useRef();

  useLayoutEffect(() => {
    setWidth(widthRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <div ref={widthRef} className="bg-pink-300 px-4 py-2 rounded">
        Box Content
      </div>
      <p className="mt-2 text-sm text-gray-700">Width: {width}px</p>
    </div>
  );
};

export default MeasureWidth;
