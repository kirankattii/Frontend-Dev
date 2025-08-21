

import React, { useCallback, useEffect, useState } from 'react'

const AsyncWithUseCallback = () => {
    const [data,setData] = useState([])

    const fetchData = useCallback(() =>{
        console.log("Fetching data")
        setData(["Apple","Banana"])
    },[])

    useEffect(()=>{
        fetchData()
    },[fetchData])
    
  return (
    <div>
      
    </div>
  )
}

export default AsyncWithUseCallback
