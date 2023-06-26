'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import SocialIcons from './SocialIcons';

type NavItem = {
  to: string;
  label: string;
};

type NavBarProps = {
  navItems: NavItem[];
};

const NavBar = ({ navItems }: NavBarProps): JSX.Element => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    const buttonEn: HTMLElement | null =
      document.getElementById('switch-btnEn');
    if (buttonEn) {
      buttonEn.style.color =
        lang === 'en' ? '#ffa726' : 'rgb(209 213 219 / var(--tw-text-opacity))';
    }
    const buttonFi: HTMLElement | null =
      document.getElementById('switch-btnFi');
    if (buttonFi) {
      buttonFi.style.color =
        lang === 'fi' ? '#ffa726' : 'rgb(209 213 219 / var(--tw-text-opacity))';
    }
    setNav(false);
  };
  return (
    <div
      className="fixed w-full h-[60px] flex justify-between items-center px-4 z-50 text-slate-100 bg-slate-800"
      data-testid="navbar"
    >
      {/* logo */}
      <div>
        <a href="/">
          <Image
            src="/assets/LU.png"
            width={40}
            height={40}
            alt="kaijukarainenLogo"
          />
        </a>
      </div>
      {/* menu */}
      <ul className="hidden md:flex gap-3 font-semibold">
        {/*language handler*/}
        <div className="flex">
          <button
            id="switch-btnEn"
            className="flex justify-between px-2 hover:text-orange-400 hover:scale-110 duration-500"
            onClick={() => handleLanguageChange('en')}
          >
            {t('EN')}
          </button>
          <button
            id="switch-btnFi"
            className="hover:text-orange-400 hover:scale-110 duration-500 "
            onClick={() => handleLanguageChange('fi')}
          >
            {t('FI')}
          </button>
        </div>
        {/*pages menu*/}
        <li className="hover:text-orange-400 hover:scale-110 duration-500 hover:cursor-pointer">
          <a href="/">{t('navHome')}</a>
        </li>
        <li className="hover:text-orange-400 hover:scale-110 duration-500 hover:cursor-pointer">
          <a href="dev">Dev</a>
        </li>
        {/*Link menu*/}
        {navItems.map((item) => (
          <li
            key={item.to}
            className="hover:text-orange-400 hover:scale-110 duration-500 hover:cursor-pointer"
          >
            <Link to={item.to} smooth={true} duration={500}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-40 text-slate-100">
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r bg-slate-800 text-slate-100 flex flex-col justify-center items-center z-20'
        }
      >
        {/*language handler*/}
        <div className="flex">
          <button
            className="flex justify-between px-2"
            onClick={() => handleLanguageChange('en')}
          >
            {t('EN')}
          </button>
          <button onClick={() => handleLanguageChange('fi')}>{t('FI')}</button>
        </div>
        <li className="py-6 text-4xl">
          <a onClick={handleClick} href="/">
            {t('navHome')}
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a onClick={handleClick} href="dev">
            Dev
          </a>
        </li>
        {navItems.map((item) => (
          <li key={item.to} className="py-6 text-4xl">
            <Link to={item.to} onClick={handleClick}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {/*Social icons*/}
      <SocialIcons
        linkedin="https://www.linkedin.com/in/kai-jukarainen-b6b1a9257/"
        github="https://github.com/Kaitsuus"
        facebook="https://www.facebook.com/people/kaijukarainencom/100092388553380/"
        instagram="https://www.instagram.com/kaijukarainen/"
      />
    </div>
  );
};

export default NavBar;
