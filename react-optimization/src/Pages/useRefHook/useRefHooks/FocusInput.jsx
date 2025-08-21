import React, { useRef } from 'react'

const FocusInput = () => {
  const focusRef = useRef()

  const handleOnclick = ()=>{
    focusRef.current.focus()
  }
  
  return (
    <div className='bg-blue-50 rounded-2xl p-4'>
      <input placeholder='Enter a Text' ref={focusRef} className='border  border-orange-400 p-2 outline-none'/>
      <button onClick={handleOnclick} className='p-2 bg-orange-400 px-4'>Submit</button>
    </div>
  )
}

export default FocusInput
