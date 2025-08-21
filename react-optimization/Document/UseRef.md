# useRef in React – Complete Guide

## 📌 What is `useRef`?

`useRef` is a Hook provided by React that allows you to persist values across renders **without triggering a re-render** when the value changes.

```js
import { useRef } from 'react';

const myRef = useRef(initialValue);
```

The `.current` property of the `ref` object holds the value.

---

## 🌟 Why is `useRef` Used?

* To access DOM elements directly.
* To persist values across renders without re-rendering.
* To store interval timers, animation references, or previous props/state.
* To manage focus, text selection, or media playback.

---

## 💡 Advantages of `useRef`

| Advantage              | Description                                                           |
| ---------------------- | --------------------------------------------------------------------- |
| ✅ No re-render         | Changing `.current` does NOT cause re-renders.                        |
| ✅ DOM Access           | Provides a reference to DOM elements (like `document.querySelector`). |
| ✅ Store Mutable Values | Keeps any mutable value around across renders.                        |
| ✅ Useful for Timers    | Excellent for managing intervals and timeouts.                        |

---

## 🆚 Controlled vs Uncontrolled Components

### 🔸 Controlled Components

* These components use React's state to control form inputs.
* Every input field change is tracked via state and updated with `setState`.
* Provides better control, validation, and synchronization with business logic.

**Advantages:**

* Easy validation and formatting.
* State represents the UI accurately.
* Integrated with React's state lifecycle.

**Disadvantages:**

* More boilerplate code.
* Performance can degrade for large forms due to re-renders.

**Example:**

```jsx
import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 🔸 Uncontrolled Components

* These components maintain their own internal state.
* You interact with the form values using `ref` instead of React state.

**Advantages:**

* Less code to write and manage.
* Better performance for large or dynamic forms.
* Simpler for integrating with non-React libraries.

**Disadvantages:**

* Less control over the data.
* Harder to validate or manipulate inputs programmatically.

**Example:**

```jsx
import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### ⚖️ Comparison

| Feature                | Controlled | Uncontrolled |
| ---------------------- | ---------- | ------------ |
| React state            | Yes        | No           |
| Ref usage              | No         | Yes          |
| Value binding          | Two-way    | One-way      |
| Real-time validation   | Easy       | Manual       |
| More flexible          | ❌          | ✅            |
| Form libraries support | ✅          | ❌            |

---

## 🤝 Real-World Use Cases

1. **Focusing Input:** Automatically focus an input on mount.
2. **Persisting Timers:** Save and clear intervals without rerenders.
3. **Click Outside Detection:** Detect clicks outside a modal/dropdown.
4. **Access Previous Props/State:** Store values between renders.
5. **Scroll Position Tracking:** Save scroll value without causing re-renders.

---

## ❓ useRef Interview Questions & Answers

### Q1: What is `useRef` in React?

**A:** `useRef` is a Hook that returns a mutable ref object whose `.current` property is initialized to the passed argument and persists for the lifetime of the component.

---

### Q2: What are common use cases for `useRef`?

**A:** DOM access, timers, tracking previous state, click outside detection, form value access (uncontrolled components).

---

### Q3: Does changing `useRef().current` trigger a re-render?

**A:** No. That’s one of the key features of `useRef`. It's ideal for values that need persistence but should not cause re-rendering.

---

### Q4: How is `useRef` different from `useState`?

**A:** `useState` triggers re-render on update; `useRef` does not. `useRef` is ideal for mutable values and DOM refs.

---

### Q5: What is the difference between controlled and uncontrolled components?

**A:** Controlled components use React state to manage form inputs; uncontrolled components manage their own state internally and are accessed via refs.

---

### Q6: Can you use `useRef` to store previous props or state?

**A:** Yes. You can store values between renders manually using `useEffect` and `useRef`.

```jsx
const prevCountRef = useRef();
useEffect(() => {
  prevCountRef.current = count;
}, [count]);
```

---

### Q7: Is `useRef` synchronous or asynchronous?

**A:** Accessing or setting `.current` is synchronous.

---

### Q8: Coding Interview Scenarios Using `useRef`

**Q:** Create a button that focuses an input field using `useRef`.

**A:**

```jsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}
```

---

**Q:** Build a timer component that starts/stops using `useRef`.

**A:**

```jsx
import React, { useRef, useState } from 'react';

function Timer() {
  const timerRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <h2>{seconds}s</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
```

---

## 📅 Conclusion

`useRef` is a powerful and flexible Hook in React. Whether you are managing form inputs, accessing DOM elements, or tracking values between renders, mastering `useRef` is essential for clean and performant React code.
