import React, { useState } from 'react';
// import { useTitlebar } from '../context/TitlebarProvider';

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
  // const { headerBg, logoColor, buttons } = useTitlebar();
  // const base = buttons?.base;
  // const min = buttons?.min;
  // const max = buttons?.max;
  // const exit = buttons?.exit;

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
    <div className="titlebar">
      <div className="titlebar__logo">{title}</div>
      <div className="titlebar__controls">
        <button
          className="titlebar__btn"
          onClick={handleMinimize}
          >
          _
        </button>
        <button
          className="titlebar__btn"
          onClick={handleMaximizeToggle}
          >
          {isMaximized ? '🗗' : '☐'}
        </button>
        <button
          className="titlebar__btn titlebar__btn--exit"
          onClick={handleExit}
          >
          ✕
        </button>
      </div>
    </div>
  );
};
