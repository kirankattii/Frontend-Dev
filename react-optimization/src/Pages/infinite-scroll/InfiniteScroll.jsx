import React, { useEffect, useState, useRef } from "react";

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);
  const limit = 10;

  const fetchPosts = async (pageNum) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=${limit}`
    );
    const data = await res.json();

    if (data.length === 0) {
      setHasMore(false);
      return;
    }

    setPosts((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    if (hasMore) {
      fetchPosts(page);
    }
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      {
        threshold: 1,
        rootMargin: "0px 0px 200px 0px", // triggers earlier
      }
    );

    const currentLoader = loader.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [hasMore]);

  return (
    <div>
      <h2>Infinite Scroll Posts</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {hasMore ? (
        <div ref={loader} style={{ height: "100px", background: "#f0f0f0" }}>
          <p style={{ textAlign: "center", paddingTop: "30px" }}>
            Loading more...
          </p>
        </div>
      ) : (
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          🚫 No more posts
        </p>
      )}
    </div>
  );
};

export default InfiniteScroll;
