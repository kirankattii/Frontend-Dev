import React, { useEffect, useRef, useState } from "react";

export default function IntersectionObserverExample() {
  const [visible, setVisible] = useState(false);
  const boxRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (boxRef.current) observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="h-[120vh]"></div>
      <div
        ref={boxRef}
        className={`p-6 rounded-lg shadow-md text-center transition-all duration-700 ${
          visible ? "bg-green-300 opacity-100" : "bg-red-300 opacity-50"
        }`}
      >
        {visible ? "Visible" : "Not Visible"}
      </div>
    </div>
  );
}


// Explanation

// Uses IntersectionObserver for scroll-based animations or lazy loading.
// Senior tip: Better for performance than listening to scroll events.