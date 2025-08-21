# 🌐 Browser APIs: Complete Guide

Browser APIs (Application Programming Interfaces) are built-in interfaces provided by web browsers that allow developers to interact with and manipulate the browser environment, user devices, and web documents.

---

## 🧠 Why Browser APIs Matter

* Enhance web apps with native-like features
* Access device hardware (camera, battery, GPS)
* Store data locally
* Enable interactive, responsive behavior
* Improve user experience by accessing system-level capabilities

---

## 🗂️ Categories of Browser APIs

### 1. **DOM & Event APIs**

* Manipulate HTML, CSS
* Attach event listeners
* Example: `document.getElementById()`, `addEventListener()`

### 2. **Storage APIs**

* LocalStorage, SessionStorage
* IndexedDB
* Cookies
* Cache API

### 3. **Networking APIs**

* `fetch()`
* WebSocket
* XMLHttpRequest
* Beacon API

### 4. **Multimedia APIs**

* Audio/Video
* MediaDevices (Camera, Microphone)
* WebRTC

### 5. **Device APIs**

* Geolocation
* Battery
* Clipboard
* Vibration
* Sensor APIs (Accelerometer, Gyroscope)

### 6. **Data Handling APIs**

* Blob
* FileReader
* URL
* Drag and Drop API

### 7. **Scripting & Timing APIs**

* `setTimeout()`, `setInterval()`
* `requestAnimationFrame()`
* Performance API

### 8. **UI APIs**

* Fullscreen
* Notifications
* Page Visibility
* Dialog API

### 9. **Web Workers & Threads**

* Web Workers
* Service Workers
* Shared Workers

### 10. **Security & Authentication**

* CORS
* Content Security Policy (CSP)
* Credential Management API
* Cross-Origin Isolation

---

## 📦 Commonly Used Browser APIs (with Interview Use-Cases)

### 1. **LocalStorage / SessionStorage**

```js
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');
```

**Interview Q:** How would you persist user preferences across sessions?

---

### 2. **Geolocation API**

```js
navigator.geolocation.getCurrentPosition((pos) => {
  console.log(pos.coords.latitude, pos.coords.longitude);
});
```

**Interview Q:** How would you implement location-based features?

---

### 3. **Fetch API**

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data));
```

**Interview Q:** How do you handle HTTP requests in the browser?

---

### 4. **Clipboard API**

```js
navigator.clipboard.writeText("Copied!").then(() => alert("Copied!"));
```

**Interview Q:** How would you implement copy-to-clipboard functionality?

---

### 5. **Battery API**

```js
navigator.getBattery().then(battery => {
  console.log(`Battery: ${battery.level * 100}%`);
});
```

**Interview Q:** How can you optimize app behavior based on device battery?

---

### 6. **Fullscreen API**

```js
document.documentElement.requestFullscreen();
```

**Interview Q:** How would you implement a fullscreen mode toggle?

---

### 7. **Page Visibility API**

```js
document.addEventListener("visibilitychange", () => {
  if (document.hidden) console.log("Page is hidden");
});
```

**Interview Q:** How can you pause media when the tab is inactive?

---

### 8. **Notification API**

```js
Notification.requestPermission().then(() => {
  new Notification("Hello World!");
});
```

**Interview Q:** How would you alert users of important actions?

---

### 9. **SpeechSynthesis API**

```js
const msg = new SpeechSynthesisUtterance("Hello!");
speechSynthesis.speak(msg);
```

**Interview Q:** How do you add voice output to your app?

---

### 10. **Web Workers**

```js
const worker = new Worker("worker.js");
worker.postMessage("Hello");
```

**Interview Q:** How would you handle performance-intensive tasks in the browser?

---

## 🧪 Advanced APIs

* **Credential Management API**: Handle user login seamlessly
* **MediaDevices API**: Stream camera/audio input
* **Service Workers**: Offline support and caching
* **DeviceOrientation**: Tilt/rotation detection
* **Pointer Lock API**: Used in games and immersive experiences
* **Beacon API**: For sending small data to server when the page is unloading
* **Payment Request API**: Streamline checkout flows
* **Intersection Observer**: Detect visibility of elements in viewport

---

## 💼 Senior-Level Interview Tips & Deep Dive Questions

1. **How would you manage large file uploads using FileReader and Web Workers?**
2. **How can you implement real-time sync using WebSockets and Service Workers?**
3. **Discuss the difference between cookies, localStorage, and IndexedDB with pros/cons.**
4. **Explain CORS and how you’d debug it.**
5. **How can the Performance API be used to optimize loading times?**
6. **When would you use requestIdleCallback vs requestAnimationFrame?**
7. **How would you detect and respond to device orientation changes?**
8. **How to secure communication between the browser and server using browser APIs?**
9. **How can browser APIs help create progressive web apps (PWAs)?**
10. **What happens when a service worker intercepts a fetch event?**

---

## 🔍 Tips for Interview

* Always mention **progressive enhancement** (check for API support before using)
* Emphasize **graceful fallback**
* Be ready to explain **async behavior**
* Use **`try/catch`** and **`.catch()`** when working with promises
* Demonstrate **real-world use cases** like authentication, offline-first apps, responsive UI, etc.
* Know **when not to use an API** (e.g., excessive localStorage for sensitive data)

---

## ✅ Wrap-up

Mastering browser APIs lets you unlock the full potential of the browser. React and modern JavaScript offer seamless ways to leverage these APIs to build immersive, accessible, and high-performance applications. Deep knowledge of these APIs can help you stand out in senior-level interviews and deliver robust web experiences.
