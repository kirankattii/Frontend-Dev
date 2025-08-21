import React, { useState } from 'react'

const ExpenciveWithoutMemo = () => {
    const [count,setCount] = useState(0)
    const [text,setText] = useState("")

    const calculateExpancie = (num) =>{
        console.log("Calulating...")
        let total = 0
        for(let i=0 ; i<100000; i++)
        {
            total+=i
        }
        return total+num;
    }
    
    const result = calculateExpancie(count)
    
  return (
    <div>
      <h1>Result : {result}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <input placeholder='Enter the text' onChange={(e)=>setText(e.target.value)} value={text}/>
    </div>
  )
}

export default ExpenciveWithoutMemo


// Problem: Typing in the input runs the expensive calculation every time.

