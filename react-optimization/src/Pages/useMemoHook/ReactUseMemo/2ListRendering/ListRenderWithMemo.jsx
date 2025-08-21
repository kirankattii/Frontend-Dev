

import React, { memo, useState } from "react";

const ListItem = memo(({ item }) => {
  console.log("Rendered:", item);
  return <li>{item}</li>;
});

const ListRenderWithMemo = () => {
  const [items] = useState(["Apple", "Banana", "Cherry"]);
  const [count, setCount] = useState(0);
  return <div>
    <button className="px-4 py-2 border border-b-lime-200" onClick={()=>setCount(count+1)}>Increment</button>
    {items.map((fruit, i) => (
          <ListItem key={i} item={fruit} />
        ))}
  </div>;
};

export default ListRenderWithMemo;

// Result: Only re-renders when that specific item changes.
