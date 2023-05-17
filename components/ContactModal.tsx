"use client"
import React from 'react';
import { useTranslation } from 'react-i18next';
const url = process.env.URL;

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
  const { t } = useTranslation();
  const namePlaceholder = t('namePlaceholder') || undefined;

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-2xl max-h-screen">
          {/*content*/}
          <div className="px-8 bg-[#191a1e] text-[#e8e7e7] rounded-md shadow-md shadow-[#3CD6EB] mt-20 mb-20 z-10">
            <button
              type="button"
              className="text-[#fafafa] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white hover:scale-110 duration-500 float-right pt-5"
              onClick={() => setShowModal(false)}
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
              id="Contact"
              method="POST"
              action={`https://getform.io/f/${url}`}
              className="flex flex-col max-w-[350px] w-full z-10 text-center"
            >
              <div className="pb-8 pt-8">
                <p className="text-4xl font-bold inline border-b-4 border-[#3CD6EB] text-[#fafafa]">
                  {t('contactHeader')}
                </p>
                <p className="text-[#fafafa] font-semibold py-4">
                  {t('contactWpText')} <br />
                  {t('contactWpSpan')}
                </p>
              </div>
              <input
                className="bg-[#fafafa] text-black p-2 "
                type="text"
                placeholder={namePlaceholder}
                name="name"
                required
              />
              <input
                className="my-4 p-2 bg-[#fafafa] text-black"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
              <textarea
                className="bg-[#fafafa] text-black p-2"
                name="message"
                rows={3}
                placeholder={t('messagePlaceholder') || undefined}
                required
              ></textarea>
              <button className="text-[#fafafa] font-semibold border-2 hover:scale-110 duration-500 px-4 py-3 my-8 mx-auto flex items-center">
                {t('collabButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );

}

export default Modal;
