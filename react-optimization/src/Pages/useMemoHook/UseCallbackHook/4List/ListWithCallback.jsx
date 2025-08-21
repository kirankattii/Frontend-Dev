
// import React, { useCallback, useState } from "react";

// const UserList = ({ list, handleSelect }) => {
//     console.log("List of users");
//     return <ul>
//         {list.map(item=>(
//             <li onClick={()=>handleSelect(item)}>
//                 {item}
//             </li>
//         ))}
//     </ul>
    
// };

// const ListWithCallback = () => {
//   const [select, setSelect] = useState(null);
//   const [count, setCount] = useState(0);

//   const handleSelect = useCallback((item) => setSelect(item),[]);

//   return (
//     <div>
//       <UserList handleSelect={handleSelect} list={["A", "B", "c", "D"]} />
//       <button onClick={() => setCount(count + 1)}>Increment {count}</button>
//     </div>
//   );
// };

// export default ListWithCallback;


import React, { useState, useCallback } from "react";

const List = React.memo(({ items, onSelect }) => {
  console.log("List rendered");
  return (
    <ul>
      {items.map((item) => (
        <li key={item} onClick={() => onSelect(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
});

export default function ListWithCallback() {
  const [selected, setSelected] = useState(null);
  const [count, setCount] = useState(0);

  const handleSelect = useCallback((item) => setSelected(item), []);

  return (
    <div className="p-5">
      <List items={["A", "B", "C"]} onSelect={handleSelect} />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}


// Result: List does not re-render unless items or handleSelect changes.