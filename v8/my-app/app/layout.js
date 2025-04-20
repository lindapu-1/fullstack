import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata = {
  title: 'Dark Mode Demo',
  description: 'Dark Mode Demo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
