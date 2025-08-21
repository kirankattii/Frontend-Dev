import React, { useEffect, useState } from "react";

const WindowApi = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize",handleResize)
   return  () => window.removeEventListener("resize",handleResize)
  }, []);

  return <div>
    width: {width}
  </div>;
};

export default WindowApi;
