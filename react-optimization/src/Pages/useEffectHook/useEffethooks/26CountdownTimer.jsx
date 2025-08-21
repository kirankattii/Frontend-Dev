import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(10);
  useEffect(() => {
    if (time <= 0) return;
    
    const handleTime = setInterval(() => {
      setTime((t) => t - 1);
    }, 500);

    return () => {
      clearInterval(handleTime);
    };
  }, [time]);

  return (
    <div className="p-6 bg-red-100 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-red-800">Countdown</h1>
      <p className="text-red-700 text-lg">{time}</p>
    </div>
  );
};

export default CountdownTimer;


// Explanation

// Relies on timeout recursion for smooth countdown.
// Senior tip: Use setInterval for constant ticks, but be aware of drift.

