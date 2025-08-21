import React, { useEffect, useState } from "react";

function useDebouncing(range, delay) {
  const [debounced, setDebounced] = useState(range);
  useEffect(() => {
    const handleRange = setTimeout(() => {
      setDebounced(range);
    }, delay);
    return ()=>clearTimeout(handleRange)
  }, [range, delay]);
  return debounced
}

const ChartControll = () => {
    const [range,setRange] = useState(10)
    const rangeDebounce = useDebouncing(range,500)
    
  return <div className="max-w-md mx-auto p-6">
    <input 
        className="w-full"
 type="range" min={1} max={100} value={range} onChange={(e)=>setRange(e.target.value)} />
    <h2 className="mt-2 text-gray-700">Debounging range position :- {rangeDebounce}</h2>
  </div>;
};

export default ChartControll;


