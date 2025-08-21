import React, { useEffect, useState } from "react";

function useDebouncing(form, delay) {
  const [debounced, setDebounced] = useState(form);
  useEffect(() => {
    const handleForm = setTimeout(() => {
      setDebounced(form);
    }, delay);

    return () => clearTimeout(handleForm);
  }, [form]);
  return debounced
}

const FormSubmitValidation = () => {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState(null);
  const formDebounce = useDebouncing(username, 500);

  useEffect(() => {
    fetch("https://reqres.in/api/users?delay=1").then(() =>
      setStatus(formDebounce.length > 3 ? "Valid" : "Inalid")
    );
  }, [formDebounce]);

  return (
    <div>
      <input
        placeholder="Enter a username"
        className="w-full"
        onChange={(e) => setUsername(e.target.value)}
      />
      {status && (
        <h2
          className={`${
            status === "Valid" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </h2>
      )}
    </div>
  );
};

export default FormSubmitValidation;



// import React, { useState, useEffect } from 'react';

// const useDebounce = (value, delay) => {
//   const [debounced, setDebounced] = useState(value);
//   useEffect(() => {
//     const handler = setTimeout(() => setDebounced(value), delay);
//     return () => clearTimeout(handler);
//   }, [value]);
//   return debounced;
// };

// export default function FormValidationAPI() {
//   const [username, setUsername] = useState('');
//   const [status, setStatus] = useState(null);
//   const debouncedUsername = useDebounce(username, 600);

//   useEffect(() => {
//     if (!debouncedUsername) return;
//     fetch('https://reqres.in/api/users?delay=1')
//       .then(() => {
//         setStatus(debouncedUsername.length > 3 ? 'Valid' : 'Too Short');
//       });
//   }, [debouncedUsername]);

//   return (
//     <div className="max-w-sm mx-auto p-6">
//       <input
//         type="text"
//         className="w-full border p-2 rounded"
//         placeholder="Enter username"
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       {status && (
//         <p className={`mt-2 ${status === 'Valid' ? 'text-green-500' : 'text-red-500'}`}>
//           {status}
//         </p>
//       )}
//     </div>
//   );
// }
