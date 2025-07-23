import React, { useState } from 'react';
import { useTheme } from '../context/ThemeProvider';

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

export const Titlebar: React.FC<TitlebarProps> = ({
  onMinimize,
  onMaximizeToggle,
  onExit,
  title = 'My App',
}) => {
  const { headerBg, logoColor, buttons } = useTheme();
  const base = buttons?.base;
  const min = buttons?.min;
  const max = buttons?.max;
  const exit = buttons?.exit;

  const [isMaximized, setIsMaximized] = useState(false);

  const handleMinimize = () => {
    onMinimize?.();
  };

  const handleMaximizeToggle = () => {
    const next = !isMaximized;
    setIsMaximized(next);
    onMaximizeToggle?.(next);
  };

  const handleExit = () => {
    onExit?.();
  };

  return (
    <div
      className="titlebar"
      style={{
        background: headerBg,
        color: logoColor,
      }}
    >
      <div className="titlebar__logo">{title}</div>
      <div className="titlebar__controls">
        <button
          className="titlebar__btn"
          style={{ color: min?.color ?? base?.color }}
          onClick={handleMinimize}
        >
          _
        </button>
        <button
          className="titlebar__btn"
          style={{ color: max?.color ?? base?.color }}
          onClick={handleMaximizeToggle}
        >
          {isMaximized ? '🗗' : '☐'}
        </button>
        <button
          className="titlebar__btn titlebar__btn--exit"
          style={{ color: exit?.color ?? base?.color }}
          onClick={handleExit}
        >
          ✕
        </button>
      </div>
    </div>
  );
};
