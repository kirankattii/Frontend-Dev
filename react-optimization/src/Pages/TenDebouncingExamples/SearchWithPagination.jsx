// import React, { useEffect, useState } from "react";

// function useDeboundcing(search, delay) {
//   const [debouncing, setDebouncing] = useState(search);

//   useEffect(() => {
//     const handleSearch = setTimeout(() => {
//       setDebouncing(search);
//     }, delay);

//     return () => clearTimeout(handleSearch);
//   }, [search, delay]);

//   return debouncing;
// }

// const SearchWithPagination = () => {
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [results, setResults] = useState([]);
//   const debouncingSearch = useDeboundcing(search, 500);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
//       .then((res) => res.json())
//       .then((data) =>
//         setResults(
//           data.filter((items) =>
//             items.toLowerCase().include(debouncingSearch.toLowerCase())
//           )
//         )
//       );
//   }, [page, debouncingSearch]);

//   return (
//     <div>
//       <input
//         className="w-full p-2 border rounded mb-4"
//         placeholder="Search"
//         onChange={(e) => setSearch(e.target.value)}
//       />{" "}
//       <ul className="space-y-2">
//         {results.map((r) => (
//           <li key={r.id} className="bg-gray-100 p-2 rounded">
//             {r.title}
//           </li>
//         ))}
//       </ul>
//       <div className="flex justify-between mt-4">
//         <button
//           onClick={() => setPage((p) => Math.max(1, p - 1))}
//           className="px-3 py-1 bg-gray-300 rounded"
//         >
//           Prev
//         </button>
//         <button
//           onClick={() => setPage((p) => p + 1)}
//           className="px-3 py-1 bg-gray-300 rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchWithPagination;


import React, { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
  const [d, setD] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setD(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return d;
};

export default function SearchWithPagination() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const debounced = useDebounce(search, 500);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((res) => res.json())
      .then((data) =>
        setResults(
          data.filter((d) =>
            d.title.toLowerCase().includes(debounced.toLowerCase())
          )
        )
      );
  }, [debounced, page]);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <input
        className="w-full p-2 border rounded mb-4"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="space-y-2">
        {results.map((r,i) => (
          <li key={r.id} className="bg-gray-100 p-2 rounded">
           ({i+1}) {r.title}
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Prev
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
