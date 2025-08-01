import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

/**
 * Theme
 *
 * [EN] Theme type.
 * Defines visual appearance and visibility modes:
 * - 'light' | 'dark' | 'system': visible standard themes
 * - 'hide-light' | 'hide-dark' | 'hide-system': hidden versions based on theme
 *
 * [JP] テーマタイプ。
 * 表示テーマと非表示テーマのモードを定義します：
 * - 'light'、'dark'、'system': 通常の表示モード
 * - 'hide-light'、'hide-dark'、'hide-system': 表示を隠すためのモード
 */
export type Theme = 'light' | 'dark' | 'system' | 'hide-light' | 'hide-dark' | 'hide-system';

/**
 * Layout
 *
 * [EN] Layout type.
 * Defines the layout style: 'standard' or 'slim'.
 *
 * [JP] レイアウトタイプ。
 * 使用可能なレイアウトスタイル: 'standard' または 'slim'。
 */
export type Layout = 'standard' | 'slim';

/**
 * TitlebarProviderProps
 *
 * [EN] Props accepted by the TitlebarProvider component.
 * - theme: Theme mode (including hide variants).
 * - layout: Layout style for the titlebar.
 * - children: React children wrapped by the provider.
 *
 * [JP] TitlebarProvider コンポーネントが受け取る props。
 * - theme: テーマモード（非表示バリエーション含む）
 * - layout: タイトルバーのレイアウトスタイル
 * - children: Providerで囲むReactの子要素
 */
export interface TitlebarProviderProps {
  theme?: Theme;
  layout?: Layout;
  children: ReactNode;
}

/**
 * TitlebarContextValue
 *
 * [EN] The resolved theme and layout values provided via Context.
 *
 * [JP] Context を通じて提供される、実際に適用されたテーマとレイアウト。
 */
interface TitlebarContextValue {
  theme: Theme;
  layout: Layout;
}

/**
 * TitlebarContext
 *
 * [EN] React Context holding the current theme and layout.
 * Use only within TitlebarProvider.
 *
 * [JP] 現在のテーマとレイアウトを保持する React Context。
 * 必ず TitlebarProvider の中で使用してください。
 */
const TitlebarContext = createContext<TitlebarContextValue | undefined>(undefined);

/**
 * TitlebarProvider
 *
 * [EN] Provider component that:
 * - Determines the effective theme/layout (resolving 'system' modes)
 * - Sets `data-theme` and `data-layout` on the root <html> element
 * - Exposes current theme/layout via Context
 *
 * [JP] 次の処理を行うProviderコンポーネント：
 * - 'system' モードを含めて有効なテーマ/レイアウトを決定
 * - ルートの <html> 要素に `data-theme` / `data-layout` 属性を設定
 * - Contextを通じて現在の状態を子コンポーネントに提供
 */
export const TitlebarProvider: React.FC<TitlebarProviderProps> = ({
  theme = 'system',
  layout = 'standard',
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');
  const [currentLayout, setCurrentLayout] = useState<Layout>('standard');

  useEffect(() => {
    let effectiveTheme: Theme = theme;
    let effectiveLayout: Layout = layout;

    if (theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      effectiveTheme = isDark ? 'dark' : 'light';
    }
    if (theme === 'hide-system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      effectiveTheme = isDark ? 'hide-dark' : 'hide-light';
    }

    setCurrentTheme(effectiveTheme);
    setCurrentLayout(effectiveLayout);

    document.documentElement.setAttribute('data-theme', effectiveTheme);
    document.documentElement.setAttribute('data-layout', effectiveLayout);
  }, [theme, layout]);

  return (
    <TitlebarContext.Provider
      value={{
        theme: currentTheme,
        layout: currentLayout,
      }}
    >
      {children}
    </TitlebarContext.Provider>
  );
};

/**
 * useTheme
 *
 * [EN] Custom hook to safely access the TitlebarContext.
 * Throws an error if used outside TitlebarProvider.
 *
 * [JP] TitlebarContext に安全にアクセスするためのカスタムフック。
 * TitlebarProvider の外で使用するとエラーを投げる。
 */
export const useTitlebar = (): TitlebarContextValue => {
  const ctx = useContext(TitlebarContext);
  if (!ctx) throw new Error('useTitlebar must be used within a TitlebarProvider');
  return ctx;
};
