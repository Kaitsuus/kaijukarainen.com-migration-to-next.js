'use client';
import { I18nextProvider } from 'react-i18next';
import { CookiesProvider } from 'react-cookie';
import i18n from '@/utils/i18n';
import Home from '@/wordpress/Home';
import Info from '@/wordpress/Info';
import Info2 from '@/wordpress/Info-2';
import Info3 from '@/wordpress/Info-3';
import FAQModel from '@/wordpress/FAQModel';
import PriceModel from '@/wordpress/PriceModels';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import CookieConsent from '@/utils/Cookies';

const navItems = [{ to: 'footer', label: 'Contact' }];

const videoProps = {
  videoId: 'WxatI1d4HGg',
  videoTitle: 'Sopisiko WordPress sinun yrityksellesi?',
};

export default function page() {
  return (
    <div>
      <CookiesProvider>
        <CookieConsent />
        <I18nextProvider i18n={i18n}>
          <NavBar navItems={navItems} />
          <Home />
          <Info2 />
          <Info {...videoProps} />
          <Info3 />
          <PriceModel />
          <FAQModel />
          <Footer linkDestination="wordpress" />
        </I18nextProvider>
      </CookiesProvider>
    </div>
  );
}
