import React, { useEffect, useState } from "react";

const RefetchOnDependency = () => {
  const [userId, setUserId] = useState(1);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((res) => res.json())
        .then(setPost);
    };

    fetchUser()
    
  }, [userId]);

  return (
    <div>
      <select onChange={(e) => setUserId(Number(e.target.value))} value={userId}>
       {[1,2,3].map((id)=>
       <option value={id}>user {id}</option>
    )}
      </select>
       {post.map((p) => (
        <div key={p.id} className="bg-white p-3 rounded shadow mb-2">
          {p.title}
        </div>
      ))}
    </div>
  );
};

export default RefetchOnDependency;
