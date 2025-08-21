# React Events: Complete Guide

## 📌 What is an Event in React?

In **React**, an event is a response to user interaction or browser behavior — like clicking a button, submitting a form, or moving the mouse. React uses its own event system called **Synthetic Events**, which wraps native browser events and provides a consistent API across all browsers.

---

## ✅ Why Use Events in React?

Events allow developers to:

* Handle user interactions (e.g., clicks, typing, scrolls)
* Update component state based on input
* Perform validations or fetch data
* Improve UI interactivity and responsiveness

---

## ⚙️ Common React Events

| Event Name           | Trigger                      |
| -------------------- | ---------------------------- |
| `onClick`            | Click on an element          |
| `onChange`           | Change in input/select value |
| `onSubmit`           | Form submission              |
| `onKeyDown`          | Key press (key down)         |
| `onKeyUp`            | Key release (key up)         |
| `onMouseEnter`       | Mouse enters an element      |
| `onMouseLeave`       | Mouse leaves an element      |
| `onFocus` / `onBlur` | Input focus / blur           |
| `onInput`            | Input field value changes    |
| `onDoubleClick`      | Double click                 |
| `onContextMenu`      | Right-click event            |
| `onScroll`           | Scrolling                    |

---

## 🧠 Common Event Methods in React

React passes a **SyntheticEvent** object to every event handler, which has the same interface as the browser’s native event.

### 1. `event.preventDefault()`

* Prevents the default action associated with an event.
* Example: Preventing a form from refreshing the page on submit.

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted without reloading the page.");
};
```

### 2. `event.stopPropagation()`

* Prevents the event from bubbling up to parent elements.

```jsx
const handleInnerClick = (e) => {
  e.stopPropagation();
  console.log("Inner element clicked only.");
};
```

### 3. `event.stopImmediatePropagation()`

* Prevents **other listeners of the same event** from being called.
* Not commonly used in React. React usually attaches one handler per component.
* More useful in vanilla JavaScript or event delegation scenarios.

```js
element.addEventListener("click", function(e) {
  e.stopImmediatePropagation();
});
```

### 4. `event.persist()` (React only)

* React pools events for performance reasons. `event.persist()` removes the event from the pool, allowing asynchronous access.
* This is **rarely needed** in modern React (React 17+).

```jsx
const handleClick = (e) => {
  e.persist();
  setTimeout(() => {
    console.log(e.type); // Still accessible after delay
  }, 1000);
};
```

---

## 🔍 Example: Handling a Click Event with Methods

```jsx
import React from "react";

export default function EventExample() {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert(`Event type: ${e.type}`);
  };

  return (
    <div onClick={() => alert("Outer Div Clicked")} className="p-4 border">
      <button onClick={handleClick} className="bg-blue-500 px-4 py-2 text-white">
        Click Me
      </button>
    </div>
  );
}
```

---

## 🔄 What is Event Bubbling?

**Event bubbling** is a concept in the DOM (Document Object Model) where an event **starts from the innermost (target) element** and **propagates outward** through its ancestors (parent elements) until it reaches the `document` level.

In React (and JavaScript in general), when you click on a nested element, the event first triggers on the innermost element and then "bubbles up" through the parent elements unless explicitly stopped.

### 🔍 Example of Event Bubbling in React:

```jsx
import React from "react";

export default function BubblingExample() {
  const handleParentClick = () => {
    console.log("🧍 Parent clicked");
  };

  const handleChildClick = () => {
    console.log("🧒 Child clicked");
  };

  return (
    <div onClick={handleParentClick} className="p-8 bg-gray-200">
      <button onClick={handleChildClick} className="bg-blue-500 text-white p-2">
        Click Child Button
      </button>
    </div>
  );
}
```

#### 🧠 Output in console when button is clicked:

```
🧒 Child clicked
🧍 Parent clicked
```

### 🛑 Preventing Bubbling:

Use `event.stopPropagation()` to stop the event from bubbling to parent elements:

```jsx
const handleChildClick = (e) => {
  e.stopPropagation(); // ⛔ Stops bubbling
  console.log("🧒 Child clicked");
};
```

---

## 📌 Summary

* **React events** are synthetic, giving cross-browser consistency.
* Use handlers like `onClick`, `onChange`, and `onSubmit` to manage UI.
* Use `preventDefault()` to stop default behaviors.
* Use `stopPropagation()` to isolate event handling.
* Use `persist()` if you need to access events asynchronously (rare).
* Understand **event bubbling** to control how deeply nested interactions affect each other.

React's event system is fast, optimized, and easy to work with once you understand its methods and behaviors.
