import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import backgroundImage from '../public/assets/background.png';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import Image from 'next/image';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      id="home"
      className="w-full h-screen text-slate-800 bg-slate-100"
    >
      <Image
        src={backgroundImage}
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        alt="Background Image"
      />
      {/* container */}
      <div
        className={`hidden md:flex max-w-[1000px] xl:ml-40 mx-5 flex-col justify-center h-full pt-60 ${
          fadeIn ? 'fade-in' : ''
        }`}
      >
        <p className="font-bold pl-1 z-10">Kai Jukarainen</p>
        <p className="text-7xl font-bold z-10">
          {t('wpHero')}
        </p>
          <h1 className="py-4 font-normal ml-2 text-xl max-w-[800px] z-10">
            {t('wpHeroTextXl1')}
            <br />
            {t('wpHeroTextXl2')}
          </h1>
        <div className="z-10">
          <Link to="info2" smooth={true} duration={500}>
            <button className="font-semibold group border-slate-800 border-2 px-6 py-3 my-2 flex items-center hover:scale-110 duration-500 ml-2">
              {t('wpMore')}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
        <div
          className={`w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-20 mb-10 text-slate-100`}
        >
          <div
            className={`rounded-md bg-orange-400 z-10 ${
              fadeIn ? styles['fade-in'] : ''
            }`}
          >
            <h2 className="text-2xl font-bold pt-2">
              {t('wpModernStyleHeader')}
            </h2>
            <p className="my-4 mx-2 text-lg text-left">{t('wpModernStyle')}</p>
          </div>
          <div
            className={`rounded-md bg-orange-400 z-10 ${
              fadeIn ? styles['fade-in2'] : ''
            }`}
          >
            <h2 className="text-2xl font-bold pt-2">
              {t('wpResposiveHeader')}
            </h2>
            <p className="my-4 mx-2 text-lg text-left">{t('wpResponsive')}</p>
          </div>
          <div
            className={`rounded-md bg-orange-400 z-10 ${
              fadeIn ? styles['fade-in3'] : ''
            }`}
          >
            <h2 className="text-2xl font-bold pt-2">
              {t('wpManagementHeader')}
            </h2>
            <p className="my-4 mx-2 text-lg text-left">{t('wpManagement')}</p>
          </div>
        </div>
      </div>
      {/* mobile container */}
      <div className="md:hidden flex mx-5 flex-col justify-center h-full ">
        <p className="font-bold pl-1 z-10">Kai Jukarainen</p>
        <h2 className="text-4xl font-bold z-10">{t('wpHero')}</h2>
        <h2 className="text-2xl  font-bold z-10"></h2>
        <p className="py-4 ml-2 text-xl max-w-[800px] z-10">
          {t('wpHeroTextXl1')}
          <br />
          {t('wpHeroTextXl2')}
        </p>
        <div className='z-10'>
          <Link to="info2" smooth={true} duration={500}>
            <button className="font-semibold border-slate-800 group border-2 px-6 py-3 my-2 flex items-center  hover:scale-110 duration-500 ml-2 ">
              {t('wpMore')}
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

export default Home;
