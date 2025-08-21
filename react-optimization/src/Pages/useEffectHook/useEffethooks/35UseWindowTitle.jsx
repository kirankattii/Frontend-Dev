import React, { useState, useEffect } from "react";

function useWindowTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default function UseEffectCustomHook() {
  const [count, setCount] = useState(0);
  useWindowTitle(`Count: ${count}`);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}


// Interview Insight:
// Shows how useEffect can be encapsulated inside custom hooks for reusable side effects.

