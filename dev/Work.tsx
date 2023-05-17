'use client';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Anocom from '../public/assets/anocom_as.png';
import Mooc from '../public/assets/JavaMooc.png';
import Kaiju from '../public/assets/kaiju.png';
import MasterCipher from '../public/assets/UiMock.png';
import Fullstack from '../public/assets/fullstack.png';
import TileFreak from '../public/assets/tilefreakMoc.png';
import styles from './styles.module.css';

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
          {/*Grid item*/}
          <div
            style={{ backgroundImage: `url(${MasterCipher.src})` }}
            className={`${styles['content-div']} shadow-md shadow-[#5ddbe2] group container rounded-md flex justify-center items-center mx-auto z-20`}
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Caesar Cipher
                <br />
                Mobile puzzles
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Kaitsuus/MasterCipher-React-native"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid item*/}
          <div
            style={{ backgroundImage: `url(${Fullstack.src})` }}
            className={`${styles['content-div']} shadow-md shadow-[#5ddbe2] group container rounded-md flex justify-center items-center mx-auto z-20`}
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Full Stack Open
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Kaitsuus/FullStackOpen22"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid item*/}
          <div
            style={{ backgroundImage: `url(${TileFreak.src})` }}
            className={`${styles['content-div']} shadow-md shadow-[#5ddbe2] group container rounded-md flex justify-center items-center mx-auto z-20`}
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Wordpress
                <br className="pl-4" />
                woocommerce
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://tilefreak.fi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Site
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid item*/}
          <div
            style={{ backgroundImage: `url(${Anocom.src})` }}
            className={`${styles['content-div']} shadow-md shadow-[#5ddbe2] group container rounded-md flex justify-center items-center mx-auto z-20`}
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Live chat app
                <br />
                React native, Firebase
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Kaitsuus/Firebase-ChatApp-React-Native"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid item*/}
          <div
            style={{ backgroundImage: `url(${Mooc.src})` }}
            className={`${styles['content-div']} shadow-md shadow-[#5ddbe2] group container rounded-md flex justify-center items-center mx-auto z-20`}
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Java Programming I
                <br />
                Completed
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Kaitsuus/JAVA_MOOC_2021"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid item*/}
          <div
            style={{ backgroundImage: `url(${Kaiju.src})` }}
            className={`${styles['content-div']} shadow-md shadow-[#5ddbe2] group container rounded-md flex justify-center items-center mx-auto z-20`}
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Portfolio
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://kaijukarainen.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Site
                  </button>
                </a>
                <a
                  href="https://github.com/Kaitsuus/kaijukarainen.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
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
