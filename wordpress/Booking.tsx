'use client';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../public/assets/kjBg.png';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
const url = process.env.BOOKINGS_URL;

const Booking: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      id="booking"
      className="w-full h-full text-[#e8e7e7] z-10 "
    >
      {/* container */}
      <div className=" bg-[#191a1e] mx-auto p-4 pt-10 flex flex-col justify-center w-full">
        <div className="max-w-[1000px] flex flex-col align-middle mx-auto">
      <h2>{t('pricingText')}</h2> 
        </div>
        </div>
        <div>
          <iframe
            src="https://koalendar.com/e/30-min-keskustelu-aika?embed=true"
            width="100%"
            height="800"
            style={{ border: 'none', overflow: 'hidden' }}
          ></iframe>
        </div>
    </div>
  );
};

export default Booking;
