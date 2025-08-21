
import React, { useEffect, useRef } from 'react'

const ButtonClick = () => {


    const timer = useRef(null)
    function handleTimer (){
        clearTimeout(timer.current)
        timer.current = setTimeout(() => {
            alert("button Clicked")
        }, 500);
    }
    
  
  return (
    <div>
      <button className='p-2 bg-blue-500 text-xl' onClick={handleTimer}>Click Button</button>
    </div>
  )
}

export default ButtonClick
