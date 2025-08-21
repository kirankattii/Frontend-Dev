import React, { useEffect, useState } from 'react'

const NoDependencyExample = () => {
    const [count ,setCount] = useState(0)
    useEffect(()=>{
        console.log("Component with No depandency")
    })
  return (
     <div className="p-6 bg-yellow-100 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-yellow-800">No Dependency</h1>
      <p className="text-yellow-700 mb-4">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
      >
        Increment
      </button>
    </div>
  );
}

export default NoDependencyExample


// Explanation

// No dependency array = runs after every render.

// Interview trap: Can cause infinite loops if you update state inside it without conditions.