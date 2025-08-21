import React, { useState } from 'react'

const KeyboardEvents = () => {
    const [key,setKey] = useState("")
    const handleKeyDown= (e)=>{
        setKey(`Key is Down ${e.key}`)
    }
    const handleKeyUp= (e)=>{
        setKey(`Key is Up ${e.key}`)
    }
  return (
    <div>
      <input type='text' placeholder='Enter text' onKeyDown={handleKeyDown}  onKeyUp={handleKeyUp}/>
      <h1>Keyboard Events - {key}</h1>
    </div>
  )
}

export default KeyboardEvents
