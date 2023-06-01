import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import EnData from '../utils/translations/enData.json';
import FiData from '../utils/translations/fiData.json';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQModel: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const { t, i18n } = useTranslation();

  const handleRowClick = (rowId: string) => {
    const index = expandedRows.indexOf(rowId);
    const newExpandedRows =
      index >= 0
        ? [...expandedRows.slice(0, index), ...expandedRows.slice(index + 1)]
        : [...expandedRows, rowId];
    setExpandedRows(newExpandedRows);
  };

  const data = () => {
    if (i18n.language === 'en') {
      return EnData;
    }
    return FiData;
  };
  const numCols = 5;

  return (
    <div
      id="FAQ"
      className="w-full h-full bg-[#191a1e] text-[#e8e7e7] z-10 pb-20 pt-20"
    >
      <div className="max-w-[1000px] p-4 flex mx-auto flex-col justify-center h-full">
        <table>
          <thead>
            <tr>
              <th colSpan={numCols}>
                <p className="text-4xl font-bold text-[#fafafa]">
                  {t('TableHead')}
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data().map((row) => (
              <React.Fragment key={row.id}>
                <tr className="border-b-4 text-2xl text-[#fafafa] font-bold border-[#3CD6EB]">
                  <td
                    className="px-4 py-2 hover:cursor-pointer"
                    onClick={() => handleRowClick(row.id)}
                  >
                    {expandedRows.includes(row.id) ? (
                      <FaMinus className="ml-3" />
                    ) : (
                      <FaPlus className="ml-3" />
                    )}{' '}
                    {row.id}
                  </td>
                </tr>
                {expandedRows.includes(row.id) && (
                  <tr>
                    <td colSpan={numCols} className="px-4 py-2">
                      <div
                        className="bg-transparent p-4"
                        onClick={() => handleRowClick(row.id)}
                      >
                        <ul>
                          <li className="text-[#fafafa] text-2xl">
                            {row.text}
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FAQModel;
