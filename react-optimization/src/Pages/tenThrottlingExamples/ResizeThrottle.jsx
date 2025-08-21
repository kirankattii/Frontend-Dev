import React, { useEffect, useState } from "react";

const ResizeThrottle = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const [throtal, setThroral] = useState(true);

  useEffect(() => {
    const handleSize=()=> {
      if (!throtal) return;
      setThroral(false);
      setwidth(window.innerWidth);
      setTimeout(() => {
        setThroral(true);
      }, 1000);
    }

    window.addEventListener("resize", handleSize);
   return ()=> window.removeEventListener("resize", handleSize);
  }, [throtal]);

  return <div>
    Width of the window :- {width}
  </div>;
};

export default ResizeThrottle;
