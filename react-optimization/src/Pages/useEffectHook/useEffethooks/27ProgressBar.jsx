import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) return;
    const interval = setInterval(() => {
      setProgress((t) => t + 1);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-indigo-800 mb-4">Progress</h1>
      <div className="w-full bg-gray-300 rounded-full h-4">
        <div
          className="bg-indigo-600 h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-2">{progress}%</p>
    </div>
  );
};

export default ProgressBar;


// Explanation

// Uses state and useEffect to increment progress visually.
// Interview question: How to reset without reloading component?