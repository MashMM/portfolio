'use client'

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      <Sun className="stroke-white hidden h-6 w-6 dark:inline" />
      <Moon className="stroke-black inline h-6 w-6 dark:hidden" />
    </div>
  );
}
