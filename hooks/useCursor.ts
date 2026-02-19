'use client';

import { useState, useCallback, useEffect } from 'react';

export type CursorState = 'default' | 'link' | 'button';

export function useCursor() {
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isVisible, setIsVisible] = useState(false);

  const onLinkEnter = useCallback(() => setCursorState('link'), []);
  const onLinkLeave = useCallback(() => setCursorState('default'), []);
  const onButtonEnter = useCallback(() => setCursorState('button'), []);
  const onButtonLeave = useCallback(() => setCursorState('default'), []);

  useEffect(() => {
    const show = () => setIsVisible(true);
    const hide = () => setIsVisible(false);
    window.addEventListener('mouseenter', show);
    window.addEventListener('mouseleave', hide);
    return () => {
      window.removeEventListener('mouseenter', show);
      window.removeEventListener('mouseleave', hide);
    };
  }, []);

  return {
    cursorState,
    isVisible,
    onLinkEnter,
    onLinkLeave,
    onButtonEnter,
    onButtonLeave,
  };
}
