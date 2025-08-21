// Home.js
import React, { useContext } from "react";
import { ThemeContext } from "../context/TheamContext";

export default function Home() {
  // 3️⃣ Consume context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        className="px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
      >
        Toggle Theme
      </button>
    </div>
  );
}
