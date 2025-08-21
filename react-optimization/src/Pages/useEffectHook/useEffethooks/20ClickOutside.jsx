import React, { useEffect, useRef, useState } from "react";

const ClickOutside = () => {
  const [open, setOpen] = useState(false);
  const boxRef = useRef();

   useEffect(() => {
    const handleClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
   <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Toggle Box
      </button>
      {open && (
        <div
          ref={boxRef}
          className="mt-4 p-4 bg-white border rounded shadow-md"
        >
          Click outside to close me
        </div>
      )}
    </div>
  );
};

export default ClickOutside;

// Explanation

// Common for dropdowns, modals.
// Senior tip: Use pointerdown instead of mousedown for better touch device support.