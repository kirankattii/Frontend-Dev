import { useRef } from 'react';

export default function FullscreenDemo() {
  const divRef = useRef();

  const enterFullscreen = () => {
    divRef.current?.requestFullscreen();
  };

  return (
    <div ref={divRef} className="p-4 bg-gray-300">
      <p>Click to go fullscreen</p>
      <button onClick={enterFullscreen}>Go Fullscreen</button>
    </div>
  );
}
