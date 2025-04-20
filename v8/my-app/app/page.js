'use client';

// Import required components and hooks
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentMode, setCurrentMode] = useState('light');

  useEffect(() => {
    // Check if we have a mode in localStorage
    const savedMode = localStorage.getItem('currentMode');
    if (savedMode) {
      setCurrentMode(savedMode);
    }
  }, []);

  const handleDarkMode = () => {
    setCurrentMode('dark');
    localStorage.setItem('currentMode', 'dark');
    router.push('/dark-mode');
  };

  const handleLightMode = () => {
    setCurrentMode('light');
    localStorage.setItem('currentMode', 'light');
    router.push('/light-mode');
  };

  return (
    // Use clsx to conditionally apply dark/light mode classes
    <div className={clsx('container', { 
      'dark-mode': currentMode === 'dark', 
      'light-mode': currentMode === 'light'
    })}>
      <main>
        <h1>Welcome to Next.js</h1>
        
        <div className="space-y-4 mb-8">
          <p>Click the buttons below to switch between dark and light modes.</p>
        </div>

        <div className="flex gap-4">
          {/* Navigation buttons using Next.js Link component */}
          <button 
            onClick={handleDarkMode}
            className="px-6 py-3 rounded-lg font-medium border-2 border-current hover:opacity-80 transition-opacity"
          >
            Dark-Mode
          </button>
          
          <button 
            onClick={handleLightMode}
            className="px-6 py-3 rounded-lg font-medium border-2 border-current hover:opacity-80 transition-opacity"
          >
            Light-Mode
          </button>
        </div>

        <div className="mt-8 p-6 rounded-lg border-2 border-current">
          <h2>Current Mode: {currentMode === 'dark' ? 'Dark' : 'Light'}</h2>
          <p>This is a demonstration of how to implement dark/light mode in Next.js using pathname.</p>
        </div>
      </main>
    </div>
  );
}
