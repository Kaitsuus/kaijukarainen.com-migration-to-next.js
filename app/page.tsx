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


const navItems = [{ to: 'priceModels', label: 'Hinnat' }, { to: 'footer', label: 'Contact' },];

export default function page() {
  return (
    <>
      <title>Tyylikkäät ja käyttäjäystävälliset WordPress-verkkosivut yrityksille</title>
      <meta name="description" content="Tarjoamme moderneja verkkosivuratkaisuja yrityksille ammattitaidolla. Ota yhteyttä ja varaa ilmainen kotisivukartoitus." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="WordPress, Woocommerce, verkkosivut, SEO, verkkosivut yrityksille, WordPress-verkkosivut, web designer, wordpress developement, web developement, ohjelmisto kehittäjä, verkkosivu toteutukset, wordpress tips, wordpress, kotisivut"
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
        content="Modernit verkkosivu ratkaisut yrityksille ammattitaidolla. Ota yhteyttä ja varaa ilmainen kotisivukartoitus."
      />
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />
      <meta property="og:site_name" content="kaijukarainen.com" />
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
