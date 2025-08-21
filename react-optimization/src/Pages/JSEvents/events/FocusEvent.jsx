import React, { useState } from "react";

const FocusEvent = () => {
  const [focused, setFocused] = useState(false);
  const handleBlur = (e)=>{
    setFocused(false)
  }
  const handleFocus = ()=>{
    setFocused(true)
  }

  return (
    <div>
      <input
        placeholder="Enter Text"
        className="border border-b p-1 text-xl"
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <p>Input is {focused?"Focused":"Bured"}</p>
    </div>
  );
};

export default FocusEvent;
