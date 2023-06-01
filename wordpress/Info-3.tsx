'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Info3: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div id="info3" className="w-full h-full  text-[#e8e7e7] z-10">
      {/* container */}
      <div className=" bg-[#191a1e] mx-auto p-4 pt-10 flex flex-col justify-center w-full">
        <div className="max-w-[1000px] flex flex-col align-middle mx-auto">
          <h2 className="text-4xl font-bold">
            {t('wpIncludesHeader')}
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="bg-[#292f37] rounded-md shadow-md shadow-[#5ddbe2] z-10">
              <p className="my-4 mx-1 text-lg ">
                <strong className='text-2xl'>{t('wpModernStyleHeader')}</strong>
                <br />
                <br />
                {t('wpModernStyle')}
              </p>
            </div>
            <div className="bg-[#292f37] rounded-md shadow-md shadow-[#5ddbe2] z-10">
              <p className="my-4 mx-1 text-lg text-[#fafafa]">
                <strong className='text-2xl'>{t('wpResposiveHeader')}</strong>
                <br />
                <br />
                {t('wpResponsive')}
              </p>
            </div>
            <div className="bg-[#292f37] rounded-md shadow-md shadow-[#5ddbe2] z-10">
              <p className="my-4 mx-1 text-lg text-[#fafafa]">
                <strong className='text-2xl'>{t('SeoHeader')}</strong>
                <br />
                <br />
                {t('Seo')}
              </p>
            </div>
            <div className="bg-[#292f37] rounded-md shadow-md shadow-[#5ddbe2] z-10">
              <p className="my-4 mx-1 text-lg text-[#fafafa]">
                <strong className='text-2xl'>{t('wpManagementHeader')}</strong>
                <br />
                <br />
                {t('wpManagement')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info3;
