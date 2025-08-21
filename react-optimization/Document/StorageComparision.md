# 📦 Difference Between `localStorage` and `sessionStorage` in JavaScript

Both `localStorage` and `sessionStorage` are part of the **Web Storage API**, which allows websites to store data in a user's browser. Although similar, they have **different lifespans and scopes**.

---

## 🧠 Main Differences

| Feature             | `localStorage`                              | `sessionStorage`                          |
|---------------------|----------------------------------------------|-------------------------------------------|
| **Persistence**     | Until explicitly cleared (manual/user)       | Until tab or browser window is closed     |
| **Scope**           | Shared across tabs and windows (same origin) | Unique to each tab/window (same origin)   |
| **Storage Limit**   | ~5–10 MB depending on browser                | ~5 MB depending on browser                |
| **Accessed Via**    | `window.localStorage`                        | `window.sessionStorage`                   |
| **Auto Expiry**     | ❌ No expiry                                  | ✅ Expires when tab closes                 |

---

## ✅ Use Cases

### 📂 `localStorage`

| Use Case                             | Reason |
|--------------------------------------|--------|
| Save user preferences (e.g., theme)  | Data persists across sessions |
| Persist JWT/auth tokens              | Available after reload/restart |
| Offline-first apps                   | Cache content locally |
| "Remember Me" login                  | Needed beyond current session |

### 🕒 `sessionStorage`

| Use Case                             | Reason |
|--------------------------------------|--------|
| Step-based forms or wizards          | Clear after tab close |
| Payment or booking flows             | Isolated to one tab |
| Prevent form resubmission            | Session-scoped data |
| Temporary UI states                  | Don’t persist across tabs or reloads |

---

## 🔐 Security Considerations

- Do **not** store sensitive information (passwords, card numbers, etc.).
- Susceptible to **Cross-Site Scripting (XSS)** attacks.
- Data is stored in **plain text**.
- Always sanitize inputs and validate user actions.

---

## 🧪 Code Examples

### 📦 `localStorage`

```js
// Set item
localStorage.setItem('theme', 'dark');

// Get item
const theme = localStorage.getItem('theme');

// Remove item
localStorage.removeItem('theme');

// Clear all
localStorage.clear();
```

---

### 📦 `sessionStorage`

```js
// Set item
sessionStorage.setItem('sessionId', 'abc123');

// Get item
const sessionId = sessionStorage.getItem('sessionId');

// Remove item
sessionStorage.removeItem('sessionId');

// Clear all
sessionStorage.clear();
```

---

## 📌 Summary Table

| Feature                  | `localStorage`      | `sessionStorage`    |
|--------------------------|----------------------|----------------------|
| Persistent After Close   | ✅ Yes               | ❌ No                |
| Tab Specific             | ❌ No                | ✅ Yes               |
| Max Size                 | ~5-10 MB             | ~5 MB                |
| Intended Use             | Long-term data       | Per-session data     |

---

## 💬 Interview Tip

**Q: When would you choose `sessionStorage` over `localStorage`?**  
**A:** Use `sessionStorage` when you want the data to **automatically expire when the tab is closed**, such as for temporary form input, one-time flows (like checkout), or isolating state per tab instance.