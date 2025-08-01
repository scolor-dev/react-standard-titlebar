
# React Standard Titlebar

React アプリケーション向けの、カスタマイズ可能でテーマ対応のタイトルバーコンポーネントです。  
Electron アプリやカスタムウィンドウ UI に最適です。

---

## ✨ 特徴

- 色やスタイルを簡単にカスタマイズ可能
- カスタムテーマをサポート
- 軽量でシンプルな API
- React 18+ に対応

---

## 📦 インストール

```bash
npm install react-standard-titlebar
```

## 🚀 使い方

```tsx
import React from 'react';
import { TitlebarProvider, Titlebar } from 'react-standard-titlebar';

function App() {
  return (
    <TitlebarProvider
      theme="light"
      layout="standard"
    >
      <Titlebar title="My App" />
    </TitlebarProvider>
  );
}

export default App;
```

## ⚙️ Props

### `<TitlebarProvider>`

| Prop        | Type     | 説明                                                   |
|-------------|----------|--------------------------------------------------------|
| `theme`      | `string` | テーマ名 (`'light'`, `'dark'`, `'system'`, `'hide-light'`, `'hide-dark'`, `'hide-system'`) |
| `layout`     | `string` | レイアウト: `'standard'`, `'slim'`, etc.       |

---

### `<Titlebar>`

| Prop               | Type                              | 説明                                             |
|--------------------|-----------------------------------|--------------------------------------------------|
| `title`            | `React.ReactNode`                 | タイトルテキストやロゴ                           |
| `onMinimize`       | `() => void`                      | 最小化ボタンクリック時のコールバック             |
| `onMaximizeToggle` | `(isMaximized: boolean) => void`  | 最大化/リストア切り替えボタンクリック時のコールバック |
| `onExit`           | `() => void`                      | 終了ボタンクリック時のコールバック               |

## 🛠️ 開発

```bash
# リポジトリをクローン
git clone https://github.com/scolor-dev/react-standard-titlebar.git

# 依存関係をインストール
npm install

# ライブラリをビルド
npm run build
```

## 📝 ライセンス

MIT © scolor-dev

## 📫 作者

GitHub: scolor-dev
