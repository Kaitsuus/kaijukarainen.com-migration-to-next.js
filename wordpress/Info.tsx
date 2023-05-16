"use client"
import React from 'react';
import { useTranslation } from 'react-i18next';
import YouTube from 'react-youtube';

interface WpVideoProps {
    videoId: string;
    videoHeader: string;
    videoText: string;
  }

  const WpVideo: React.FC<WpVideoProps> = ({ videoId, videoHeader, videoText }): JSX.Element => {
  const { t } = useTranslation();
  const opts = {
    height: '490',
    width: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
    },
  };

  return (
<div id="Info" className="w-full h-full bg-[#191a1e] text-[#e8e7e7] z-10">
<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-start w-full h-ful">
        <div className='pt-20'>
        <h1 className="text-4xl sm:text-4xl font-bold text-[#fafafa]">
                {t('videoHeader')}
              </h1>
              <p className="py-5 text-xl">{t('videoText')}</p>
        </div>
        <div className='w-full h-full pt-5'>
          <YouTube
            videoId="WxatI1d4HGg"
            className="w-full h-full shadow-md shadow-[#3CD6EB]"
            opts={opts}
            title="Would WordPress be suitable for your business?"
          />
        </div>
     </div>
     </div>
  );
};

export default WpVideo;
