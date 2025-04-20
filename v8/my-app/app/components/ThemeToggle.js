'use client';

import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
        theme === 'dark' 
          ? 'bg-gray-800 text-white hover:bg-gray-700' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}
    >
      {theme === 'dark' ? 'Change to Light Mode' : 'Change to Dark Mode'}
    </button>
  );
}
