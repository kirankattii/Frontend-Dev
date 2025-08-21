import React, { useEffect, useState } from "react";

const AutoHideNotification = () => {
    const [show,setShow] = useState(true)
    useEffect(()=>{
        const timer = setTimeout(() => {
            setShow(false)
        }, 3000);

        return () =>{
            clearTimeout(timer)
        }
    
    },[])

    if(!show) return null;
    
  return (
    <div className="fixed top-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-md">
      ✅ Saved Successfully!
    </div>
  );
};

export default AutoHideNotification;

// Explanation

// Automatically hides after a delay.
// Senior note: For accessibility, also allow manual close.