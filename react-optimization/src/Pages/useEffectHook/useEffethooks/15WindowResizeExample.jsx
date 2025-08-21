import React, { useEffect, useState } from "react";

const WindowResizeExample = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="p-6 bg-sky-100 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-sky-800">Window Width</h1>
        <p className="text-sky-700 mt-2">{width}px</p>
      </div>
    </div>
  );
};

export default WindowResizeExample;
