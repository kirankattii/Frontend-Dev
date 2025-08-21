import React, { useEffect, useState } from "react";

const InfiniteWithoutUseCallback = () => {
  const [value, setValue] = useState("");

  const callFun = () => {
    console.log("Calling the function");
  };

  useEffect(() => {
    callFun();
  }, [callFun]);

  return (
    <div>
      <input
        placeholder="Enter a value"
        value={value}
        onChange={(e) =>setValue(e.target.value)}
      />
    </div>
  );
};

export default InfiniteWithoutUseCallback;

// Problem: fetchData changes every render → useEffect runs endlessly.