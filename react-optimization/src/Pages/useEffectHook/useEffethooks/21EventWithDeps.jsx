import React, { useEffect, useState } from 'react'

const EventWithDeps = () => {
    const [color,setColor] = useState("bg-purple-100")
    useEffect(()=>{
        const handleClick = () =>{
            setColor(prev=>prev==="bg-purple-100"? "bg-purple-300":"bg-purple-100")
        }
        document.addEventListener("click",handleClick)
        return () =>{
            document.removeEventListener("click",handleClick)
        }
    })
  return (
    <div>
      <button  className={`p-4 ${color}`} >click</button>
    </div>
  )
}

export default EventWithDeps



// Explanation

// Shows that listeners can change component state.
// Senior-level caution: Avoid re-attaching listeners unnecessarily by controlling dependencies.