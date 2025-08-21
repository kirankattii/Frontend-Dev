import React, { useEffect, useState } from 'react';

const useDebounce = (value, delay = 500) => {
  const [d, setD] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setD(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return d;
};

export default function TagSearch() {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState('');
  const debounced = useDebounce(input);

  useEffect(() => {
    if (!debounced) return setTags([]);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const suggestions = data
          .map((d) => d.category)
          .filter((c) => c.toLowerCase().includes(debounced.toLowerCase()));
        setTags([...new Set(suggestions)]);
      });
  }, [debounced]);

  return (
    <div className="max-w-md mx-auto p-6">
      <input
        className="w-full border p-2 rounded"
        placeholder="Search categories..."
        onChange={(e) => setInput(e.target.value)}
      />
      <ul className="mt-2 bg-white border rounded shadow">
        {tags.map((tag, i) => (
          <li key={i} className="p-2 hover:bg-gray-100 cursor-pointer">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
