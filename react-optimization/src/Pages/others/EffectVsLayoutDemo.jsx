import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

export default function EffectVsLayoutDemo() {
  const [width, setWidth] = useState(100);
  const boxRef = useRef(null);

  // 🔹 useEffect runs AFTER paint
  useEffect(() => {
    console.log("useEffect → Box width:", boxRef.current.offsetWidth);
  }, [width]);

  // 🔹 useLayoutEffect runs BEFORE paint
  useLayoutEffect(() => {
    console.log("useLayoutEffect → Box width:", boxRef.current.offsetWidth);
  }, [width]);

  return (
    <div className="p-6 flex flex-col items-center space-y-4">
      <h1 className="text-xl font-bold">useEffect vs useLayoutEffect Demo</h1>

      <div
        ref={boxRef}
        style={{
          width: `${width}px`,
          height: "50px",
          background: "lightblue",
          transition: "width 1s ease",
        }}
      >
        Box
      </div>

      <button
        onClick={() => setWidth(width === 100 ? 300 : 100)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Width
      </button>
    </div>
  );
}
