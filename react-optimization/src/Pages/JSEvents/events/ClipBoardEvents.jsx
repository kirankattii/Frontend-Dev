import React, { useState } from "react";

const ClipBoardEvent = () => {
  const [clipboard, setClipBoard] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a text"
        className="text-xl border border-black p-2"
        onCopy={()=>setClipBoard("text is copied")}
        onPaste={()=>setClipBoard("text is pasted")}
        onCut={()=>setClipBoard("text is cuted")}
      />
      <h4>Clip board events: {clipboard}</h4>
    </div>
  );
};

export default ClipBoardEvent;
