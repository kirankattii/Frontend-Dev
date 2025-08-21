// import React, { useEffect, useState } from "react";

// const PollingExample = () => {
//   const [time, setTime] = useState(new Date());
//   useEffect(() => {
//     const intervel = setInterval(() => {
//       fetch("https://worldtimeapi.org/api/timezone/Etc/UTC")
//         .then((res) => res.json())
//         .then((data) => setTime(new Date(data.datetime)));
//     }, 5000);
//     return () => {
//       clearInterval(intervel);
//     };
//   }, []);
//   return (
//     <div>
//   <p className="text-yellow-700 mt-2">{time.toUTCString()}</p>    </div>
//   );
// };

// export default PollingExample;


import React, { useEffect, useState } from "react";

export default function PollingExample() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://worldtimeapi.org/api/timezone/Etc/UTC")
        .then((res) => res.json())
        .then((data) => setTime(new Date(data.datetime)));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-yellow-100 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-yellow-800">Polling Time</h1>
      <p className="text-yellow-700 mt-2">{time.toUTCString()}</p>
    </div>
  );
}

// Explanation

// Runs a fetch every 5 seconds.
// Senior dev tip: Always cleanup with clearInterval.

