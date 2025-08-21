import React, { useCallback, useEffect, useState } from "react";

const FiniteWithUseCallback = () => {
  const [value, setValue] = useState("");

  const callFun = useCallback(() => {
    console.log("Calling the function");
  },[]);

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

export default FiniteWithUseCallback;


// Result: Function reference is stable → effect runs only once.