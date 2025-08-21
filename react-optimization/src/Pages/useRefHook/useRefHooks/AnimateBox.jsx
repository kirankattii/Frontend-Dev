import React, { useRef } from 'react'

const AnimateBox = () => {
    const boxRef = useRef()
    const moveBox = ()=>{
        boxRef.current.classList.toggle("translate-x-20")
    }
  return (
  <div className="p-4">
      <div ref={boxRef} className="w-16 h-16 bg-blue-500 transition-transform duration-500"></div>
      <button onClick={moveBox} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
        Toggle Move
      </button>
    </div>
  )
}

export default AnimateBox
