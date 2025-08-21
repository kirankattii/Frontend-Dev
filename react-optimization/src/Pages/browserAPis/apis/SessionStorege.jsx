import { useEffect, useState } from 'react';

export default function SessionStorageExample() {
  const [msg, setMsg] = useState(sessionStorage.getItem('msg') || '');

  const handleChange = (e) => {
    setMsg(e.target.value);
    sessionStorage.setItem('msg', e.target.value);
  };

  return <input value={msg} onChange={handleChange} placeholder="Session Message" />;
}
