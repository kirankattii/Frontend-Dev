import React, { useEffect, useRef } from 'react'

const DomApi = () => {
    const divRef = useRef()
    useEffect(()=>{
        divRef.current.style.color="red"
    },[])
  return (
    <div>
      <h1 ref={divRef}>Browser APIS</h1>
    </div>
  )
}

export default DomApi
