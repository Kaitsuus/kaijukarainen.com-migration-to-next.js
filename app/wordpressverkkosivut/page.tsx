'use client';
import Image from 'next/image';
import kaijukarainen from '../../public/assets/wordpressverkkosivut.png';
import CustomHead from '@/components/CustomHead';

const MyPageImage = () => {
  return (
    <div>
      <CustomHead slug="wordpressverkkosivut" />
      <Image src={kaijukarainen} alt="My Page Image" />
    </div>
  );
};
MyPageImage.getStaticProps = async () => {
  return {
    props: {
      ogImage: 'https://kaijukarainen.com/wordpressverkkosivut',
    },
  };
};
export default MyPageImage;
