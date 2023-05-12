"use client"
import { I18nextProvider } from 'react-i18next';
import i18n from '../../utils/i18n';
import Navbar from '@/wordpress/Navbar';
import Home from '@/wordpress/Home';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div>
        <I18nextProvider i18n={i18n}>
            <Navbar />
            <Home />
            <Footer linkDestination="wordpress"/>
        </I18nextProvider>
    </div>
  )
}

export default page