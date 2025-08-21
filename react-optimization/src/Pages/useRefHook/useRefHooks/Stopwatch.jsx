import React, { useRef, useState } from 'react'

const Stopwatch = () => {
    const [time,setTime] = useState(0)
    const timeRef = useRef()

    const start = () => {
        if(timeRef.current) return
        timeRef.current = setInterval(()=>setTime(c=>c+1),1000)
    }

    const stop = ()=>{
        clearInterval(timeRef.current)
        timeRef.current=null
    }

    const reset = ()=>{
        stop()
        setTime(0)
    }
    
  return (
    <div className='d-flex flex-col items-center gap-4 bg-blue-50 m-2 p-2'>
      <h3 className='text-2xl font-bold'>{time}</h3>
      <div className='flex gap-3'>
        <button onClick={start} className='rounded-xl text-xl p-2 px-4 bg-sky-300'>Start</button>
        <button onClick={stop} className='rounded-xl text-xl p-2 px-4 bg-sky-300'>Stop</button>
        <button onClick={reset} className='rounded-xl text-xl p-2 px-4 bg-sky-300'>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch
