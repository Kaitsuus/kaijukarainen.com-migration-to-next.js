'use client';
import { I18nextProvider } from 'react-i18next';
import { CookiesProvider } from 'react-cookie';
import i18n from '@/utils/i18n';
import Home from '@/wordpress/Home';
import Info2 from '@/wordpress/Info-2';
import FAQModel from '@/wordpress/FAQModel';
import PriceModel from '@/wordpress/PriceModels';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import CookieConsent from '@/utils/Cookies';
import Booking from '@/wordpress/Booking';
import CustomHead from '@/components/CustomHead';

const navItems = [{ to: 'footer', label: 'Contact' }];

export default function page() {
  return (
    <>
      <title>WordPress verkkosivut yrityksille.</title>
      <meta
        name="description"
        content="Tarvitseeko yrityksesi tyylikkäät ja käyttäjäystävälliset WordPress-verkkosivut, jotka houkuttelevat uusia asiakkaita ja kasvattavat myyntiäsi?"
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
      <meta
        property="og:title"
        content="Tyylikkäät ja käyttäjäystävälliset WordPress-verkkosivut yrityksellesi"
      />
      <meta
        property="og:description"
        content="Tarvitseeko yrityksesi modernit WordPress-verkkosivut, jotka houkuttelevat uusia asiakkaita ja kasvattavat myyntiäsi? Ota yhteyttä ja saat ammattitaitoisen verkkosivuratkaisun."
      />
      <meta
        property="og:image"
        content="https://kaijukarainen.com/wordpressverkkosivut"
      />
      <meta property="og:image:width" content="1640" />
      <meta property="og:image:height" content="924" />
      <meta property="og:image:alt" content="WordPress verkkosivut" />
      <meta property="og:site_name" content="Kaijukarainen.com" />
      <meta property="og:locale" content="fi_FI" />
      <meta property="og:type" content="website" />
      <div>
        <CustomHead slug="home" />
        <CookiesProvider>
          <CookieConsent />
          <I18nextProvider i18n={i18n}>
            <NavBar navItems={navItems} />
            <Home />
            <Info2 />
            <PriceModel />
            <Booking />
            <FAQModel />
            <Footer linkDestination="home" />
          </I18nextProvider>
        </CookiesProvider>
      </div>
    </>
  );
}
