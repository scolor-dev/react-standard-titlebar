import React, { ReactNode } from 'react';
/**
 * Theme
 *
 * [EN] Theme type.
 * Defines possible theme modes: 'light', 'dark', 'system', or 'custom'.
 *
 * [JP] テーマタイプ。
 * 使用可能なテーマモードを定義します: 'light', 'dark', 'system', 'custom'。
 */
export type Theme = 'light' | 'dark' | 'system' | 'custom';
/**
 * ThemeProviderProps
 *
 * [EN] Props accepted by the ThemeProvider component.
 * - theme: Theme mode ('light', 'dark', 'system', 'custom').
 * - headerBg: Header background color.
 * - logoColor: Logo text/icon color.
 * - buttons: Button color settings, with base and overrides for min/max/exit.
 * - children: React children wrapped by the provider.
 *
 * [JP] ThemeProvider用のProps定義。
 * - theme: テーマモード ('light', 'dark', 'system', 'custom')。
 * - headerBg: ヘッダー背景色。
 * - logoColor: ロゴのテキスト/アイコン色。
 * - buttons: ボタンのカラー設定（base と min/max/exit の個別上書き）。
 * - children: Providerで囲むReact子要素。
 */
export interface ThemeProviderProps {
    theme?: Theme;
    headerBg?: string;
    logoColor?: string;
    buttons?: {
        base?: {
            color?: string;
            hoverColor?: string;
            hoverBg?: string;
            activeColor?: string;
            activeBg?: string;
        };
        min?: {
            color?: string;
            hoverColor?: string;
            hoverBg?: string;
            activeColor?: string;
            activeBg?: string;
        };
        max?: {
            color?: string;
            hoverColor?: string;
            hoverBg?: string;
            activeColor?: string;
            activeBg?: string;
        };
        exit?: {
            color?: string;
            hoverColor?: string;
            hoverBg?: string;
            activeColor?: string;
            activeBg?: string;
        };
    };
    children: ReactNode;
}
/**
 * ThemeContextValue
 *
 * [EN] The value type held by the ThemeContext and provided to children.
 * - theme: The resolved theme mode.
 * - headerBg: Header background color.
 * - logoColor: Logo color.
 * - buttons: Resolved button color settings.
 *
 * [JP] ThemeContextに保持され、子コンポーネントへ提供される値の型。
 * - theme: 実際に適用されているテーマモード。
 * - headerBg: ヘッダー背景色。
 * - logoColor: ロゴ色。
 * - buttons: ボタンのカラー設定（解決済み）。
 */
interface ThemeContextValue {
    theme: Theme;
    headerBg?: string;
    logoColor?: string;
    buttons?: {
        base?: {
            color?: string;
            hoverColor?: string;
            hoverBg?: string;
            activeColor?: string;
            activeBg?: string;
        };
        min?: {
            color?: string;
            hoverColor?: string;
            hoverBg?: string;
            activeColor?: string;
            activeBg?: string;
        };
        max?: {
            color?: string;
            hoverColor?: string;
            hoverBg?: string;
            activeColor?: string;
            activeBg?: string;
        };
        exit?: {
            color?: string;
            hoverColor?: string;
            hoverBg?: string;
            activeColor?: string;
            activeBg?: string;
        };
    };
}
/**
 * ThemeProvider
 *
 * [EN] Provider component that decides the effective theme,
 * sets `data-theme` and CSS variables on the HTML root,
 * and exposes theme values to children via Context.
 *
 * [JP] Providerコンポーネント。
 * 有効なテーマを決定し、HTMLルート要素に `data-theme` とCSS変数を設定し、
 * Context経由で子コンポーネントへテーマ値を提供します。
 */
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
/**
 * useTheme
 *
 * [EN] Custom hook to access ThemeContext safely.
 * Throws an error if used outside ThemeProvider.
 *
 * [JP] ThemeContextへ安全にアクセスするためのカスタムフック。
 * ThemeProviderの外で使うとエラーを投げます。
 */
export declare const useTheme: () => ThemeContextValue;
export {};
