# **Understanding React.memo, useMemo, and useCallback**

## **1. React.memo**

### **What it is:**

`React.memo` is a higher-order component (HOC) that memoizes a **functional component**, preventing it from re-rendering if its **props** haven't changed.

**Syntax:**

```javascript
export default React.memo(MyComponent);
```

**How it works:**

* It shallowly compares previous and new props.
* If they are the same, the component is skipped from re-rendering.
* Useful for pure components.

**When to use:**

* When your component:

  * Receives the same props frequently.
  * Has expensive rendering logic.
  * Is a child of a parent that re-renders often.

**Advantages:**

* Prevents unnecessary re-renders.
* Boosts performance in large applications.

**When NOT to use:**

* For small, simple components (overhead may outweigh benefits).
* When props always change (no memoization benefit).

---

## **2. useMemo**

### **What it is:**

`useMemo` memoizes the **result of a calculation** so it's recomputed only when dependencies change.

**Syntax:**

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

**How it works:**

* Executes the function on mount and whenever dependencies change.
* Returns cached result otherwise.

**When to use:**

* Expensive calculations (loops, filtering, sorting, data transformation).
* Derived data from props/state that doesn't need recalculation on every render.

**Advantages:**

* Optimizes expensive calculations.
* Prevents redundant computation.

**When NOT to use:**

* For lightweight calculations.
* Overusing can make code harder to maintain without real performance gain.

---

## **3. useCallback**

### **What it is:**

`useCallback` memoizes **a function** so it keeps the same reference between renders unless dependencies change.

**Syntax:**

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**How it works:**

* Returns a memoized function instance.
* Useful when passing callbacks to child components that rely on reference equality (e.g., `React.memo` components or dependencies in `useEffect`).

**When to use:**

* Passing callback props to memoized child components.
* Avoiding function re-creation for expensive operations.
* Functions used in dependency arrays of `useEffect` or `useMemo`.

**Advantages:**

* Prevents unnecessary re-renders of child components.
* Maintains stable function references.

**When NOT to use:**

* For inline functions in components that don't re-render frequently.
* Overuse can cause unnecessary complexity.

---

## **Comparison Table**

| Hook / HOC      | Memoizes  | Prevents re-renders? | Use case                                                                    |
| --------------- | --------- | -------------------- | --------------------------------------------------------------------------- |
| **React.memo**  | Component | ✅                    | Memoize whole component based on props                                      |
| **useMemo**     | Value     | ❌                    | Memoize expensive calculated values                                         |
| **useCallback** | Function  | ❌                    | Memoize function references to avoid triggering effects or child re-renders |

---

## **Best Practices:**

* **Measure performance** before adding memoization.
* Start simple, optimize later.
* Use `React.memo` for large components with stable props.
* Use `useMemo` for expensive calculations.
* Use `useCallback` when passing stable function references to children.

---

## **Example: All Three Together**

```javascript
import React, { useState, useMemo, useCallback } from 'react';

const Child = React.memo(({ onClick, data }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Count: {data}</button>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return count * 2;
  }, [count]);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Child onClick={handleClick} data={expensiveCalculation} />
    </div>
  );
}
```

**Explanation:**

* `React.memo(Child)` prevents unnecessary child re-renders.
* `useMemo` caches the expensive calculation.
* `useCallback` keeps the `handleClick` reference stable.

---

## **Conclusion:**

* **React.memo** → Memoizes components (based on props).
* **useMemo** → Memoizes computed values.
* **useCallback** → Memoizes function references.
* **Golden Rule** → Use them when there's a measurable performance issue due to unnecessary re-renders or recalculations.









# React.Memo 

| Aspect                | Without Memo                                      | With React.memo                                   |
|-----------------------|---------------------------------------------------|---------------------------------------------------|
| Re-render frequency   | All child components re-render when parent state changes | Only re-renders if props change                 |
| Performance           | Can cause unnecessary expensive operations        | Saves CPU time by skipping renders               |
| When to use           | Rarely for small components                       | Useful for pure functional components and expensive renders |




# useMemo Hook

| Aspect               | Without useMemo            | With useMemo                     |
|----------------------|----------------------------|----------------------------------|
| When recalculates    | On every render            | Only when dependencies change    |
| Purpose              | No caching                 | Caches computed value            |
| Use case             | Avoid premature optimization | For expensive computations or derived data |


# React Memoization

| Hook / Method  | What It Memoizes       | Without Memoization Problem                          | With Memoization Benefit                          |
|----------------|------------------------|-----------------------------------------------------|---------------------------------------------------|
| React.memo     | Entire component        | All children re-render on any parent state change   | Re-renders only if props change                   |
| useMemo        | Computed value          | Expensive computations run on every render          | Runs only when dependencies change                |
| useCallback    | Function reference      | Functions are recreated each render → causes unnecessary re-renders or effect triggers | Stable function reference between renders |