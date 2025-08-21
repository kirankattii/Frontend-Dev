import React, { useState } from "react";

const numbers = [5, 3, 8, 1, 2];

const SortWithoutUseMemo = () => {
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  const sortedNumber = [...numbers].sort((a, b) => (reverse ? b - a : a - b));

  return (
    <div className="p-5">
      <button onClick={() => setReverse(!reverse)}>Toggle Sort</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ul>
        {sortedNumber.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default SortWithoutUseMemo;

// Problem: Sorting runs every time, even when only the text changes.

