
import React, { memo, useState } from "react";

const Header = memo(() => {
  console.log("Header Rendered");
  return <header>Header</header>;
});

const Footer = memo(() => {
  console.log("Footer Rendered");
  return <div>Footer Rendered</div>;
});

const MultipleCompWithMemo = () => {
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

export default MultipleCompWithMemo;

// Result: Only the button’s count changes cause necessary re-renders; Header and Footer remain static.

