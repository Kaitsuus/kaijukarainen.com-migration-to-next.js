"use client"
import { I18nextProvider } from 'react-i18next';
import i18n from '../../utils/i18n';
import Home from '@/wordpress/Home';
import Info from '@/wordpress/Info';
import Info2 from '@/wordpress/Info-2';
import Info3 from '@/wordpress/Info-3';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';


const navItems = [
    { to: "footer", label: "Contact" },
  ];

  const videoProps = {
    videoId: 'WxatI1d4HGg',
    videoTitle: 'Sopisiko WordPress sinun yrityksellesi?'
  };

  export default function page() {
  return (
    <div>
        <I18nextProvider i18n={i18n}>
            <NavBar navItems={navItems}/>
            <Home />
            <Info2 />
            <Info {...videoProps}/>
            <Info3 />
            <Footer linkDestination="wordpress"/>
        </I18nextProvider>
    </div>
  )
}

