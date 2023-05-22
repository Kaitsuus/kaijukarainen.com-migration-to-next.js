'use client';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import GridSkills from '@/components/GridSkills';
import data from './data/skillsData.json';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      id="skills"
      className="w-full h-full bg-[#191a1e] text-[#e8e7e7] pt-10"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-start w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#3CD6EB]">
            {t('skillsHeader')}
          </p>
          <p className="py-4">{t('skillsText')}</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {data.map((item, index) => (
            <GridSkills key={index} src={item.src} title={item.title} />
          ))}
        </div>
        <Link to="work" smooth={true} duration={500}>
          <button className="group border-2 font-semibold px-6 py-3 my-2 flex items-center hover:scale-110 duration-500">
            {t('projectsButton')}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Skills;
