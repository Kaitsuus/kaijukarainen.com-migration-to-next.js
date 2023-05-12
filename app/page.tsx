"use client"
import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n';
import DevNavbar from '@/dev/Navbar';
import DevHome from '@/dev/Home';
import DevAbout from '@/dev/About'
import DevSkills from '@/dev/Skills'
import DevWork from '@/dev/Work'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <DevNavbar />
        <DevHome />
        <DevAbout />
        <DevSkills />
        <DevWork />
        <Footer linkDestination="Dev"/>
      </I18nextProvider>
    </div>
  )
}
