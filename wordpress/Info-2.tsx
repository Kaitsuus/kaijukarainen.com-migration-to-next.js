'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import 'tailwindcss/tailwind.css';
import moks from '../public/assets/moks.png';
import Modal from '../components/GetBookModal';

const Info2: React.FC = () => {
  const [showBookModal, setShowBookModal] = useState(false);
  const { t } = useTranslation();
  return (
    <div
      id="info2"
      className="h-full bg-slate-100 sm:h-full w-full text-slate-800 z-10 flex flex-col justify-center"
    >
      {/* container */}
      <div className="hidden md:flex xl:ml-40 mx-5 flex-col justify-center pt-10 pb-16 exl:pt-40">
        <div className="flex flex-row">
          <div className="flex flex-col max-w-[800px] pt-16">
            <h2 className="text-4xl sm:text-4xl font-bold">
              {t('wpMainTextHeader')}
            </h2>
            <div className="text-xl py-4">
              <p className="text-xl truncate whitespace-pre-wrap max-w-[900px]">
                {t('wpMainText')}
                <br />
                <br />
                {t('wpMainTextp2')}
                <br />
                <br />
                {t('wpMainTextp3')}
                <br />
                <br />
                {t('wpMainTextp4')}
              </p>
            </div>
            <div>
            <h2>playbook</h2>
            <p>get playbook</p>
            <button onClick={() => setShowBookModal(true)}>get book</button>
            </div>
            <div>
              <Link to="priceModels" smooth={true} duration={500}>
                <button className="font-semibold group text-slate-100 bg-orange-400 px-6 py-3 my-2 flex items-center  hover:scale-110 duration-500 ">
                  {t('pricingHeader')}
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden xl:flex ml-10 ">
            <Image
              src={moks}
              width={800}
              height={800}
              alt="moks"
              className="mx-auto my-auto"
            />
          </div>
        </div>
      </div>

      <div className="md:hidden w-full pb-5 p-4 flex mx-auto flex-col justify-center">
        <h2 className="text-2xl font-bold">{t('wpMainTextHeader')}</h2>
        <div
          className={`w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center pt-5  mb-5 text-slate-100`}
        >
          <div className={`rounded-md bg-orange-400 z-10`}>
            <h2 className="text-2xl font-bold pt-2">
              {t('wpModernStyleHeader')}
            </h2>
            <p className="my-4 mx-2 text-lg text-left">{t('wpModernStyle')}</p>
          </div>
          <div className={`rounded-md bg-orange-400 z-10`}>
            <h2 className="text-2xl font-bold pt-2">
              {t('wpResposiveHeader')}
            </h2>
            <p className="my-4 mx-2 text-lg text-left">{t('wpResponsive')}</p>
          </div>
          <div className={`rounded-md bg-orange-400 z-10`}>
            <h2 className="text-2xl font-bold pt-2">{t('SeoHeader')}</h2>
            <p className="my-4 mx-2 text-lg text-left">{t('Seo')}</p>
          </div>
          <div className={`rounded-md bg-orange-400 z-10`}>
            <h2 className="text-2xl font-bold pt-2">
              {t('wpManagementHeader')}
            </h2>
            <p className="my-4 mx-2 text-lg text-left">{t('wpManagement')}</p>
          </div>
        </div>
        <div className="flex flex-row mt-5">
          <div className=" flex flex-col">
            <div className="text-md pt-4">
              <p className="truncate whitespace-pre-wrap max-w-[1000px]">
                {t('wpMainText')}
                <br />
                <br />
                {t('wpMainTextp2')}
                <br />
                <br />
                {t('wpMainTextp3')}
                <br />
                <br />
                {t('wpMainTextp4')}
              </p>
            </div>
            <Link
              to="priceModels"
              smooth={true}
              duration={500}
              className="pt-5"
            >
              <button className="font-semibold text-slate-100 bg-orange-400 group px-6 py-3 my-2 flex items-center hover:scale-110 duration-500">
                {t('pricingHeader')}
              </button>
            </Link>
          </div>
        </div>
      </div>
      {showBookModal ? (
        <Modal showBookModal={showBookModal} setShowBookModal={setShowBookModal} />
      ) : null}
    </div>
  );
};

export default Info2;
