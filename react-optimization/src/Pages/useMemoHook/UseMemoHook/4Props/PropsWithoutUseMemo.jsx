// import React, { useMemo, useState } from "react";

// const UserList = ({ users }) => {
//   const active = useMemo(() => {
//     console.log("Activeusers");
//     return users.filter((u) => u.active);
//   },[users]);
//   return (
//     <div>
//       {active.map((item) => (
//         <div>{item.name}</div>
//       ))}
//     </div>
//   );
// };

// const PropsWithoutUseMemo = () => {
//   const [count, setCount] = useState(0);
//   const users = [
//     { id: 1, name: "John", active: true },
//     { id: 2, name: "Jane", active: false },
//   ];

//   return (
//     <div>
//       <UserList users={users} />
//       <button onClick={() => setCount(count + 1)}>Increment {count}</button>
//     </div>
//   );
// };

// export default PropsWithoutUseMemo;


import React, { useState, useMemo } from "react";

const UserList = ({ users }) => {
  const activeUsers = useMemo(() => {
    console.log("Filtering active users");
    return users.filter((u) => u.active);
  }, [users]);

  return (
    <ul>
      {activeUsers.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
};

export default function PropsWithoutUseMemo() {
  const [count, setCount] = useState(0);
  const users = [
    { id: 1, name: "John", active: true },
    { id: 2, name: "Jane", active: false },
  ];

  return (
    <div className="p-5">
      <UserList users={users} />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}
