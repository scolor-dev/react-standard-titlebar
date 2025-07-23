# React Standard Titlebar

A customizable and themeable titlebar component for React applications.  
Ideal for Electron apps or custom window UIs.

---

## ✨ Features

- Easy to customize colors and styles
- Supports custom themes
- Lightweight and simple API
- Compatible with React 18+

---

## 📦 Installation

```bash
npm install react-standard-titlebar
```
## 🚀 Usage
```
import React from 'react';
import { ThemeProvider, Titlebar } from 'react-standard-titlebar';

function App() {
  return (
    <ThemeProvider
      theme="custom"
      headerBg="#333"
      logoColor="#fff"
      buttons={{
        base: { color: '#fff' },
        exit: { hoverBg: '#e00' },
      }}
    >
      <Titlebar title="My App" />
    </ThemeProvider>
  );
}

export default App;
```

## ⚙️ Props

### `<ThemeProvider>`

| Prop       | Type     | Description                                  |
|------------|----------|----------------------------------------------|
| `theme`    | `string` | Theme name (e.g., `'custom'`)                |
| `headerBg` | `string` | Background color for the titlebar            |
| `logoColor`| `string` | Color for the logo text                      |
| `buttons`  | `object` | Button style config `{ base, min, max, exit }` |

---

### `<Titlebar>`

| Prop               | Type                              | Description                                  |
|--------------------|-----------------------------------|----------------------------------------------|
| `title`            | `React.ReactNode`                 | Title text or logo                           |
| `onMinimize`       | `() => void`                      | Callback for minimize button click           |
| `onMaximizeToggle` | `(isMaximized: boolean) => void`  | Callback for maximize/restore toggle click   |
| `onExit`           | `() => void`                      | Callback for exit button click               |

## 🛠️ Development
```bash
# Clone repo
git clone https://github.com/scolor-dev/react-standard-titlebar.git

# Install dependencies
npm install

# Build library
npm run build
```

## 📝 License

MIT © scolor-dev

## 📫 Author

GitHub: scolor-dev