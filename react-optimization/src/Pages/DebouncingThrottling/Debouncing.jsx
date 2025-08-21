import  { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

export function DebouncedInput() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  useEffect(() => {
    if (debouncedQuery) {
      console.log("Searching for:", debouncedQuery);
    }
  }, [debouncedQuery]);
  return (
    <div>
      <h2>Debouncing</h2>
      <input className="border border-blue-400 p-2 text-lg" onChange={(e) => setQuery(e.target.value)} value={query} />
    </div>
  );
}