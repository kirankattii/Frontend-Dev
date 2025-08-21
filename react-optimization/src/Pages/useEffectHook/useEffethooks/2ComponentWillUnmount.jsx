// import React, { useEffect } from "react";

// const ComponentWillUnmount = () => {
//   useEffect(() => {
//     const id = setInterval(() => {
//       console.log("Running");
//     }, 1000);

//     return () => {
//       clearInterval(id);
//       console.log("Component will unmount");
//     };
//   }, []);

//   return (
//     <div className="p-6 bg-red-100 rounded-lg shadow-md text-center">
//       <h1 className="text-2xl font-bold text-red-800">
//         Unmount Example- Unmount to see cleanup log
//       </h1>
//     </div>
//   );
// };

// export default ComponentWillUnmount;


import React, { useEffect } from "react";

export default function ComponentWillUnmount() {
  useEffect(() => {
    const id = setInterval(() => console.log("Running..."), 1000);

    return () => {
      clearInterval(id);
      console.log("Component unmounted");
    };
  }, []);

  return (
    <div className="p-6 bg-red-100 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-red-800">Unmount Example</h1>
      <p className="text-red-700">Unmount to see cleanup log.</p>
    </div>
  );
}
