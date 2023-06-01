'use client';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../public/assets/kjBg.png';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import 'tailwindcss/tailwind.css';



const Info2: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      id="info2"
      className="h-full md:h-full text-[#e8e7e7] z-10 flex-col justify-center "
    >
      {/* container */}
      <div className="w-full bg-[#191a1e] p-4 flex mx-auto flex-col">
        <div className="flex flex-row mt-5 ml-40">
          <div className="pl-20 pr-5 flex flex-col">
            <h1 className="text-4xl sm:text-4xl font-bold text-[#fafafa]">
              {t('wpMainTextHeader')}
            </h1>
            <div className="text-xl py-4">
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
          <div>
      </div>
        </div>
          <Link to="info3" smooth={true} duration={500}>
            <button className="font-semibold group border-2 px-6 py-3 my-2 flex items-center  hover:scale-110 duration-500 ml-40 ">
              {t('pricingHeader')}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
    </div>
    
  );
};

export default Info2;
