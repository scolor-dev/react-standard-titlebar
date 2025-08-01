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

```tsx
import React from 'react';
import { TitlebarProvider, Titlebar, Layout } from 'react-standard-frame';

function App() {
  return (
    <TitlebarProvider
      theme="custom"
      layout="standard"
    >
      <Layout>
        <Titlebar title="My App" />
        {/* Main content here */}
      </Layout>
    </TitlebarProvider>
  );
}

export default App;
```

## ⚙️ Props

### `<TitlebarProvider>`

| Prop       | Type     | Description                                  |
|------------|----------|----------------------------------------------|
| `theme`      | `string` | Theme name (`'light'`, `'dark'`, `'system'`, `'hide-light'`, `'hide-dark'`, `'hide-system'`) |
| `layout`     | `string` | Layout mode: `'standard'`, `'slim'`, etc.       |

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