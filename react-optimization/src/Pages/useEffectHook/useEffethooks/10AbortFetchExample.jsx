import React, { useEffect, useState } from "react";

export default function AbortFetchExample() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => {
        if (err.name !== "AbortError") console.error(err);
      });

    return () => controller.abort();
  }, []);

  return (
    <div className="p-6 bg-pink-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-pink-800 mb-4">Users (Abortable)</h1>
      <ul className="space-y-2">
        {users.map((u) => (
          <li key={u.id} className="bg-white p-3 rounded shadow">
            {u.name}
          </li>
        ))}
      </ul>
    </div>
  );
}


// Explanation

// Uses AbortController to stop network calls on unmount.
// Interview focus: Avoids state updates on unmounted components → prevents memory leaks.