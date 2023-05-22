import './globals.css';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tervetuloa kaijukarainen.com verkkosivuille.',
  description:
    ' Näillä verkkosivuilla esittelen töitäni ja taitojani ja tarjoan palveluitani',
  keywords:
    'software developer, developer, web designer, frontend developement, wordpress developement, full stack developement, web developement, ohjelmisto kehittäjä, verkkosivu toteutukset',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <Head>
        <meta
          name="description"
          content="Tervetuloa kaijukarainen.com verkkosivuille. Näillä verkkosivuilla esittelen töitäni ja taitojani ja tarjoan palveluitani"
        />
        <meta
          name="keywords"
          content="software developer, developer, web designer, frontend developement, wordpress developement, full stack developement, web developement, ohjelmisto kehittäjä, verkkosivu toteutukset"
        />
      </Head>
      <body>
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  );
}
