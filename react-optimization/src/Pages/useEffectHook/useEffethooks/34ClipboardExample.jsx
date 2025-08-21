// import React, { useEffect, useState } from "react";

// const ClipboardExample = () => {
//   const [copyed, setCopy] = useState(false);
//   useEffect(() => {
//     const handleCopy = () => {
//       setCopy(true);
//     };
//     document.addEventListener("copy", handleCopy);

//     return () => {
//       document.removeEventListener("copy", handleCopy);
//     };
//   }, []);
//   return (
//     <div>
//       <button
//         onClick={() => navigator.clipboard.writeText("Hello react How are you")}
//         className="border px-4 py-2 bg-blue-100"
//       >
//         Copy
//       </button>

//       {copyed && <span className="text-green-300">Coppied</span>}
      
//     </div>
//   );
// };

// export default ClipboardExample;


import React, { useEffect, useState } from "react";

export default function ClipboardExample() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleCopy = () => setCopied(true);
    document.addEventListener("copy", handleCopy);
    return () => document.removeEventListener("copy", handleCopy);
  }, []);

  return (
    <div className="p-6 bg-pink-100 rounded-lg shadow-md text-center">
      <h1 className="text-xl font-bold text-pink-800 mb-4">Clipboard API</h1>
      <button
        onClick={() => navigator.clipboard.writeText("Hello from React!")}
        className="px-4 py-2 bg-pink-500 text-white rounded-lg"
      >
        Copy Text
      </button>
      {copied && <p className="mt-2">✅ Text copied!</p>}
    </div>
  );
}

// Explanation

// Listens for copy events and uses Clipboard API.
// Senior note: Clipboard API only works in secure contexts (HTTPS).