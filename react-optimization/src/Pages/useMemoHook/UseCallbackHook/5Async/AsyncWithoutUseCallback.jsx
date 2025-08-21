import React, { useEffect, useState } from 'react'

const AsyncWithoutUseCallback = () => {
    const [data,setData] = useState([])

    const fetchData = () =>{
        console.log("Fetching data")
        setData(["Apple","Banana"])
    }

    useEffect(()=>{
        fetchData()
    },[fetchData])
    
  return (
    <div>
      
    </div>
  )
}

export default AsyncWithoutUseCallback
