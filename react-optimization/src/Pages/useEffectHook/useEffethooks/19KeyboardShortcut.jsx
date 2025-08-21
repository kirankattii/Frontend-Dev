import React, { useEffect, useState } from "react";

const KeyboardShortcut = () => {
  const [lastKey, setLastKey] = useState("");
  useEffect(() => {
    const keyPressed = (e) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        alert("Ctrl + S triggered");
      }
      setLastKey(e.key);
    };

    window.addEventListener("keydown", keyPressed);
    return () => {
      window.removeEventListener("keydown", keyPressed);
    };
  });
  return (
    <div>
      <div className="p-6 bg-indigo-100 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-indigo-800">Last Key Pressed</h1>
        <p className="text-indigo-700 mt-2">{lastKey}</p>
      </div>
    </div>
  );
};

export default KeyboardShortcut;


// Explanation

// Captures keyboard shortcuts like Ctrl + S.
// Interview tip: Always prevent default if overriding browser shortcuts.

