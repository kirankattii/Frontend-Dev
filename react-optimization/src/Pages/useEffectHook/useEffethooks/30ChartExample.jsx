import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function ChartExample() {
  const canvasRef = useRef();

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          { label: "Votes", data: [12, 19, 3], backgroundColor: ["#f87171", "#60a5fa", "#facc15"] },
        ],
      },
    });
    return () => chart.destroy();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-[500px]">
      <h1 className="text-xl font-bold mb-4">Chart.js Example</h1>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

// Explanation

// Initializes Chart.js inside useEffect after DOM mounts.
// Senior tip: Always destroy charts on cleanup to avoid memory leaks.