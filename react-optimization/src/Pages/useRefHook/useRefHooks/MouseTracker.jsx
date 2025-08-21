import React, { useEffect, useRef } from 'react'

const MouseTracker = () => {
    const mouseRef = useRef({x:0,y:0})
    useEffect(()=>{
        const move = (e) =>{
            mouseRef.current={x:e.clientX,y:e.clientY}
            console.log("Move",mouseRef.current);
        }
        window.addEventListener("mousemove",move)
        return ()=>{
            window.removeEventListener("mousemove",move)
        }
    },[])
  return (
    <div className='m-2 bg-blue-50 p-2'>
      <h4>Mouse Tracker</h4>
      {/* <p>{mouseRef.current.x}</p> */}
    </div>
  )
}

export default MouseTracker
