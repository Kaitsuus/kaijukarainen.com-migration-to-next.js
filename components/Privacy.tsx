import React from 'react';
import { useTranslation } from 'react-i18next';
import EnData from '@/utils/translations/privacyEn.json';
import FiData from '@/utils/translations/privacyFi.json';
import { FaPlus } from 'react-icons/fa';

const FAQModel: React.FC = () => {
  const { t, i18n } = useTranslation();

  const data = () => {
    if (i18n.language === 'en') {
      return EnData;
    }
    return FiData;
  };

  return (
    <div
      id="privacy"
      className="w-full h-full bg-[#191a1e] text-[#e8e7e7] z-10 pb-20 pt-20"
    >
      <div className="flex md:max-w-[1000px] w-full p-4 md:mx-auto mx-1 flex-col md:justify-center h-full">
        <table>
          <thead>
            <tr>
              <th>
                <div className="py-10">
                  <p className="md:text-4xl text-xl font-bold inline border-b-4 text-[#fafafa] border-[#3CD6EB]">
                    {t('privacyHead')}
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data().map((row) => (
              <tr
                key={row.title}
                className="border-b-4 md:text-2xl text-sm text-[#fafafa] font-bold border-[#3CD6EB]"
              >
                <td className="px-4 py-2">
                  <div>
                    {row.title}
                    <br />
                    <span className="text-[#fafafa] md:text-xl text-sm font-normal">
                      {row.content}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FAQModel;
