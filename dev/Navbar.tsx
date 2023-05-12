"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';


const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { t, i18n } = useTranslation();
  
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    const buttonEn: HTMLElement | null = document.getElementById('switch-btnEn');
    if (buttonEn) {
      buttonEn.style.color = lang === 'en' ? '#3CD6EB' : 'rgb(209 213 219 / var(--tw-text-opacity))';
    }
    const buttonFi: HTMLElement | null = document.getElementById('switch-btnFi');
    if (buttonFi) {
      buttonFi.style.color = lang === 'fi' ? '#3CD6EB' : 'rgb(209 213 219 / var(--tw-text-opacity))';
    }
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 z-50 text-[#e8e7e7]"
    >
      {/* logo */}
      <div>
        <Image
            src="/assets/KJL.png"
            width={80}
            height={80}
            alt="kaijukarainenLogo"
        />
      </div>
      {/* menu */}
      <ul className="hidden md:flex gap-3 font-semibold">
        {/*language handler*/}
        <div className="flex">
          <button
            id="switch-btnEn"
            className="flex justify-between px-2 hover:text-[#3CD6EB] hover:scale-110 duration-500"
            onClick={() => handleLanguageChange('en')}
          >
            {t('EN')}
          </button>
          <button
            id="switch-btnFi"
            className="hover:text-[#3CD6EB] hover:scale-110 duration-500 "
            onClick={() => handleLanguageChange('fi')}
          >
            {t('FI')}
          </button>
        </div>
        <li className="hover:text-[#3CD6EB] hover:scale-110 duration-500 hover:cursor-pointer">
          <Link to="Dev" smooth={true} duration={500}>
            {t('navHome')}
          </Link>
        </li>
        <li className="hover:text-[#3CD6EB] hover:scale-110 duration-500 hover:cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            {t('navAbout')}
          </Link>
        </li>
        <li className="hover:text-[#3CD6EB] hover:scale-110 duration-500 hover:cursor-pointer">
          <Link to="skills" smooth={true} duration={500}>
            {t('navSkills')}
          </Link>
        </li>
        <li className="hover:text-[#3CD6EB] hover:scale-110 duration-500 hover:cursor-pointer">
          <Link to="work" smooth={true} duration={500}>
            {t('navProjects')}
          </Link>
        </li>
        <li className="hover:text-[#3CD6EB] hover:scale-110 duration-500 hover:cursor-pointer">
          <a href="wordpress">
            {t('wpHeader')}
          </a>
        </li>
        <li className="hover:text-[#3CD6EB] hover:scale-110 duration-500 hover:cursor-pointer">
          <Link to="footer" smooth={true} duration={500}>
            {t('navContact')}
          </Link>
        </li>
      </ul>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-40 text-[#fafafa]">
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r bg-[#191a1e] text-[#e8e7e7] flex flex-col justify-center items-center z-20'
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
          <Link onClick={handleClick} to="Dev">
            {t('navHome')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about">
            {t('navAbout')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills">
            {t('navSkills')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work">
            {t('navProjects')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="wordpress">
            WordPress
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="footer">
            {t('navContact')}
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-4"
              href="https://www.linkedin.com/in/kai-jukarainen-b6b1a9257/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} className='mr-4'/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-4"
              href="https://github.com/Kaitsuus"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} className='mr-4'/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fb3958]">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-4"
              href="https://www.youtube.com/@devkj"
              target="_blank"
              rel="noreferrer"
            >
              Youtube <FaYoutube size={30} className='mr-4'/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-4"
              href="https://www.facebook.com/people/kaijukarainencom/100092388553380/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook <FaFacebook size={30} className='mr-4'/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fb3958]">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-4"
              href="https://www.instagram.com/kaijukarainen/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram <FaInstagram size={30} className='mr-4'/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
