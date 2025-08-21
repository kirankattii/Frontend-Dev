import React, { useEffect, useState } from "react";

const FetchOnMount = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUser)
      .catch(console.error);
  });
  return (
    <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-indigo-800 mb-4">Users</h1>
      <ul className="space-y-2">
        {user.map((u) => (
          <li key={u.id} className="bg-white p-3 rounded shadow">
            {u.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchOnMount;



// Explanation
// Runs once after mount due to [].
// Interview note: Good for initial data load, but you must handle loading state and errors in production.