
// // Issue: A new listener is added each render because logCount changes.


import React, { useEffect, useState } from "react";

export default function EventWithoutCallback() {
  const [count, setCount] = useState(0);

  const logCount = () => console.log(count);

  useEffect(() => {
    window.addEventListener("click", logCount);
    return () => window.removeEventListener("click", logCount);
  });

  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  );
}
