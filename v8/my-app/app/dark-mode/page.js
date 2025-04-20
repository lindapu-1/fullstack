'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function DarkMode() {
  useEffect(() => {
    localStorage.setItem('currentMode', 'dark');
  }, []);

  return (
    <div className="container dark-mode">
      <div className="space-y-8">
        <div>
          <h1>Dark Mode Page</h1>
          <Link 
            href="/"
            className="back-button inline-block mt-4"
          >
            Back to Home
          </Link>
        </div>
        
        <div>
          <p>
            Welcome to the dark mode page. This page features a dark color scheme that's easier on the eyes in low-light conditions.
          </p>
          <div>
            <h2>Dark Mode Features</h2>
            <ul>
              <li>Reduced eye strain in low-light environments</li>
              <li>Lower power consumption on OLED/AMOLED displays</li>
              <li>Better contrast for certain types of content</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 