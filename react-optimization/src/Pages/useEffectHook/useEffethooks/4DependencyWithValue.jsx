import React, { useEffect, useState } from 'react'

const DependencyWithValue = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("Dependincy with specific value")
    },[count])
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default DependencyWithValue


// Explanation

// Runs only when count changes.

// Important for performance and avoiding unnecessary work.

// Senior question: What happens if dependency is missing? → Stale closures or bugs.