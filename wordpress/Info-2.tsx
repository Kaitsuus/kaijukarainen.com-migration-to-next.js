"use client"
import { useTranslation } from 'react-i18next';
import Image from 'next/image'
import WpImg from '../public/assets/wphands.png';

const Info2: React.FC = () => {
    const { t } = useTranslation();
  return (
    <div
      id="info2"
      className="w-full h-full bg-[#191a1e] text-[#e8e7e7] z-10 pb-20 pt-20"
    >
      {/* container */}
      <div className="max-w-[1000px] p-4 flex mx-auto flex-col justify-center h-full">
        <div className="flex flex-row bg-gradient-to-bl from-[#292f37] to-[#4f565e] shadow-md shadow-[#040c16] mt-5">
          <div className="w-[65%] pl-20 pr-5 flex flex-col justify-center ">
            <h1 className="text-4xl sm:text-4xl font-bold text-[#fafafa]">
              {t('wpMainTextHeader')}
            </h1>
            <p className="text-xl text-[#fafafa] truncate whitespace-pre-wrap max-w-[1000px]">
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
        </div>
      </div>
    </div>
  )
}

export default Info2