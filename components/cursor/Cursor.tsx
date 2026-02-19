'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useMousePosition } from '@/hooks/useMousePosition';
import { usePrefersReducedMotion, useHasTouch } from '@/hooks/useReducedMotion';

const LERP = 0.26;
const MAGNETIC_STRENGTH = 0.4;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function Cursor() {
  const { x, y } = useMousePosition();
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasTouch = useHasTouch();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const modalOpenRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    document.addEventListener('mouseenter', show);
    document.addEventListener('mouseleave', hide);
    return () => {
      document.removeEventListener('mouseenter', show);
      document.removeEventListener('mouseleave', hide);
    };
  }, []);


  useEffect(() => {
    if (!mounted) return;

    const tick = () => {
      const hasModal = !!document.querySelector('[aria-modal="true"]');
      if (hasModal && !modalOpenRef.current) {
        modalOpenRef.current = true;
        setVisible(true);
      } else if (!hasModal) {
        modalOpenRef.current = false;
      }

      const el = document.elementFromPoint(x, y);
      const link = el?.closest('a') || el?.closest('[data-cursor="link"]');
      const button =
        el?.closest('button') ||
        el?.closest('[data-cursor="button"]') ||
        el?.closest('[data-magnetic]');

      let targetX = x;
      let targetY = y;
      let s = 1;

      if (button) {
        s = 2;
        const rect = (button as HTMLElement).getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        targetX = lerp(x, centerX, MAGNETIC_STRENGTH);
        targetY = lerp(y, centerY, MAGNETIC_STRENGTH);
      } else if (link) {
        s = 2.5;
      }

      posRef.current = {
        x: lerp(posRef.current.x, targetX, LERP),
        y: lerp(posRef.current.y, targetY, LERP),
      };
      setDisplayPos({ x: posRef.current.x, y: posRef.current.y });
      setScale(s);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [x, y, mounted]);

  useEffect(() => {
    if (!mounted || hasTouch || prefersReducedMotion) return;
    document.body.classList.add('cursor-none');
    return () => document.body.classList.remove('cursor-none');
  }, [mounted, hasTouch, prefersReducedMotion]);

  if (!mounted || hasTouch || prefersReducedMotion) return null;

  const cursorEl = (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[99999] hidden md:block"
      aria-hidden
    >
      <div
        className="origin-center rounded-full bg-text-primary transition-transform duration-150"
        style={{
          width: 8,
          height: 8,
          transform: `translate(${displayPos.x}px, ${displayPos.y}px) scale(${scale})`,
          opacity: visible ? 1 : 0,
        }}
      />
    </div>
  );

  // Portal to document.body so cursor always stacks above menu/modals
  return typeof document !== 'undefined'
    ? createPortal(cursorEl, document.body)
    : null;
}
