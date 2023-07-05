import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/Navbar';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'WordPress verkkosivut yrityksille',
  description: 'Tarvitseeko yrityksesi tyylikkäät ja käyttäjäystävälliset WordPress-verkkosivut, jotka houkuttelevat uusia asiakkaita ja kasvattavat myyntiäsi?',
  keywords: 'WordPress, Woocommerce, verkkosivut, kotisivut, SEO, verkkosivut yrityksille, WordPress-verkkosivut, web designer, wordpress developement, web developement, ohjelmisto kehittäjä, verkkosivu toteutukset,'
}

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
