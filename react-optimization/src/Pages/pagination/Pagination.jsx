import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPosts = async (pageNum) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=10`
    );
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  console.log(posts);
  

  return (
    <div>
      <div>
        pagination summary : {page}
      </div>
      <h2>Pagination</h2>
      <div className="grid grid-cols-4 gap-4">
        {posts.map((item) => {
          return(
          <li key={item.id} className="border  border-blue-500">
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>)
        })}
      </div>
      <div>
        <button onClick={()=>setPage(page-1)} disabled={page==1}>Prev</button>
        <button onClick={()=>setPage(page+1)} disabled={page==posts.length-1}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;


