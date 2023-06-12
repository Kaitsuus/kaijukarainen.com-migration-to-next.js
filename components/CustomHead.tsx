import { NextSeo } from 'next-seo';

type MetaData = {
  home: {
    title: string;
    description: string;
  };
  dev: {
    title: string;
    description: string;
  };
  privacy: {
    title: string;
    description: string;
  };
  pageImage: {
    title: string;
    description: string;
  };
};

interface CustomHeadProps {
  slug: keyof MetaData;
}

const CustomHead: React.FC<CustomHeadProps> = ({ slug }) => {
  // Define meta data for each page based on the slug
  const metaData: MetaData = {
    home: {
      title: 'WordPress verkkosivut yrityksille.',
      description:
        'Tarvitseeko yrityksesi tyylikkäät ja käyttäjäystävälliset WordPress-verkkosivut, jotka houkuttelevat uusia asiakkaita ja kasvattavat myyntiäsi?',
    },
    dev: {
      title: 'Kai Jukarainen Ohjelmistokehittäjä',
      description:
        'Olen erikoistunut rakentamaan ja kehittämään isoja sekä pieniä responsiivisia sovelluksia ja verkkosivuja. Minulla on vahva kokemus myös B2B & B2C myynistä, markkinoinnista ja maahantuonnista, sekä mainonnasta, sisällöntuotannosta ja logistiikasta. Toteutan ratkaisuja, jotka vastaavat yritysten, sekä käyttäjien tarpeita ammattitaidolla.',
    },
    privacy: {
      title: 'Privacy page',
      description: 'Rekisteri- ja tietosuojaseloste.',
    },
    pageImage: {
      title: 'Sivu Kuva',
      description: 'Sivuston kuva',
    },
  };

  // Get the meta data for the current page based on the slug
  const currentPageMetaData = metaData[slug];

  return (
    <NextSeo
      title={currentPageMetaData.title}
      description={currentPageMetaData.description}
    />
  );
};

export default CustomHead;
