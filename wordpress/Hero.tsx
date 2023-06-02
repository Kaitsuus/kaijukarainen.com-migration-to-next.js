'use client';
import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import backgroundImage from '../public/assets/kjBg.png';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const bgStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      id="wordpress"
      style={bgStyle}
      className="w-full h-screen bg-[#191a1e] z-10 flex items-center"
    >
      {/* container */}
      <div
        className="hidden md:flex max-w-[1000px] flex-col top-[30%] justify-center"
        style={{
          backgroundColor: '#fb3958',
          color: '#fafafa',
          height: '50%',
          width: '100%',
        }}
      >
        <div style={{ marginLeft: 80 }}>
          <h2 className="text-7xl mx-5">{t('wpHero')}</h2>
          <p className="py-4 mx-5 text-xl max-w-[800px]">
            {t('wpHeroTextXl1')}
            <br />
            {t('wpHeroTextXl2')}
          </p>
          <div>
            <Link to="info2" smooth={true} duration={500}>
              <button className="font-semibold group border-2 px-6 py-4 flex items-center  hover:scale-110 duration-500 ml-4 ">
                {t('wpMore')}
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile container */}
      <div className="md:hidden flex mx-5 flex-col justify-center h-full">
        <p className="text-[#e8e7e7] font-bold pl-1">
          OODI <span className="text-[#3CD6EB]">Koodille</span>
        </p>
        <h2 className="text-4xl font-bold">{t('wpHero')}</h2>
        <h2 className="text-2xl  font-bold"></h2>
        <p className="py-4 ml-2 text-xl max-w-[800px]">
          {t('wpHeroTextXl1')}
          <br />
          {t('wpHeroTextXl2')}
        </p>
        <Link to="info2" smooth={true} duration={500}>
          <button className="font-semibold group border-2 px-6 py-3 my-2 flex items-center  hover:scale-110 duration-500 ml-2 ">
            {t('wpMore')}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
