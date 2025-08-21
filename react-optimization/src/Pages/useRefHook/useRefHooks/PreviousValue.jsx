import React, { useEffect, useRef, useState } from 'react'

const PreviousValue = () => {
    const [count,setCount] = useState(0)
    const previousRef = useRef()
 
    useEffect(()=>{
        previousRef.current=count
    },[count])

  return (
    <div className='bg-blue-50 m-2 p-2'>
      <button onClick={()=>setCount(c => c + 1)} className='bg-orange-400 p-2'>Increase</button>
      <p>Current Value : <span className='text-orange-400'>{count}</span></p>
      <p>Previous Value : <span className='text-orange-400'>{previousRef.current ?? '-'}</span></p>
    </div>
  )
}

export default PreviousValue
