import React, { useState } from "react";

const OnMouseEnterLeave = () => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div
      className={`p-5 bg-blue-400 border ${
        hover ? "bg-green-600" : "bg-red-600"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Mouse is {hover ? "Hovering":"Not Hoverings"}
    </div>
  );
};

export default OnMouseEnterLeave;
