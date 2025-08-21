import React, { useState } from "react";

const FormEvents = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submited ${input}` );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) =>{
             setInput(e.target.value)
             console.log(e.target.value);
             }
          }
          placeholder="Enter a text"
          className="border border-black text-xl"
          value={input}
        />
        <button type="submit">Submit the form</button>
      </form>
    </div>
  );
};

export default FormEvents;
