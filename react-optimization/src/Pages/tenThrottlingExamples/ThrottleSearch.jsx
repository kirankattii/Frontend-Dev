import React, { useEffect, useState } from 'react'
import useThrottling from './Throttling'

const ThrottleSearch = () => {
    const [search,setSearch] = useState("")
    const throtalSearch  = useThrottling(search,1000)

   useEffect(()=>{
    if(throtalSearch){
console.log("throelling",throtalSearch);
    }
   },[throtalSearch])
    
  return (

    <div>
      
      <input className='border border-orange-600 bg-slate-300' placeholder='Enter text' type='text' onChange={(e)=>setSearch(e.target.value)}/>
      
    </div>
  )
}

export default ThrottleSearch
