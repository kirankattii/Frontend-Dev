import React, { useEffect, useState } from "react";

const DerivedStateExample = () => {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);
  useEffect(() => {
    setDouble(count * 2);
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Double count: {double}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  );
};

export default DerivedStateExample;

// Explanation

// Effect recalculates a derived value when dependency changes.

// Senior-level note: Sometimes better to compute inline instead of storing state.