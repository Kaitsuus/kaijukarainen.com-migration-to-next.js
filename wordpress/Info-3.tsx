"use client"
import Image from 'next/image'
import { useTranslation } from 'react-i18next';

const Info3: React.FC = () => {
    const { t } = useTranslation();
  return (
    <div
      id="info3"
      className="w-full h-full bg-[#191a1e] text-[#e8e7e7] z-10"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 pt-10 flex flex-col justify-start w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#3CD6EB]">
            {t('wpIncludesHeader')}
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="bg-[#292f37] rounded-md shadow-md shadow-[#5ddbe2] z-10">
              <Image src="/assets/laptop.png"
                width={80}
                height={80}
                alt="LaptopImg"
                className='mx-auto mt-1'/>
              <p className="my-4 mx-1 text-lg ">
                <strong>{t('wpModernStyleHeader')}</strong>
                <br />
                {t('wpModernStyle')}
              </p>
            </div>
            <div className="bg-[#292f37] rounded-md shadow-md shadow-[#5ddbe2] z-10">
            <Image src="/assets/search.png"
                width={80}
                height={80}
                alt="searchIcon"
                className='mx-auto mt-1'/>
              <p className="my-4 mx-1 text-lg text-[#fafafa]">
                <strong>{t('wpResposiveHeader')}</strong>
                <br />
                {t('wpResponsive')}
              </p>
            </div>
            <div className="bg-[#292f37] rounded-md shadow-md shadow-[#5ddbe2] z-10">
            <Image src="/assets/phone.png"
                width={80}
                height={80}
                alt="phoneIcon"
                className='mx-auto '/>
              <p className="my-4 mx-1 text-lg text-[#fafafa]">
                <strong>{t('SeoHeader')}</strong>
                <br />
                {t('Seo')}
              </p>
            </div>
            <div className="bg-[#292f37] rounded-md shadow-md shadow-[#5ddbe2] z-10">
            <Image src="/assets/wp.png"
                width={80}
                height={80}
                alt="WordPressIcon"
                className='mx-auto mt-1'/>
              <p className="my-4 mx-1 text-lg text-[#fafafa]">
                <strong>{t('wpManagementHeader')}</strong>
                <br />
                {t('wpManagement')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info3