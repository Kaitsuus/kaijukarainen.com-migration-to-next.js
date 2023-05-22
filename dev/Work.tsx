'use client';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import GridItem from '@/components/GridWork';
import data from './data/gridData.json';

const Work: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div id="work" className="w-full h-full bg-[#191a1e] text-[#e8e7e7] pt-10">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4  border-[#191a1e]">
            {t('projectsHeader')}
          </p>
          <p className="py-6">{t('projectsText')}</p>
        </div>

        {/* Container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <GridItem
              key={index}
              src={item.src}
              title={item.title}
              subTitle={item.subTitle}
              linkUrl={item.linkUrl}
            />
          ))}

          <Link to="footer" smooth={true} duration={500}>
            <button className="text-[#fafafa] font-semibold group border-2 px-6 py-3 my-2 flex items-center hover:scale-110 duration-500">
              {t('navContact')}
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

export default Work;
