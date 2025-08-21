import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

export function DebouncingSearchApi() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const debounceSearch = useDebounce(search, 500);

  console.log(results);

  useEffect(() => {
    if (debounceSearch) {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((post) =>
            post.title.toLowerCase().includes(debounceSearch.toLowerCase())
          );
          setResults(filtered);
        });
    } else {
      setResults([]);
    }
  }, [debounceSearch]);

  console.log(results);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <input
        className="w-full p-2 border rounded mb-4"
        placeholder="Search posts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="space-y-2">
        {results.map((item) => (
          <li key={item.id} className="p-2 border rounded bg-gray-50">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}



