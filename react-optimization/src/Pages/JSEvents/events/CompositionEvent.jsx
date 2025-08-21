import React, { useState } from 'react';

export default function CompositionExample() {
  const [comp, setComp] = useState(false);
  return (
    <div className="p-4 max-w-sm mx-auto">
      <input
        className="w-full border p-2 rounded"
        placeholder="Type in IME..."
        onCompositionStart={() => setComp(true)}
        onCompositionEnd={() => setComp(false)}
      />
      <p>{comp ? 'Composing (IME active)…' : 'Normal typing'}</p>
    </div>
  );
}
