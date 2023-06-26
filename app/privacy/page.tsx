'use client';
import { CookiesProvider } from 'react-cookie';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/utils/i18n';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Privacy from '@/components/Privacy';
import CookieConsent from '@/utils/Cookies';
import CustomHead from '@/components/CustomHead';

const navItems = [{ to: 'footer', label: 'Contact' }];

export default function page() {
  return (
    <>
      <title>Privacy page</title>
      <meta name="description" content="Rekisteri- ja tietosuojaseloste." />
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
      <meta property="og:title" content="Privacy page" />
      <meta
        property="og:description"
        content="Rekisteri- ja tietosuojaseloste."
      />
      <meta
        property="og:image"
        content="https://kaijukarainen.com/wordpressverkkosivut"
      />
      <CookiesProvider>
        <CookieConsent />
        <I18nextProvider i18n={i18n}>
          <CustomHead slug="privacy" />
          <NavBar navItems={navItems} />
          <Privacy />
          <Footer linkDestination="privacy" />
        </I18nextProvider>
      </CookiesProvider>
    </>
  );
}
