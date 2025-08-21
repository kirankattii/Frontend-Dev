import React, { memo, useState } from "react";

const ListItem = ({ item }) => {
  console.log("Rendered:", item);
  return <li>{item}</li>;
};

const ListRenderWithoutMemo = () => {
  const [items] = useState(["Apple", "Banana", "Cherry"]);
  const [count, setCount] = useState(0);
  return <div>
    <button className="px-4 py-2 border border-b-lime-200" onClick={()=>setCount(count+1)}>Increment</button>
    {items.map((fruit, i) => (
          <ListItem key={i} item={fruit} />
        ))}
  </div>;
};

export default ListRenderWithoutMemo;


// Problem: Clicking the button re-renders all list items.
