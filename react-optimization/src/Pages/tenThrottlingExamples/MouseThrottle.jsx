import React, { useEffect, useState } from "react";

const MouseThrottle = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    function handleMove(e) {
      if (!canMove) return;
      setCanMove(false);
      setCoords({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setCanMove(true);
      }, 200);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [canMove]);

  return (
    <div>
      <p className="p-4">
        Mouse Position: {coords.x}, {coords.y}
      </p>
    </div>
  );
};

export default MouseThrottle;
