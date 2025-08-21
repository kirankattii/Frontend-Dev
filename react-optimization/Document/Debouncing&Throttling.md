
# Debouncing vs Throttling in JavaScript and React

Both debouncing and throttling are optimization techniques used to limit the rate at which a function executes, especially useful for performance-heavy tasks like scrolling, resizing, searching, etc.

---

## 🔁 Debouncing

- **Definition:** Debouncing delays function execution until a specified time has passed since the last time the function was invoked.
- **Use Case:** Input validation, search fields, window resize — when you want to fire the function *after* the user stops typing or interacting.
- **Behavior:** Fires **only once** after the user stops triggering the event.

### 📌 Example
> If you type in a search box and debounce is set to 500ms, the API will only trigger 500ms after you've stopped typing.

```js
// Debounce logic
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}
```

---

## 🚀 Throttling

- **Definition:** Throttling ensures a function is called at most once every X milliseconds, regardless of how often the event occurs.
- **Use Case:** Scroll events, mouse movement, resize — where constant triggering could affect performance.
- **Behavior:** Executes the function at regular intervals even if events are fired repeatedly.

### 📌 Example
> If a scroll event fires 100 times a second, throttling with 500ms will call the function once every 500ms.

```js
// Throttle logic
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

---

## 🔍 Summary Table

| Feature     | Debounce                            | Throttle                           |
|-------------|-------------------------------------|------------------------------------|
| Execution   | Waits until event stops             | Executes at regular intervals      |
| Use Case    | Search input, form validation       | Scroll, resize, mousemove          |
| Frequency   | Once after inactivity               | Many times, but limited rate       |
| Delay Type  | Delayed until no further calls      | Fixed delay between executions     |
| Main Goal   | Group rapid calls into one          | Spread calls evenly over time      |

---

## 💻 React Example: Debounced Search

```jsx
import React, { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

export default function DebounceSearch() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (debouncedQuery) {
      setResult(`Searching for "${debouncedQuery}"...`);
    } else {
      setResult("");
    }
  }, [debouncedQuery]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Debounced Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-3 py-2 w-full rounded mb-4"
        placeholder="Type to search..."
      />
      <p className="text-gray-600">{result}</p>
    </div>
  );
}
```

---

## 💻 React Example: Throttled Resize

```jsx
import React, { useEffect, useState } from "react";

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      return func(...args);
    }
  };
}

export default function ThrottleResize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = throttle(() => {
      setWidth(window.innerWidth);
    }, 1000);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Throttled Resize</h2>
      <p className="text-gray-600">Window width: {width}px</p>
    </div>
  );
}
```

---

## 🧾 Summary in Code Terms

| Behavior   | Debouncing              | Throttling                |
|------------|--------------------------|----------------------------|
| Hook       | `useDebounce()`         | `throttle()`               |
| Timing     | Executes after inactivity | Executes at intervals     |
| API Calls  | 1 call after typing ends | Regular logs during scroll/resize |