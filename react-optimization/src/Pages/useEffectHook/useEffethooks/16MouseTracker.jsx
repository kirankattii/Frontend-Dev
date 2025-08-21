import React, { useEffect, useState } from 'react'

const MouseTracker = () => {
    const [mouse,setMouse] = useState({x:0,y:0})
    useEffect(()=>{
        const handleMouse = (e) => setMouse({x:e.clientX, y:e.clientY})
        
        window.addEventListener('mousemove',handleMouse)
        
        return ()=>{
            window.removeEventListener('mousemove',handleMouse)
        }
    },[])
  return (
    <div className="p-6 bg-emerald-100 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-emerald-800">Mouse Position</h1>
      <p className="text-emerald-700 mt-2">
        X: {mouse.x}, Y: {mouse.y}
      </p>
    </div>
  )
}

export default MouseTracker


// Explanation

// Tracks real-time mouse position.
// Senior-level note: Use requestAnimationFrame if you need smoother tracking with less re-rendering.


