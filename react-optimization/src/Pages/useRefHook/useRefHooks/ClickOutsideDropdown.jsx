import React, { useEffect, useRef, useState } from 'react'

const ClickOutsideDropdown = () => {
    const [open,setOpen] = useState(false)
    const dropDownRef = useRef()
    useEffect(()=>{
        const handler = (e)=>{
            if(dropDownRef.current && !dropDownRef.current.contains(e.target)){
                setOpen(false)
            }
        }
        document.addEventListener('mousedown',handler)
        return ()=>document.addEventListener("mousedown",handler)
    },[]) 
  return (
     <div className="relative m-4" ref={dropDownRef}>
      <button onClick={() => setOpen(!open)} className="bg-indigo-500 text-white px-4 py-2 rounded">
        Toggle Dropdown
      </button>
      {open && (
        <div className="absolute mt-2 bg-white shadow p-2 border rounded">
          <p>Dropdown Content</p>
        </div>
      )}
    </div>
  )
}

export default ClickOutsideDropdown


