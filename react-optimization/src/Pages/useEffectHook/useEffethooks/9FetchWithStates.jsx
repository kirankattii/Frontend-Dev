import React, { useEffect, useState } from "react";

const FetchWithStates = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async() => {
      try {
        const fetchData =await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!fetchData.ok) throw new Error("Failed to fetch");
        const data = await fetchData.json()
        setData(data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser()
    
  }, []);




 if (loading) return <p className="p-6 text-blue-600">Loading...</p>;
  if (error) return <p className="p-6 text-red-600">Error: {error}</p>;

  console.log(data);
  

  return <div>
  <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {data.slice(0, 5).map((post) => (
        <div key={post.id} className="bg-white p-3 rounded shadow mb-2">
          <h2 className="font-semibold">{post.title}</h2>
        </div>
      ))}
    </div>
  </div>;
};

export default FetchWithStates;


// Explanation
// Covers loading & error handling — a must in real-world apps.
// Senior-level tip: Always prevent memory leaks if request completes after unmount.