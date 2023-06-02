import React from 'react';
import { NextSeo } from 'next-seo';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';


interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  openGraph: {
    title: 'WordPress verkkosivut yrityksille.',
    description: 'Tarvitseeko yrityksesi tyylikkäät ja käyttäjäystävälliset WordPress-verkkosivut, jotka houkuttelevat uusia asiakkaita ja kasvattavat myyntiäsi?',
    url: 'https://kaijukarainen.com',
    siteName: 'Kaijukarainen.com',
    images: [
      {
        url: 'https://kaijukarainen.com/wordpressverkkosivut',
        width: 1640,
        height: 924,
        alt: 'WordPress verkkosivut'
      }
    ],
    locale: 'fi_FI',
    type: 'website'
  },
  title: 'WordPress verkkosivut yrityksille.',
  description:
    'Tarvitseeko yrityksesi tyylikkäät ja käyttäjäystävälliset WordPress-verkkosivut, jotka houkuttelevat uusia asiakkaita ja kasvattavat myyntiäsi?',
  keywords:
    'WordPress, Woocommerce, verkkosivut, SEO, web designer, wordpress developement, web developement, ohjelmisto kehittäjä, verkkosivu toteutukset',
  favicon: '/favicon.ico',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Kai Jukarainen" />
        <link rel="canonical" href="https://kaijukarainen.com" />

        <NextSeo
          title={metadata.title}
          description={metadata.description}
          openGraph={{
            url: 'https://kaijukarainen.com',
            title: 'WordPress verkkosivut yrityksille.',
            description: 'Tarvitseeko yrityksesi tyylikkäät ja käyttäjäystävälliset WordPress-verkkosivut, jotka houkuttelevat uusia asiakkaita ja kasvattavat myyntiäsi?',
            images: [
              {
                url: 'https://kaijukarainen.com/wordpressverkkosivut',
                width: 1640,
                height: 924,
                alt: 'WordPress verkkosivut'
              }
            ],
            site_name: 'Kaijukarainen.com',
            locale: 'fi_FI',
            type: 'website',
          }}
        />
      </Head>
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
