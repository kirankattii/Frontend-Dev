import React, { useEffect, useState } from "react";

const NetworkStatus = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return (
    <div
      className={`p-6 rounded-lg shadow-md text-center ${
        online ? "bg-green-100" : "bg-red-100"
      }`}
    >
      <h1 className="text-2xl font-bold">
        {online ? "✅ Online" : "❌ Offline"}
      </h1>
    </div>
  );
};

export default NetworkStatus;

// Explanation

// Detects network status changes.
// Common in PWAs for showing offline mode.

