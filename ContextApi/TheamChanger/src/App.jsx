// App.js
import React from "react";
import { ThemeProvider } from "./context/TheamContext";
import Home from "./components/Home";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
