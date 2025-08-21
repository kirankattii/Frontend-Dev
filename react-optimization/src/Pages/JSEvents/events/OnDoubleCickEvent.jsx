// import React, { useState } from "react";

// const OnDoubleCickEvent = () => {
//   const [click, setClick] = useState(0);
//   return (
//     <div className="p-5">
//       <h1 className="text-lg font-semibold mb-2">onDoubleClick Event</h1>
//       <button
//         className="bg-blue-300 rounded-2xl text-xl p-2"
//         onDoubleClick={() => setClick((prev) => prev + 1)}
//       >
//         Click ME
//       </button>
//       <h2>Number of clicks {click}</h2>
//     </div>
//   );
// };

// export default OnDoubleCickEvent;



import React, { useState } from "react";

export default function OnDoubleCickEvent() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-2">onDoubleClick Event</h1>
      <button
        onDoubleClick={() => setCount((prev) => prev + 1)}
        className="bg-purple-500 text-white px-4 py-2 rounded"
      >
        Double Click Me
      </button>
      <p className="mt-2">Double clicks: {count}</p>
    </div>
  );
}
