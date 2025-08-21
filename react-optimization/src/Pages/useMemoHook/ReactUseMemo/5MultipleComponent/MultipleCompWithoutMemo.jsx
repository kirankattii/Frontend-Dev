import React, { useState } from "react";

const Header = () => {
  console.log("Header Rendered");
  return <header>Header</header>;
};

const Footer = () => {
  console.log("Footer Rendered");
  return <div>Footer Rendered</div>;
};

const MultipleCompWithoutMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      <button
        className="px-4 py-2 border bg-yellow-200"
        onClick={() => setCount(count + 1)}
      >
        Increment {count}
      </button>
      <Footer />
    </div>
  );
};

export default MultipleCompWithoutMemo;

// Problem: Changing count re-renders Header and Footer even though their props never change.

// Summary for React.memo
// Aspect	             Without Memo	  V/S   With React.memo
// Re-render frequency	 All child components re-render when parent state changes V/S Only re-renders if props change
// Performance	         Can cause unnecessary expensive operations   V/S	Saves CPU time by skipping renders
// When to use	         Rarely for small components	V/S   Useful for pure functional components and expensive renders
