import React, { useState } from "react";

const UserList = ({ list, handleSelect }) => {
    console.log("List of users");
    return <ul>
        {list.map(item=>(
            <li onClick={()=>handleSelect(item)}>
                {item}
            </li>
        ))}
    </ul>
    
};

const ListWithoutUseCallback = () => {
  const [select, setSelect] = useState(null);
  const [count, setCount] = useState(0);

  const handleSelect = (item) => setSelect(item);

  return (
    <div>
      <UserList handleSelect={handleSelect} list={["A", "B", "c", "D"]} />
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
    </div>
  );
};

export default ListWithoutUseCallback;

// Problem: List re-renders even when only count changes.