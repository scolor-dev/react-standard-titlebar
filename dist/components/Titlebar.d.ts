import React from 'react';
export interface TitlebarProps {
    /** [EN] Handler for Minimize button. [JP] 最小化ボタンのハンドラー */
    onMinimize?: () => void;
    /** [EN] Handler for Maximize/Restore button. [JP] 最大化/リストアボタンのハンドラー */
    onMaximizeToggle?: (isMaximized: boolean) => void;
    /** [EN] Handler for Exit button. [JP] 終了ボタンのハンドラー */
    onExit?: () => void;
    /** [EN] Optional title text or logo. [JP] タイトルテキスト/ロゴ */
    title?: React.ReactNode;
}
export declare const Titlebar: React.FC<TitlebarProps>;
