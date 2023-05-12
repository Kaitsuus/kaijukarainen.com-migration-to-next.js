"use client"
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className="w-full h-full bg-[#191a1e] text-[#e8e7e7] "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-start w-full h-full">
        <div className="pt-20">
          <div className="pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#5ddbe2]">
              {t('aboutHeader')}
            </p>
          </div>
          <div></div>
        </div>
        <div className="">
          <div className="text-4xl font-bold">
            <p>{t('hi')}</p>
          </div>
          <div>
            <p className="max-w-[700px] md:text-xl  py-4">{t('aboutText')}</p>
          </div>
          <div>
            <Link to="skills" smooth={true} duration={500}>
              <button className="group border-2 border-[#e8e7e7] px-6 py-3 my-2 flex items-center font-semibold hover:scale-110 duration-500">
                {t('skillsButton')}
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
