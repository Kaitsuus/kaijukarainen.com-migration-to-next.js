import React from 'react';
import styles from './styles.module.css';

type Props = {
  src: string;
  title: string;
  subTitle: string;
  linkUrl: string;
};

const GridItem: React.FC<Props> = ({
  src,
  title,
  subTitle,
  linkUrl,
}): JSX.Element => {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className={`${styles['content-div']} shadow-md shadow-[#5ddbe2] group container rounded-md flex justify-center items-center mx-auto z-20`}
    >
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font-bold text-white tracking-wider">
          {title}
          <br />
          {subTitle}
        </span>
        <div className="pt-8 text-center">
          <a href={linkUrl} target="_blank" rel="noreferrer">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
