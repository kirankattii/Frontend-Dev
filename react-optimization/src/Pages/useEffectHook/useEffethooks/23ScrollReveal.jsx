// import React, { useEffect, useState } from "react";

// const ScrollReveal = () => {
//   const [reveled, setReveled] = useState(false);
//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 100) setReveled(true);
//     };
//     window.addEventListener("scroll", onscroll);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);
//   return (
//     <div className="h-[200vh]">
//       <div
//         className={`p-6 bg-blue-300 transition-all duration-1000 ${
//           reveled ? "translate-x-0" : "translate-x-3"
//         }`}
//       >
//         <h1>Scroll event listener</h1>
//       </div>
//     </div>
//   );
// };

// export default ScrollReveal;


import React, { useEffect, useState } from "react";

export default function ScrollReveal() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setRevealed(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
  <div className="h-[100vh]">
      <div
      className={`p-6  bg-green-100 rounded-lg shadow-md text-center transform transition-all duration-1000 ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-2xl font-bold text-green-800">Revealed on Scroll</h1>
    </div>
  </div>
  );
}

// Explanation

// Common in landing pages.
// Interview note: For performance, throttle/debounce scroll events.
