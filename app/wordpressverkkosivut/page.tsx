'use client';
import Image from 'next/image';
import kaijukarainen from '../../public/assets/wordpressverkkosivut.png';
import CustomHead from '@/components/CustomHead';

const MyPageImage = () => {
  return (
    <>
      <title>Sivuston Kuva</title>
      <meta name="description" content="wordpressverkkosivut.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="WordPress, Woocommerce, verkkosivut, SEO, verkkosivut yrityksille, WordPress-verkkosivut, web designer, wordpress developement, web developement, ohjelmisto kehittäjä, verkkosivu toteutukset,"
      />
      <meta name="author" content="Kai Jukarainen" />
      <link
        rel="google-site-verification"
        href="/google960e0ffaae4fc22c.html"
      />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta property="og:title" content="Sivuston Kuva" />
      <meta property="og:description" content="wordpressverkkosivut.png" />
      <meta
        property="og:image"
        content="https://kaijukarainen.com/wordpressverkkosivut"
      />
      <div>
        <CustomHead slug="pageImage" />
        <Image src={kaijukarainen} alt="My Page Image" />
      </div>
    </>
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
