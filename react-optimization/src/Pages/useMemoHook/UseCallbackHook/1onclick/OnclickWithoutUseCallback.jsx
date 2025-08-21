import  { useState } from 'react'

const OnclickFun = ({onClick}) =>{
    console.log("Handle Onclick Function")
    return <div>
        <button onClick={onClick}>Increment</button>
    </div>
}

const OnclickWithoutUseCallback = () => {
    const [count,setCount] = useState(0)
    const [text,setText] = useState("")
    const handleClick = () =>{
        setCount(count+1)
    }
  return (
    <div>
      <OnclickFun onClick={handleClick}/>
      {count} <br/>
      <input placeholder='Enter a Text' value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
  )
}

export default OnclickWithoutUseCallback

// Problem: 
// The handleClick function is recreated on every render → Child re-renders unnecessarily.