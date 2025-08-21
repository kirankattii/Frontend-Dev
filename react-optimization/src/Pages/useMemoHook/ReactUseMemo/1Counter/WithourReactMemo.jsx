import React, { useState } from "react";

const Child = ({ value }) => {
  console.log("Child rendered");
  return <h2>Child value: {value}</h2>;
};

const WithourReactMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="p-5">
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

export default WithourReactMemo;


// Issue: Every time you type in the input, the Child component re-renders even though value hasn’t changed.