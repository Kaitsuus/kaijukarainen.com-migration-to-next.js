'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import YouTube from 'react-youtube';

interface WpVideoProps {
  videoId: string;
  videoTitle: string;
}

const WpVideo: React.FC<WpVideoProps> = ({
  videoId,
  videoTitle,
}): JSX.Element => {
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
        <div className="pt-20">
          <h2 className="text-4xl sm:text-4xl font-bold text-[#fafafa]">
            {t('videoHeader')}
          </h2>
          <div className="text-xl py-4">
            <p>{t('videoText')}</p>
          </div>
        </div>
        <div className="w-full h-full pt-5">
          <YouTube
            videoId={videoId}
            className="w-full h-full shadow-md shadow-[#3CD6EB]"
            opts={opts}
            title={videoTitle}
          />
        </div>
      </div>
    </div>
  );
};

export default WpVideo;
