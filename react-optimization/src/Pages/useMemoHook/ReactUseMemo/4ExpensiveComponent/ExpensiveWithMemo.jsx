
import React, { memo, useState } from "react";

const ExpensiveComponent = memo(({ num }) => {
  console.log("Expensive render");
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }
  return <h2>Number: {num}</h2>;
});

export default function ExpensiveWithMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="p-5">
      <ExpensiveComponent num={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

// Result: Typing is now smooth; expensive render runs only when num changes.