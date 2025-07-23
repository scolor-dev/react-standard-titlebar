// ==============================
// react-standard-titlebar entry
// ==============================

// ----------------------------------
// ✅ Export main components
// ----------------------------------

// [EN] Titlebar component
// [JP] タイトルバーのメインコンポーネント
export { Titlebar } from './components/Titlebar';

// [EN] ThemeProvider component
// [JP] テーマを適用するためのコンテキストプロバイダ
export { ThemeProvider } from './context/ThemeProvider';

// ----------------------------------
// ✅ Export TypeScript types
// ----------------------------------

// [EN] ThemeProvider Props type
// [JP] ThemeProvider 用の型
export type { ThemeProviderProps } from './context/ThemeProvider';

// [EN] Titlebar Props type
// [JP] Titlebar 用の型
export type { TitlebarProps } from './components/Titlebar';

// [EN] Import global SCSS entry point for theme variables and titlebar styles
// [JP] グローバルSCSSエントリをインポート（テーマ変数とTitlebarスタイル用）
import './styles/index.scss';