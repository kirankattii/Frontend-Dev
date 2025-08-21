import { useEffect, useRef } from 'react';

export default function CanvasExample() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 100, 100);
  }, []);

  return <canvas ref={canvasRef} width="200" height="200" />;
}
