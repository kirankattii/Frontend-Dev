import { filter } from "lodash";
import React, { useEffect, useState } from "react";

const ObjectDependencyPitfall = () => {
  const [filter, setFilter] = useState({ search: "" });
  useEffect(() => {
    console.log("Filter obj", filter);
  }, [filter]);
  return (
    <div>
      <input
        type="text"
        value={filter.search}
        placeholder="Enter"
        onChange={(e) => setFilter({ search: e.target.value })}
      />
    </div>
  );
};

export default ObjectDependencyPitfall;


// Explanation

// Objects/arrays always trigger effect because references change.

// Interview tip: Use useMemo or serialize dependencies to avoid unnecessary runs.