import React, { useState } from "react";

const Profile = ({ user }) => {
  console.log("User Profile");
  return <div>{user.name}</div>;
};

const PassingObjectWithoutMemo = () => {
  const [age, setAge] = useState(25);
  return <div className="p-5">
    <Profile user={{name:"Kiran Katti"}}/>
    <button onClick={()=>setAge(age+1)} className="p-2 px-4 border bg-green-300">Increment {age}</button>
  </div>;
};

export default PassingObjectWithoutMemo;

// Issue: Profile always re-renders because a new object { name: "John" } is created each time.

