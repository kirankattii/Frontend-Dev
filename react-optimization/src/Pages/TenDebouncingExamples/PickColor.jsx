// import React, { useEffect, useState } from 'react'

// function useDebounce(value,delay){
//     const [debounce,setDebounce] = useState(value)
//     useEffect(()=>{
//         const handler = setTimeout(()=>setDebounce(value),delay)

//         return ()=> clearTimeout(handler)

//     },[value,delay])

//     return debounce
// }

// const PickColor = () => {
//     const [color,setColor] = useState("")
//     const debounceColor = useDebounce(color,500)
//   return (
//     <div>
//        <input
//         type="color"
//         value={color}
//         onChange={(e) => setColor(e.target.value)}
//         className="border border-gray-300 p-1 rounded"
//       />
//       <div className='w-[600px] h-[600px]' style={{backgroundColor:debounceColor}}>

//       </div>
//     </div>
//   )
// }

// export default PickColor

import React, { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
};

export default function PickColor() {
  const [color, setColor] = useState("#ff0000");
  const debouncedColor = useDebounce(color, 1000);
  useEffect(() => {
    console.log("Debounced Color:", debouncedColor);
  }, [debouncedColor]);

  return (
    <div className="p-6">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="border border-gray-300 p-1 rounded"
      />
      <div
        className="mt-4 w-[400px] h-[400px] rounded shadow-md"
        style={{ backgroundColor: debouncedColor }}
      />
    </div>
  );
}
