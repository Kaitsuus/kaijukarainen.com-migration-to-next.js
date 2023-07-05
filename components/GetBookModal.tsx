'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

interface ModalProps {
  showBookModal: boolean;
  setShowBookModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ showBookModal, setShowBookModal }) => {
  const { t } = useTranslation();
  const namePlaceholder = t('namePlaceholder') || undefined;
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      // Show the thank you message
      setShowThankYou(true);
  
      const response = await axios.post('/api/users', {
        email,
      });
  
      // Handle the response or perform any further actions
      console.log(response.data);
  
      // Reset the form
      setEmail('');
      setShowBookModal(false);
  
      // Reset the thank you message after 3 seconds
      setTimeout(() => {
        setShowThankYou(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-[90%] max-h-screen">
          {/*content*/}
          <div className="px-8 bg-slate-800 text-slate-100 rounded-md shadow-md shadow-slate-100 mt-20 mb-20 z-10">
            <button
              type="button"
              className="text-[#fafafa] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm dark:hover:bg-gray-600 dark:hover:text-white hover:scale-110 duration-500 p-2 absolute right-0"
              onClick={() => setShowBookModal(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <form
              id="getbook"
              onSubmit={handleSubmit}
              className="flex flex-col max-w-[350px] w-full z-10 text-center"
            >
            {showThankYou ? (
              <div className="pb-8 pt-8">
              <p className="text-2xl text-slate-100 font-semibold py-4">
              {t('subBookModal')}
              </p>
              </div>
            ) : (
              <div className="pb-8 pt-8">
                <p className="text-2xl font-bold inline border-b-4 border-orange-400 text-slate-100">
                {t('headerBookModal')} 
                </p>
                <p className="text-slate-100 font-semibold py-4">
                {t('bodyBookModal')}
                </p>
              </div>
            )}
              <input
                className="my-4 p-2 bg-[#fafafa] text-black"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="text-slate-100 font-semibold border-2 hover:scale-110 duration-500 px-4 py-3 my-8 mx-auto flex items-center">
              {t('subButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-slate-800"></div>
    </>
  );
};

export default Modal;
