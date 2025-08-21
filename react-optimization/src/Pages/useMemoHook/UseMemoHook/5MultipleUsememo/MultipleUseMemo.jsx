// import React, { useMemo, useState } from "react";

// const MultipleUseMemo = () => {
//   const [a, setA] = useState(1);
//   const [b, setB] = useState(1);

//   const factorial = (n) => {
//     console.log(`Calculating factorial(${n})`);
//     return n <= 1 ? 1 : n * factorial(n - 1);
//   };

//   const fib = (n) => {
//     console.log(`Calculating fibonacci(${n})`);
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//   };

//   const factA = useMemo(()=>factorial(a),[a]);
//   const fibB = useMemo(()=>fib(b),[b]);

//   return (
//     <div className="p-5">
//       <button onClick={() => setA(a + 1)}>Increment A ({a})</button>
//       <button onClick={() => setB(b + 1)}>Increment B ({b})</button>
//       <p>Factorial: {factA}</p>
//       <p>Fibonacci: {fibB}</p>
//     </div>
//   );
// };

// export default MultipleUseMemo;



import React, { useState, useMemo } from "react";

export default function MultipleUseMemo() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);

  const factorial = (n) => {
    console.log(`Calculating factorial(${n})`);
    return n <= 1 ? 1 : n * factorial(n - 1);
  };

  const fib = (n) => {
    console.log(`Calculating fibonacci(${n})`);
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  };

  const factA = useMemo(() => factorial(a), [a]);
  const fibB = useMemo(() => fib(b), [b]);

  return (
    <div className="p-5">
      <button onClick={() => setA(a + 1)}>Increment A ({a})</button>
      <button onClick={() => setB(b + 1)}>Increment B ({b})</button>
      <p>Factorial: {factA}</p>
      <p>Fibonacci: {fibB}</p>
    </div>
  );
}
