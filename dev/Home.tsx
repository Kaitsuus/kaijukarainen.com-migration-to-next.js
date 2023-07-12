'use client';
import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import backgroundImage from '../public/assets/devBackground.png';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const DevHome: React.FC = () => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const textList = [t('developer')];
    let interval: NodeJS.Timeout;

    function typeNextLetter() {
      setText((prevText) => textList[0].substring(0, prevText.length + 1));
    }

    function deleteLastLetter() {
      setText((prevText) => prevText.substring(0, prevText.length - 1));
    }

    function startTyping() {
      setIsTyping(true);
      interval = setInterval(() => {
        if (text === textList[0]) {
          setIsTyping(false);
          clearInterval(interval);
        } else if (isTyping) {
          typeNextLetter();
        } else {
          deleteLastLetter();
        }
      }, 150);
    }

    startTyping();

    return () => {
      clearInterval(interval);
    };
  }, [t]);

  return (
    <div
      id="Dev"
      className="w-full h-screen bg-[#191a1e] text-[#e8e7e7]"
    >
      <Image
        src={backgroundImage}
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        alt="Background Image"
      />
      {/* container */}
      <div className="hidden md:flex max-w-[1000px] xl:ml-40 mx-5 flex-col justify-center h-full">
        <p className="text-[#e8e7e7] font-bold pl-1 z-10">
          {t('oodi')}
          <span className="text-[#3CD6EB]"> {t('koodi')}</span>
        </p>
        <h2 className="text-7xl font-bold text-[#e8e7e7] z-10">{t('kj')}</h2>
        <h2 className="text-7xl font-bold text-[#e8e7e7] z-10">
          {text}
          <span className="opacity-0 animate-pulse">_</span>
        </h2>
        <p className="text-[#fafafa] py-4 max-w-[700px] z-10">{t('homePara')}</p>
        <div className='z-10'>
          <Link to="about" smooth={true} duration={500}>
            <button className="text-[#fafafa] font-semibold group border-2 px-6 py-3 my-2 flex items-center  hover:scale-110 duration-500">
              {t('aboutButton')}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
      {/* mobile container */}
      <div className="md:hidden flex mx-5 flex-col justify-center h-full">
        <p className="text-[#e8e7e7] font-bold pl-1 z-10">
          OODI <span className="text-[#3CD6EB]">Koodille</span>
        </p>
        <h2 className="text-4xl font-bold text-[#e8e7e7] z-10">Kai Jukarainen</h2>
        <h2 className="text-2xl font-bold text-[#e8e7e7] z-10">
          {text}
          <span className="opacity-0 animate-pulse">_</span>
        </h2>
        <p className="text-[#fafafa] py-4 max-w-[700px] z-10">{t('homePara')}</p>
        <div className='z-10'>
          <Link to="about" smooth={true} duration={500}>
            <button className="text-[#fafafa] font-semibold group border-2 px-6 py-3 my-2 flex items-center  hover:scale-110 duration-500">
              {t('aboutButton')}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevHome;
