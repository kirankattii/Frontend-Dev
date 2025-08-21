import React, { useState } from 'react';

export default function SelectExample() {
  const [sel, setSel] = useState('');
  return (
    <div className="p-4">
      <textarea
        className="border p-2 rounded w-full"
        placeholder="Select some text..."
        onSelect={(e) =>
          setSel(e.currentTarget.value.substring(e.currentTarget.selectionStart, e.currentTarget.selectionEnd))
        }
        rows={4}
      />
      {sel && <p className="mt-2">You selected: "{sel}"</p>}
    </div>
  );
}
