import React, { useEffect, useState } from "react";

export default function TypingEffect() {
  const [text, setText] = useState("");
  const fullText = "Hello from React!";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 bg-yellow-100 rounded-lg shadow-md text-center font-mono text-xl">
      {text}
    </div>
  );
}


// Explanation

// Simulates a typing animation using state updates.
// Senior question: How to avoid re-running when fullText changes dynamically?

