'use client';
import { I18nextProvider } from 'react-i18next';
import { CookiesProvider } from 'react-cookie';
import i18n from '@/utils/i18n';
import DevHome from '@/dev/Home';
import DevAbout from '@/dev/About';
import DevSkills from '@/dev/Skills';
import DevWork from '@/dev/Work';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CookieConsent from '@/utils/Cookies';
import CustomHead from '@/components/CustomHead';

const navItems = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'work', label: 'Work' },
  { to: 'footer', label: 'Contact' },
];

export default function Home() {
  return (
    <div>
      <CookiesProvider>
        <CustomHead slug="dev" />
        <CookieConsent />
        <I18nextProvider i18n={i18n}>
          <Navbar navItems={navItems} />
          <DevHome />
          <DevAbout />
          <DevSkills />
          <DevWork />
          <Footer linkDestination="Dev" />
        </I18nextProvider>
      </CookiesProvider>
    </div>
  );
}
