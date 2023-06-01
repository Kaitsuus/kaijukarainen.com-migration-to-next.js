'use client';
import { CookiesProvider } from 'react-cookie';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/utils/i18n';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Privacy from '@/components/Privacy';
import CookieConsent from '@/utils/Cookies';

const navItems = [{ to: 'footer', label: 'Contact' }];

export default function page() {
  return (
    <CookiesProvider>
      <CookieConsent />
      <I18nextProvider i18n={i18n}>
        <NavBar navItems={navItems} />
        <Privacy />
        <Footer linkDestination="privacy" />
      </I18nextProvider>
    </CookiesProvider>
  );
}
