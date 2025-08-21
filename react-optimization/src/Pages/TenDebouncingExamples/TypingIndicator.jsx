import React, { useEffect, useState } from 'react';

const useTyping = (value, delay = 1000) => {
  const [typing, setTyping] = useState(false);
  useEffect(() => {
    if (!value) return;
    setTyping(true);
    const timeout = setTimeout(() => setTyping(false), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return typing;
};

export default function ChatTyping() {
  const [msg, setMsg] = useState('');
  const isTyping = useTyping(msg);

  return (
    <div className="max-w-md mx-auto p-6">
      <input
        className="w-full p-2 border rounded"
        placeholder="Type something..."
        onChange={(e) => setMsg(e.target.value)}
      />
      <p className="mt-2 text-sm text-gray-500">
        {isTyping ? 'User is typing...' : ''}
      </p>
    </div>
  );
}
