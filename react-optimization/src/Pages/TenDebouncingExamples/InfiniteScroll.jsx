import React, { useEffect, useRef, useState } from "react";

function useDebouncing(fun, delay) {
  const timeOut = useRef();
  return (...arg) => {
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => fun(...arg), delay);
  };
}

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef();

  const loadItem = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    const data = res.json();
    setItems(prev=>[...prev,...data])
  };

  const debouncedLoad = useDebouncing(()=>{
    setPage((prev)=>prev+1)
  },500)

  useEffect(()=>{
    loadItem()
  })

   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && debouncedLoad(),
      { threshold: 1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);


  return <div>
    <div className="max-w-xl mx-auto p-4">
      {items.map((item) => (
        <div key={item.id} className="border-b py-2">
          {item.title}
        </div>
      ))}
      <div ref={loaderRef} className="text-center py-4 text-gray-400">Loading...</div>
    </div>
  </div>;
};

export default InfiniteScroll;
