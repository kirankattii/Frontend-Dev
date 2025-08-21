
import React, { useEffect, useState, useCallback } from "react";

export default function EventWithUseCallback() {
  const [count, setCount] = useState(0);

  const logCount = useCallback(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
    window.addEventListener("click", logCount);
    return () => window.removeEventListener("click", logCount);
  }, [logCount]);

  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  );
}

// Result: Callback reference is stable, preventing duplicate listeners.