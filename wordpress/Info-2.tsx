'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import 'tailwindcss/tailwind.css';
import moks from '../public/assets/moks.png';
import tablet from '../public/assets/tablet.png';
import Modal from '../components/GetBookModal';
import ContactModal from '../components/ContactModal';

const Info2: React.FC = () => {
  const [showBookModal, setShowBookModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
              <button 
                onClick={() => setShowModal(true)}
                className="font-semibold group text-slate-100 bg-orange-400 px-6 py-3 my-2 flex items-center  hover:scale-110 duration-500 ">
                  {t('contactME')}
                  <span>
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
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
      {/* container */}
      <div className="hidden md:flex  mx-5 flex-col justify-center pt-10 pb-16 exl:pt-40">
        <div className="flex flex-row">
        <div className="hidden xl:flex pr-10 ml-20">
            <Image
              src={tablet}
              width={400}
              height={400}
              alt="tablet"
              className="mx-auto my-auto"
            />
          </div>
          <div className="flex flex-col max-w-[800px] pt-16">
            <h2 className="text-4xl sm:text-4xl font-bold">
              WordPress & Woocommerce <br/>
              {t('playBookHead')}
            </h2>
            <div className="text-xl py-4">
              <p className="text-xl truncate whitespace-pre-wrap max-w-[900px]">
              {t('playBookText')}
              </p>
            </div>
            <div>
                <button 
                onClick={() => setShowBookModal(true)}
                className="font-semibold group text-slate-100 bg-orange-400 px-6 py-3 my-2 flex items-center  hover:scale-110 duration-500 ">
                  {t('subButton')}
                  <span>
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
            </div>
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
              <button 
              onClick={() => setShowModal(true)}
              className="font-semibold text-slate-100 bg-orange-400 group px-6 py-3 my-2 flex items-center hover:scale-110 duration-500">
              {t('contactME')}
              </button>
            </div>

          </div>
        </div>
        <div className="flex flex-row mt-5">
          <div className=" flex flex-col">
            <div className="text-md pt-4">
              <h2 className="truncate font-bold whitespace-pre-wrap max-w-[1000px]">
              WordPress & Woocommerce <br/>
              {t('playBookHead')}
              </h2>
              <p>
              {t('playBookText')}
              </p>
            <button 
                onClick={() => setShowBookModal(true)}
                className="font-semibold group text-slate-100 bg-orange-400 px-6 py-3 my-2 flex items-center  hover:scale-110 duration-500 ">
                  {t('subButton')}
                  <span>
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
            </div>
          </div>
        </div>
      </div>
      {showBookModal ? (
        <Modal showBookModal={showBookModal} setShowBookModal={setShowBookModal} />
      ) : null}
      {showModal ? (
        <ContactModal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
};

export default Info2;
