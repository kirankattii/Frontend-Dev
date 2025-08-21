import React, { useEffect, useState } from "react";

function useDebouncing(value, delay) {
  const [debouncing, setDebouncing] = useState(value);
  useEffect(() => {
    const handleProductFilter = setTimeout(() => {
      setDebouncing(value);
    }, delay);
    return () => clearTimeout(handleProductFilter);
  }, [value, delay]);
  return debouncing;
}

const ProductFilter = () => {
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState([]);
  const debouncedCategory = useDebouncing(category, 500);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${debouncedCategory}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [debouncedCategory]);

  return <div className="p-6 max-w-xl mx-auto">
    <select onChange={(e)=>setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">MEN</option>
        <option value="women's clothing">Women</option>
    </select>
    <ul className="space-y-3">
         {product.map((p) => (
          <li key={p.id} className="p-2 border rounded bg-gray-100">
            {p.title}
          </li>
        ))}
    </ul>
  </div>;
};

export default ProductFilter;
