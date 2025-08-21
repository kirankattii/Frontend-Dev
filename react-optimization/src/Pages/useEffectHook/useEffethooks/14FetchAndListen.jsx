import React, { useEffect, useState } from "react";

const FetchAndListen = () => {
  const [user, setUser] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchuser = async () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(setUser)
    };

    fetchuser()

    const handleResize = () =>setWidth(window.innerWidth)

    window.addEventListener("resize",handleResize)

    return ()=>{
        window.removeEventListener("resize",handleResize)
    }
    
    
  }, []);

  return  <div className="p-6 bg-gray-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">Responsive User List</h1>
      <p className="mb-4">Window width: {width}px</p>
      {user.map((u) => (
        <div key={u.id} className="bg-white p-3 rounded shadow mb-2">
          {u.name}
        </div>
      ))}
    </div>;
};

export default FetchAndListen;


// Explanation

// Shows combining multiple responsibilities in one effect.
// Senior question: Why might you separate concerns into different useEffects for maintainability?

