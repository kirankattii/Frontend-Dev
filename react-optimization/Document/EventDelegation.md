# 📌 Event Delegation & Event Handling in JavaScript

---

## 📌 What is Event Delegation?

### 🧠 Definition:

**Event Delegation** is a technique in JavaScript where you **add a single event listener to a parent element** instead of each individual child. The event **bubbles** up from the target element to the parent, and you can catch it at the parent level.

---

### ✅ Why Use It?

* 🔁 Efficient — Reduces the number of event listeners.
* 🧱 Works even for dynamically added elements.
* 📉 Improves performance, especially in lists or grids.

---

### 🧪 Example (Vanilla JS):

```html
<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
```

```js
document.getElementById("menu").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

🟢 **Explanation:**

* You attach the event to the parent `ul`.
* Inside the handler, you check if the click came from an `LI`.
* No need to add listeners to every `li`.

---

## 🧠 How Do Events Work in JavaScript?

JavaScript uses a **three-phase event model**:

---

### 📚 1. **Event Phases:**

1. **Capture Phase (Trickling down):**

   * Event moves from `window` → `document` → parent → target.
   * Use with `{ capture: true }`.

2. **Target Phase:**

   * Event hits the **actual target element**.

3. **Bubbling Phase:**

   * Event moves **back up** the DOM from the target to the root.

---

### 🧪 Example of Bubbling:

```html
<div id="outer">
  <button id="inner">Click Me</button>
</div>
```

```js
document.getElementById("outer").addEventListener("click", () => {
  console.log("Outer Div Clicked");
});

document.getElementById("inner").addEventListener("click", () => {
  console.log("Button Clicked");
});
```

🟢 Output when you click the button:

```
Button Clicked
Outer Div Clicked
```

Because events **bubble**, both handlers fire.

---

### 🧰 Stopping Event Bubbling

```js
element.addEventListener("click", function (e) {
  e.stopPropagation(); // Stops bubbling
});
```

---

## 🧑‍💻 In React

React uses a synthetic event system with event delegation internally. You don’t need to worry about attaching handlers manually to each element—it does that efficiently behind the scenes.

---

## 👨‍💼 Interview Questions on Event Delegation

---

1. **What is event delegation and why is it useful?**

   * It’s a pattern where a single event listener handles events for multiple children. It saves memory and works for dynamic elements.

2. **How does event bubbling enable event delegation?**

   * Bubbling allows the parent to "see" events from its children, which delegation relies on.

3. **What’s the difference between event.target and event.currentTarget?**

   * `event.target`: actual element clicked.
   * `event.currentTarget`: the element that the event listener is attached to.

4. **What’s the difference between capturing and bubbling?**

   * Capturing goes top → down. Bubbling goes bottom → up.
