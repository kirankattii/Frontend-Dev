import React, { useRef } from 'react';

export default function InputMask() {
  const inputRef = useRef();

  const handleInput = () => {
    let value = inputRef.current.value.replace(/\D/g, "");
    if (value.length > 10) value = value.slice(0, 10);
    inputRef.current.value = value;
  };

  return (
    <div className="p-4">
      <input
        ref={inputRef}
        onInput={handleInput}
        placeholder="Enter 10-digit mobile number"
        className="border p-2 rounded w-full"
      />
    </div>
  );
}
