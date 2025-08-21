import React, { useState } from 'react';

export default function MediaEvents() {
  const [status, setStatus] = useState('');
  return (
    <div className="p-4">
      <video
        className="w-full mb-2"
        controls
        onPlay={() => setStatus('Playing...')}
        onPause={() => setStatus('Paused')}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
      <p>{status}</p>
    </div>
  );
}
