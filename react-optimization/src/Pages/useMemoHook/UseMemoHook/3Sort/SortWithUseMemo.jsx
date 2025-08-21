import React, { useMemo, useState } from "react";

const numbers = [5, 3, 8, 1, 2];

const SortWithUseMemo = () => {
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  const sortedNumber = useMemo(
    () => [...numbers].sort((a, b) => (reverse ? b - a : a - b)),
    [reverse]
  );

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

export default SortWithUseMemo;

// Result: Sorting only runs when reverse changes.