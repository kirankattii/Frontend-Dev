import { useEffect, useRef } from 'react'

const AutoFocus = () => {
    const inputRef = useRef()

   useEffect(()=>{
    inputRef.current.focus()
   },[])

  return (
    <div className='m-3 p-2 bg-blue-50'>
      <input ref={inputRef} className='border border-orange-400 p-2 outline-none'/>
     
    </div>
  )
}

export default AutoFocus
