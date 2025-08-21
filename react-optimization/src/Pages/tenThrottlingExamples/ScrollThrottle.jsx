import React, { useEffect, useState } from "react";

const ScrollThrottle = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [canScrollTop, setCanScrollTop] = useState(true);

  useEffect(() => {
    function onScroll() {
        if (!canScrollTop) return;
        setCanScrollTop(false)
        setScrollTop(window.scrollY)
        setTimeout(() => {
            setCanScrollTop(true)
        }, 500);
    }

    window.addEventListener("scroll",onScroll)
    return () => window.removeEventListener("scroll",onScroll)
    
  }, [canScrollTop]);

  return     <div className="min-h-[200vh]">
      <p className="fixed top-4   left-4 bg-white shadow px-4 py-2 rounded">
        Scroll Y: {scrollTop}
      </p>
    </div>
};

export default ScrollThrottle;
