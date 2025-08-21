import React, { useState } from "react";

const LocalStorageDemo = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const handleLocalStorage = (e) => {
    setName(e.target.value);
    localStorage.setItem("name", e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleLocalStorage}
        value={name}
        placeholder="Enter a name"
        className="text-2xl border p-2"
      />
    </div>
  );
};

export default LocalStorageDemo;
