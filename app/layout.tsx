import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="fi">
        <body>
          <main className={inter.className}>{children}</main>
          <script type="application/ld+json">
            {/* Add structured data here */}
          </script>
        </body>
      </html>
    </>
  );
}
