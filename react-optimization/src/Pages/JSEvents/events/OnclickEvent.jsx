import React from 'react'

const OnclickEvent = () => {
  const handleClick = () =>{
    alert("Triggered the Onclick event")
  }
  return (
    <div>
      <button className='p-2 bg-blue-600 text-2xl' onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
}

export default OnclickEvent
