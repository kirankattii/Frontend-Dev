import React, { useState } from 'react';

export default function DragDropExample() {
  const [dropped, setDropped] = useState('');
  return (
    <div className="p-6">
      <div
        className="w-24 h-24 bg-blue-400 text-white flex items-center justify-center mb-4 cursor-move"
        draggable
        onDragStart={(e) => e.dataTransfer.setData('text', 'Dragged!')}
      >
        Drag me
      </div>
      <div
        className="p-6 border border-dashed border-gray-500"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const txt = e.dataTransfer.getData('text');
          setDropped(txt);
        }}
      >
        Drop here {dropped && `— ${dropped}`}
      </div>
    </div>
  );
}
