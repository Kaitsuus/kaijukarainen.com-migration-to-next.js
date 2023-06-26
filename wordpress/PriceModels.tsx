import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../components/ContactModal';
import styles from '../components/styles.module.css';

const PriceModels: React.FC = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      id="priceModels"
      className="w-full h-full text-slate-800 bg-slate-100 z-10"
    >
      {/* container */}
      <div className=" mx-auto p-4 pt-10 flex flex-col justify-center w-full">
        <div className="max-w-[1000px] flex flex-col align-middle mx-auto">
          <p className="text-4xl font-bold">{t('pricingHeader')}</p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8">
            {/* Info-container */}
            <div
              className={`bg-orange-400 rounded-md shadow-md shadow-slate-800 z-10 hover:cursor-pointer ${styles['hover-effect']}`}
              onClick={() => setShowModal(true)}
            >
              <h2 className="text-4xl font-extrabold text-slate-100 mt-5 ">
                {t('infoHeader')}
                <br />
                <span className="text-lg text-slate-100 font-semibold">
                  {t('infoSpan')}
                </span>
              </h2>
              <span className="text-lg text-slate-100 font-bold">
                {t('infoPrice')}
              </span>
              <ul className="my-4 text-lg font-medium text-slate-100 border-t-4 border-slate-100 pt-4">
                <li>
                  <p>{t('infoL1')}</p>
                </li>
                <li>{t('infoL2')}</li>
                <li>{t('infoL3')}</li>
                <li>{t('infoL4')}</li>
                <li>{t('infoL5')}</li>
              </ul>
              <p className="text-lg font-bold text-slate-100">{t('askMore')}</p>
              <p className="mb-4">{t('alv')}</p>
              <div className="pt-5"></div>
            </div>
            {/* Kattava-container */}
            <div
              className={`bg-orange-400 rounded-md shadow-md shadow-slate-800 z-10 hover:cursor-pointer ${styles['hover-effect']}`}
              onClick={() => setShowModal(true)}
            >
              <h2 className="text-4xl font-extrabold text-slate-100 mt-5 ">
                {t('kattavaHeader')}
                <br />
                <span className="text-lg text-slate-100 font-semibold">
                  {t('kattavaSpan')}
                </span>
              </h2>
              <span className="text-lg text-slate-100 font-bold">
                {t('kattavaPrice')}
              </span>
              <ul className="my-4 text-lg font-medium text-slate-100 border-t-4 border-slate-100 pt-4">
                <li>
                  <p>{t('kattavaL1')}</p>
                </li>
                <li>{t('infoL2')}</li>
                <li>{t('infoL3')}</li>
                <li>{t('infoL4')}</li>
                <li>{t('infoL5')}</li>
              </ul>
              <p className="text-lg font-bold text-slate-100">{t('askMore')}</p>
              <p>{t('alv')}</p>
              <div className="pt-5"></div>
            </div>
            {/* Kauppa-container */}
            <div
              className={`bg-orange-400 rounded-md shadow-md shadow-slate-800 z-10 hover:cursor-pointer ${styles['hover-effect']}`}
              onClick={() => setShowModal(true)}
            >
              <h2 className="text-4xl font-extrabold text-slate-100 mt-5 ">
                {t('kauppaHeader')}
                <br />
                <span className="text-lg text-slate-100 font-semibold">
                  {t('kauppaSpan')}
                </span>
              </h2>
              <span className="text-lg text-slate-100 font-bold">
                {t('kauppaPrice')}
              </span>
              <ul className="my-4 text-lg font-medium text-slate-100 border-t-4 border-slate-100 pt-4">
                <li>
                  <p>{t('kauppaL1')}</p>
                </li>
                <li>{t('infoL2')}</li>
                <li>{t('kauppaL3')}</li>
                <li>{t('infoL4')}</li>
              </ul>
              <p className="text-lg font-bold text-slate-100">{t('askMore')}</p>
              <p className=" mb-4">{t('alv')}</p>
            </div>
            {/* Custom-container */}
            <div
              className={`bg-orange-400 rounded-md shadow-md shadow-slate-800 z-10 hover:cursor-pointer ${styles['hover-effect']}`}
              onClick={() => setShowModal(true)}
            >
              <h2 className="text-4xl font-extrabold text-slate-100 mt-5 ">
                {t('customHeader')}
                <br />
                <span className="text-lg text-slate-100 font-semibold">
                  {t('customSpan')}
                </span>
              </h2>
              <span className="text-lg text-slate-100 font-bold">
                {t('customPrice')}
              </span>
              <ul className="my-4 text-lg font-medium text-slate-100 border-t-4 border-slate-100 pt-4">
                <li>{t('customL1')}</li>
                <li>{t('customL2')}</li>
                <li>{t('customL3')}</li>
              </ul>
              <p className="text-lg font-bold text-slate-100">{t('askMore')}</p>
              <p className="mb-4">{t('alv')}</p>
              <div className="pt-5"></div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
};

export default PriceModels;
