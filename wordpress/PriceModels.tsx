import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../components/ContactModal'

const PriceModels: React.FC = () => {
    const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      id="priceModels"
      className="w-full h-full bg-[#191a1e] text-[#e8e7e7] z-10"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-4 pt-5 flex flex-col justify-start w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#3CD6EB]">
            {t('pricingHeader')}
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8">
            {/* Info-container */}
            <div
              className="bg-[#292f37] rounded-md shadow-md shadow-[#5ddbe2] hover:scale-110 duration-500 z-10 hover:cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <h2 className="text-4xl font-extrabold text-[#fafafa] mt-5 ">
                {t('infoHeader')}
                <br />
                <span className="text-lg text-[#fafafa] font-semibold">
                  {t('infoSpan')}
                </span>
              </h2>
              <span className="text-lg text-[#3CD6EB] font-bold">
                {t('infoPrice')}
              </span>
              <ul className="my-4 text-lg font-medium text-[#fafafa] border-t-4 border-[#3CD6EB] pt-4">
                <li>
                  <p>{t('infoL1')}</p>
                </li>
                <li>{t('infoL2')}</li>
                <li>{t('infoL3')}</li>
                <li>{t('infoL4')}</li>
                <li>{t('infoL5')}</li>
              </ul>
              <p className="text-lg font-bold text-[#3CD6EB]">{t('askMore')}</p>
              <p className="mb-4">{t('alv')}</p>
              <div className='pt-5'></div>
            </div>
            {/* Kattava-container */}
            <div
              className="bg-[#292f37] rounded-md shadow-md shadow-[#5ddbe2] hover:scale-110 duration-500 z-10 hover:cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <h2 className="text-4xl font-extrabold text-[#fafafa] mt-5 ">
                {t('kattavaHeader')}
                <br />
                <span className="text-lg text-[#fafafa] font-semibold">
                  {t('kattavaSpan')}
                </span>
              </h2>
              <span className="text-lg text-[#3CD6EB] font-bold">
                {t('kattavaPrice')}
              </span>
              <ul className="my-4 text-lg font-medium text-[#fafafa] border-t-4 border-[#3CD6EB] pt-4">
                <li>
                  <p>{t('kattavaL1')}</p>
                </li>
                <li>{t('infoL2')}</li>
                <li>{t('infoL3')}</li>
                <li>{t('infoL4')}</li>
                <li>{t('infoL5')}</li>
              </ul>
              <p className="text-lg font-bold text-[#3CD6EB]">{t('askMore')}</p>
              <p>{t('alv')}</p>
              <div className='pt-5'></div>
            </div>
            {/* Kauppa-container */}
            <div
              className="bg-[#292f37] rounded-md shadow-md shadow-[#5ddbe2] hover:scale-110 duration-500 z-10 hover:cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <h2 className="text-4xl font-extrabold text-[#fafafa] mt-5 ">
                {t('kauppaHeader')}
                <br />
                <span className="text-lg text-[#fafafa] font-semibold">
                  {t('kauppaSpan')}
                </span>
              </h2>
              <span className="text-lg text-[#3CD6EB] font-bold">
                {t('kauppaPrice')}
              </span>
              <ul className="my-4 text-lg font-medium text-[#fafafa] border-t-4 border-[#3CD6EB] pt-4">
                <li>
                  <p>{t('kauppaL1')}</p>
                </li>
                <li>{t('infoL2')}</li>
                <li>{t('kauppaL3')}</li>
                <li>{t('infoL4')}</li>
              </ul>
              <p className="text-lg font-bold text-[#3CD6EB]">{t('askMore')}</p>
              <p className="text-[#fafafa] mb-4">{t('alv')}</p>
            </div>
            {/* Custom-container */}
            <div
              className="bg-[#292f37] rounded-md shadow-md shadow-[#5ddbe2] hover:scale-110 duration-500 z-10 hover:cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <h2 className="text-4xl font-extrabold text-[#fafafa] mt-5 ">
                {t('customHeader')}
                <br />
                <span className="text-lg text-[#fafafa] font-semibold">
                  {t('customSpan')}
                </span>
              </h2>
              <span className="text-lg text-[#3CD6EB] font-bold">
                {t('customPrice')}
              </span>
              <ul className="my-4 text-lg font-medium text-[#fafafa] border-t-4 border-[#3CD6EB] pt-4">
                <li>{t('customL1')}</li>
                <li>{t('customL2')}</li>
                <li>{t('customL3')}</li>
              </ul>
              <p className="text-lg font-bold text-[#3CD6EB]">{t('askMore')}</p>
              <p className="text-[#fafafa] mb-4">{t('alv')}</p>
              <div className='pt-5'></div>
            </div>
          </div>
        </div>
        <p className="text-lg z-10 ">{t('pricingText')}</p>
      </div>
      {showModal ? <Modal showModal={showModal} setShowModal={setShowModal}  /> : null}
    </div>
  );
}

export default PriceModels