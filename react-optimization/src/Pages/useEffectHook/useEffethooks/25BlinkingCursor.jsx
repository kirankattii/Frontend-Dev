import React, { useEffect, useState } from "react";

const BlinkingCursor = () => {
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center font-mono text-xl">
      Typing Text {blink && "|"}
    </div>
  );
};

export default BlinkingCursor;


// Explanation

// Uses a toggling state in setInterval.
// Interview focus: Why is cleanup important for intervals? → Avoid memory leaks.

