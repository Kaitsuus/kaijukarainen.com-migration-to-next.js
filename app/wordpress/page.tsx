"use client"
import { I18nextProvider } from 'react-i18next';
import i18n from '../../utils/i18n';
import Home from '@/wordpress/Home';
import Info from '@/wordpress/Info';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';


const navItems = [
    { to: "footer", label: "Contact" },
  ];

  export default function page() {
  return (
    <div>
        <I18nextProvider i18n={i18n}>
            <NavBar navItems={navItems}/>
            <Home />
            <Info />
            <Footer linkDestination="wordpress"/>
        </I18nextProvider>
    </div>
  )
}

