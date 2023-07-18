import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'tailwindcss/tailwind.css';
import EnData from '../utils/translations/tabsEn.json';
import FiData from '../utils/translations/tabsFi.json';
import Image from 'next/image';
import placeholderImageUrl from '../public/assets/moks.png';

interface Step {
  Vaihe: string;
  Selitys: string;
  imgUrl?: string;
  Toimenpiteet?: Toimenpide[];
}

interface Toimenpide {
  Toimenpide: string;
  Selitys: string;
  Koodi?: string;
  imgUrl?: string;
}

interface Data {
  Otsikko: string;
  Johdanto: string;
  Vaiheet: Step[];
  Yhteenveto: string;
}

const Tips: React.FC = () => {
  const { t, i18n } = useTranslation();
  const data = () => {
    if (i18n.language === 'en') {
      return EnData;
    }
    return FiData;
  };
  return (
    <div
      id="tips"
      className="bg-slate-100 text-slate-800 flex flex-col items-center py-10"
    >
      <div className="w-full max-w-screen-md px-4">
        <h2 className="text-4xl font-bold mt-5">{data().Otsikko}</h2>
        <p className="text-xl mt-8">{data().Johdanto}</p>
        <h2 className='text-xl font-bold mt-8'>Vaiheet:</h2>
        {data().Vaiheet.map((vaihe, index) => (
          <div key={index} className="mt-6">
            <h3 className='text-xl font-bold'>{vaihe.Vaihe}</h3>
            <p className="text-base sm:text-xl">{vaihe.Selitys}</p>
            <div className='mt-5'>
            {vaihe.imgUrl ? (
              <Image
                src={vaihe.imgUrl}
                width={800}
                height={400}
                alt="BlogImage"
                className="mx-auto my-auto"
              />
            ) : (
              <p>No Image Available</p>
            )}
            </div>
            {vaihe.Toimenpiteet && (
              <div>
                <h4 className='text-xl font-bold'>Toimenpiteet:</h4>
                {vaihe.Toimenpiteet.map((toimenpide, toimenpideIndex) => (
                  <div key={toimenpideIndex} className="mt-4">
                    <h5 className='text-xl font-bold'>{toimenpide.Toimenpide}</h5>
                    <p className="text-base sm:text-xl whitespace-pre-wrap">{toimenpide.Selitys}</p>
                    {toimenpide.Koodi && <pre className='sm:text-sm whitespace-pre-wrap'>{toimenpide.Koodi}</pre>}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <h2 className='text-xl font-bold mt-8'>Yhteenveto:</h2>
        <p className="text-base sm:text-xl whitespace-pre-wrap mb-8">{data().Yhteenveto}</p>
        <Image
                src={data().imgUrl}
                width={800}
                height={400}
                alt="BlogImage"
                className="mx-auto my-auto"
        />
      </div>
    </div>
  );
};

export default Tips;
