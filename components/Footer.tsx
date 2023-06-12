'use client';
import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Modal from '../components/ContactModal';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

interface FooterProps {
  linkDestination: string;
}

const Footer: React.FC<FooterProps> = ({ linkDestination }) => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  return (
    <footer
      id="footer"
      className="text-center bg-[#191a1e] text-[#e8e7e7] pt-20"
    >
      {/* container */}
      <div className="md:flex flex-row justify-center gap-5">
        <div className="pb-8 pt-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#3CD6EB]">
            {t('contact-me')}
          </p>
          <ul className="py-4 font-semibold">
            <li>
              <p>Kai Jukarainen</p>
            </li>
            <li>
              <p>Y-tunnus 3363065-8</p>
            </li>
            <li>
              <p>kai.jukarainen@kaijukarainen.com</p>
            </li>
            <li>
              <p>+358 406 632 944</p>
            </li>
            <li>
              <p>52340, Hangastenmaa</p>
            </li>
          </ul>
        </div>
        <div className="pb-8 pt-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#3CD6EB] ">
            {t('contactHeader')}
          </p>
          <button
            className="font-semibold group border-2 px-6 py-3 my-2 mt-5 md:flex hover:scale-110 duration-500 ml-2 "
            onClick={() => setShowModal(true)}
          >
            {t('contactME')}
          </button>
        </div>
      </div>
      {/* container */}
      <div className="md:flex flex-row justify-center">
        <ul className="inline-flex">
          <li className="w-[60px] h-[60px] flex justify-between items-center z-10 hover:scale-150 duration-500">
            <a
              className="flex  justify-between w-full text-gray-300"
              href="https://www.linkedin.com/in/kai-jukarainen-b6b1a9257/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex  justify-between items-center z-10 hover:scale-150 duration-500">
            <a
              className="flex justify-between w-full text-gray-300"
              href="https://github.com/Kaitsuus"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex  justify-between items-center z-10 hover:scale-150 duration-500">
            <a
              className="flex justify-between w-full text-gray-300"
              href="https://www.youtube.com/@devkj"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex  justify-between items-center z-10 hover:scale-150 duration-500">
            <a
              className="flex justify-between w-full text-gray-300"
              href="https://www.facebook.com/people/kaijukarainencom/100092388553380/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex  justify-between items-center z-10 hover:scale-150 duration-500">
            <a
              className="flex justify-between w-full text-gray-300"
              href="https://www.instagram.com/kaijukarainen/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-center items-center">
        <a href="/privacy">
          <p className=" text-white group px-6 py-3 my-2 flex items-center hover:cursor-pointer hover:text-[#3CD6EB] z-10">
            privacy
          </p>
        </a>
        <p>Copyright © 2023 Kai Jukarainen</p>
        <Link to={linkDestination} smooth={true} duration={500}>
          <p className=" text-white group px-6 py-3 my-2 flex items-center hover:cursor-pointer hover:text-[#3CD6EB] z-10">
            Up
            <span className="group-hover:rotate-[-90deg] duration-300 group-hover:cursor-pointer hover:text-[#3CD6EB] z-10">
              <HiArrowNarrowRight className="ml-3 z-10" />
            </span>
          </p>
        </Link>
      </div>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
    </footer>
  );
};

export default Footer;
