import React, { useEffect, useState } from "react";

export default function MultipleEffectsExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  return (
    <div className="p-6 bg-purple-100 rounded-lg shadow-md text-center space-y-4">
      <div>
        <p className="text-purple-700 mb-2">Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg"
        >
          Increment Count
        </button>
      </div>
      <div>
        <p className="text-purple-700 mb-2">Name: {name}</p>
        <button
          onClick={() => setName(name === "John" ? "Jane" : "John")}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg"
        >
          Toggle Name
        </button>
      </div>
    </div>
  );
}

// Explanation

// Multiple useEffects can handle different responsibilities independently.

// Improves readability vs. one big effect.