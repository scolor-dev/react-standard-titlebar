// ==============================
// react-standard-titlebar entry
// ==============================

// ----------------------------------
// ✅ Export main components
// ----------------------------------

// [EN] Titlebar component
// [JP] タイトルバーのメインコンポーネント
export { Titlebar } from './components/Titlebar';

// [EN] TitlebarProvider component
// [JP] テーマを適用するためのコンテキストプロバイダ
export { TitlebarProvider } from './context/TitlebarProvider';

// ----------------------------------
// ✅ Export TypeScript types
// ----------------------------------

// [EN] TitlebarProvider Props type
// [JP] TitlebarProvider 用の型
export type { TitlebarProviderProps } from './context/TitlebarProvider';

// [EN] Titlebar Props type
// [JP] Titlebar 用の型
export type { TitlebarProps } from './components/Titlebar';

// [EN] Import global SCSS entry point for theme variables and titlebar styles
// [JP] グローバルSCSSエントリをインポート（テーマ変数とTitlebarスタイル用）
import './styles/index.scss';