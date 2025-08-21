// import React, { useRef } from "react";

// const ThrottleButton = () => {
//   const isToggle = useRef(false);
//   const handleClick = () => {
//     if (isToggle.current) return;
//     alert("Clicked");
//     isToggle.current = true;
//     setTimeout(() => {
//       isToggle.current = false;
//     }, 1000);
//   };

//   return (
//     <div>
//       <button
//         onClick={handleClick}
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Click Me (Throttle 1s)
//       </button>
//     </div>
//   );
// };

// export default ThrottleButton;



import React, { useRef } from 'react';

export default function ThrottleButton() {
  const isThrottled = useRef(false);

  const handleClick = () => {
    if (isThrottled.current) return;

    alert('Clicked!');
    isThrottled.current = true;

    setTimeout(() => {
      isThrottled.current = false;
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Click Me (Throttle 1s)
    </button>
  );
}
