import React, { useRef } from 'react'

const VideoControl = () => {
    const videoRef = useRef()
  return (
    <div className="p-4 space-y-2">
      <video ref={videoRef} width="300" className="rounded" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>

      <div className='flex gap-4'>
        <button onClick={()=>videoRef.current.play()} className='text-xl rounded-xl bg-orange-300  p-2'>Play</button>
        <button onClick={()=>videoRef.current.pause()} className='text-xl rounded-xl bg-orange-300 p-2'>Pause</button>
      </div>
      
    </div>
  )
}

export default VideoControl
