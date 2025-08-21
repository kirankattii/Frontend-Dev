import { useEffect, useState } from 'react';

export default function VisibilityExample() {
  const [visible, setVisible] = useState(!document.hidden);

  useEffect(() => {
    const handleVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return <p>{visible ? "Tab is active" : "Tab is hidden"}</p>;
}
