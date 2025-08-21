import React, { useState } from "react";
import { memo } from "react";

const Child = memo(({ value }) => {
  console.log("Child rendered");
  return <h2>Child value: {value}</h2>;
});

const WithReactMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  return (
    <div>
      <Child value={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
};

export default WithReactMemo;

// Result: Typing in the input does not re-render Child unless value changes.


// ✅ Key difference:

// Without memo: Any state change in parent → all children re-render.
// With memo: Only re-renders if props change (shallow comparison).