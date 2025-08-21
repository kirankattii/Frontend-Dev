import React, { useEffect } from "react";

const ComponentDidMount = () => {
  useEffect(() => {
    console.log("This component is updated");
  }, []);

  return (
    <div className="p-6 bg-green-100 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-green-800">
        Mount Example Open console to see mount log.
      </h1>
    </div>
  );
};

export default ComponentDidMount;


// Explanation (Interview Angle)

// This mimics componentDidMount in class components.

// Dependency array [] ensures effect runs only once after initial render.

// Senior devs should know this is often used for initial API calls or setup logic.