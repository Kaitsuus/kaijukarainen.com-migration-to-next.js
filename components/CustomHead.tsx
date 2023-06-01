import { NextSeo, NextSeoProps } from 'next-seo';

const SITE_URL = 'https://kai.jukarainen.com';

interface Props {
  slug: string;
}

function CustomHead({ slug }: Props) {
  const updateMeta: NextSeoProps = {
    title: 'wordpress',
    canonical: `${SITE_URL}/dynamic/${slug}`,
  };
  return <NextSeo {...updateMeta} />;
}

export default CustomHead;
