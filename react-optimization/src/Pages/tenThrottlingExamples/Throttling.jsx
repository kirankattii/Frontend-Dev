// Throttling ensures a function is only called once per specified delay,
// no matter how many times it’s triggered.

import React, { useEffect, useState } from "react";

const useThrottling = (value, delay) => {
  const [throttle, setThrottle] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottle(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return throttle;
};

export default useThrottling;
