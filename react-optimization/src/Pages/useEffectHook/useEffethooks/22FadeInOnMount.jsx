import React, { useEffect, useState } from "react";

const FadeInOnMount = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(true);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className={`p-6 bg-blue-100 rounded-lg shadow-md text-center transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-2xl font-bold text-blue-800">Hello, World!</h1>
    </div>
  );
};

export default FadeInOnMount;

// Explanation

// Triggers a fade-in using Tailwind’s transition utilities.
// Senior-level point: Delaying state change ensures the initial DOM renders before animation starts