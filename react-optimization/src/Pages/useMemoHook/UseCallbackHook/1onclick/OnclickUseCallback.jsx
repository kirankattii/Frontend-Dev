import { memo, useCallback, useState } from "react";

const OnclickFun = memo(({ onClick }) => {
  console.log("Handle Onclick Function");
  return (
    <div>
      <button onClick={onClick}>Increment</button>
    </div>
  );
});

const OnclickUseCallback = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <OnclickFun onClick={handleClick} />
      {count} <br />
      <input
        placeholder="Enter a Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default OnclickUseCallback;

// Result: Child only re-renders when handleClick changes (which here is never).