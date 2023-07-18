'use client';
import { I18nextProvider } from 'react-i18next';
import { CookiesProvider } from 'react-cookie';
import i18n from '@/utils/i18n';
import TipsHome from '@/tips/TipsHome';
import Tips from '@/tips/Tips';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CookieConsent from '@/utils/Cookies';
import CustomHead from '@/components/CustomHead';

const navItems = [
  { to: 'footer', label: 'Contact' },
];

export default function Home() {
  return (
    <>
      <title>Kai Jukarainen Ohjelmistokehittäjä</title>
      <meta
        name="description"
        content="Olen erikoistunut rakentamaan ja kehittämään isoja sekä pieniä responsiivisia sovelluksia ja verkkosivuja. Minulla on vahva kokemus myös B2B & B2C myynistä, markkinoinnista ja maahantuonnista, sekä mainonnasta, sisällöntuotannosta ja logistiikasta. Toteutan ratkaisuja, jotka vastaavat yritysten, sekä käyttäjien tarpeita ammattitaidolla."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="WordPress, Woocommerce, verkkosivut, SEO, verkkosivut yrityksille, WordPress-verkkosivut, web designer, wordpress developement, web developement, ohjelmisto kehittäjä, verkkosivu toteutukset,"
      />
      <meta name="author" content="Kai Jukarainen" />
      <link
        rel="google-site-verification"
        href="/google960e0ffaae4fc22c.html"
      />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta property="og:title" content="Kai Jukarainen Ohjelmistokehittäjä" />
      <meta
        property="og:description"
        content="Olen erikoistunut rakentamaan ja kehittämään isoja sekä pieniä responsiivisia sovelluksia ja verkkosivuja. Minulla on vahva kokemus myös B2B & B2C myynistä, markkinoinnista ja maahantuonnista, sekä mainonnasta, sisällöntuotannosta ja logistiikasta. Toteutan ratkaisuja, jotka vastaavat yritysten, sekä käyttäjien tarpeita ammattitaidolla."
      />
      <div>
        <CookiesProvider>
          <CustomHead slug="dev" />
          <CookieConsent />
          <I18nextProvider i18n={i18n}>
            <Navbar navItems={navItems} />
            <TipsHome />
            <Tips />
            <Footer linkDestination="Dev" />
          </I18nextProvider>
        </CookiesProvider>
      </div>
    </>
  );
}
