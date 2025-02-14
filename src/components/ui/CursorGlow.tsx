'use client';

import { useEffect } from 'react';

export default function CursorGlow() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.documentElement;
      cursor.style.setProperty('--cursor-x', `${e.clientX}px`);
      cursor.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}