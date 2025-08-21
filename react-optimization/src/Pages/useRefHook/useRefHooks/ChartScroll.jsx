import { useEffect, useRef, useState } from 'react'

const ChartScroll = () => {
    const messageEndRef = useRef()
    const [message,setMessage] = useState(["Hi","Hello"])
    const handleMessage = ()=>{
        setMessage([...message,"New Message"])
    }

    useEffect(()=>{
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
    },[message])
    
  return (
    <div>
      <div className='border h-[100px] w-[600px] overflow-auto'>
        {message.map((msg,i)=>{
            return <li>{msg}</li>
        })}
        <div ref={messageEndRef}/>
      </div>
      <button onClick={handleMessage} className='bg-blue-500 rounded-xl text-2xl px-4 p-2'>Send Message</button>
    </div>
  )
}

export default ChartScroll
