'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function LightMode() {
  useEffect(() => {
    localStorage.setItem('currentMode', 'light');
  }, []);

  return (
    <div className="container light-mode">
      <div className="space-y-8">
        <div>
          <h1>Light Mode Page</h1>
          <Link 
            href="/"
            className="back-button inline-block mt-4"
          >
            Back to Home
          </Link>
        </div>
        
        <div>
          <p>
            Welcome to the light mode page. This page features a light color scheme that's ideal for well-lit environments.
          </p>
          <div>
            <h2>Light Mode Features</h2>
            <ul>
              <li>Better readability in bright environments</li>
              <li>Traditional reading experience</li>
              <li>Ideal for content-heavy websites</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 