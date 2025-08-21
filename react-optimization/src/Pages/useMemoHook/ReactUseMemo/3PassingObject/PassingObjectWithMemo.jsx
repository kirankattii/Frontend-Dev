
import React, { memo, useMemo, useState } from "react";

const Profile = memo(({ user }) => {
  console.log("User Profile");
  return <div>{user.name}</div>;
  
});

const PassingObjectWithMemo = () => {
  const [age, setAge] = useState(25);

  const user = useMemo(()=>({name:"Kiran Katti"}),[])
  
  return <div className="p-5">
    <Profile user={user}/>
    <button onClick={()=>setAge(age+1)} className="p-2 px-4 border bg-green-300">Increment {age}</button>
  </div>;
};

export default PassingObjectWithMemo;

// With React.memo + useMemo for prop stability
// Result: Now Profile renders only once.