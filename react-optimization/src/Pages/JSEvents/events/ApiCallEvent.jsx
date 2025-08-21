import React, { useState } from 'react';

export default function UsernameCheck() {
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('');
  const handleBlur = async () => {
    const res = await fetch('https://reqres.in/api/users?delay=1');
    await res.json();
    setStatus(username === 'admin' ? 'Taken' : 'Available');
  };
  return (
    <div className="p-6 max-w-sm mx-auto">
      <input
        className="w-full border p-2 rounded mb-2"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onBlur={handleBlur}
      />
      {status && <p className={status === 'Taken' ? 'text-red-500' : 'text-green-500'}>{status}</p>}
    </div>
  );
}
