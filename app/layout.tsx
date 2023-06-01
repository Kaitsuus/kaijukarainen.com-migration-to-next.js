import './globals.css';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import ogImageUrl from '../public/assets/wordpressverkkosivut.png'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'WordPress verkkosivut yrityksille.',
  description:
    'Tarvitseeko yrityksesi tyylikkäät ja käyttäjäystävälliset WordPress-verkkosivut, jotka houkuttelevat uusia asiakkaita ja kasvattavat myyntiäsi?',
  keywords:
    'WordPress, Woocommerce, software developer, developer, web designer, frontend developement, wordpress developement, full stack developement, web developement, ohjelmisto kehittäjä, verkkosivu toteutukset',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ogImageUrlString = ogImageUrl.toString();
  return (
    <html lang="fi">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Kai Jukarainen" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={ogImageUrlString}/>
        <meta property="og:url" content="https://kaijukarainen.com" />
        <meta property="og:type" content="website" />
        
        <link rel="canonical" href="https://kaijukarainen.com" />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />


        <title>{metadata.title}</title>
        {/* Add any additional CSS or JavaScript files */}
        {/* Add font preloading or asynchronous loading code if necessary */}
      </Head>
      <body>
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  );
}
