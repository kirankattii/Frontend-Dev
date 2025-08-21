import React, { useEffect, useState } from 'react'

const ScrollPosition = () => {
    const [scrollY,setScrollY] = useState(window.scrollY)

    useEffect(()=>{
        const handleScroll = ()=>setScrollY(window.scrollY)
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])
    
    
  return (
    <div className="p-6 bg-orange-100 rounded-lg shadow-md text-center h-[200vh]">
      <h1 className="text-2xl font-bold text-orange-800">Scroll Position</h1>
      <p className="text-orange-700 mt-2">{scrollY}px</p>
    </div>
  )
}

export default ScrollPosition


// Explanation

// Useful for lazy loading or triggering animations on scroll.
// Interview question: How would you throttle/debounce this for performance?