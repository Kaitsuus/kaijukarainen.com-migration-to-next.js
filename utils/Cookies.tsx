'use-client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CookieConsent from 'react-cookie-consent';

function Cookie() {
  const { t } = useTranslation();

  return (
    <CookieConsent
      location="bottom"
      buttonText={t('cookieButton')}
      cookieName="my-cookie"
      expires={365}
      enableDeclineButton={false}
      acceptOnScroll={false}
      acceptOnScrollPercentage={10}
      cookieSecurity
      buttonStyle={{ backgroundColor: '#4f46e5', color: '#fff' }}
      sameSite="none"
    >
      <div>
        <p>{t('cookieText')}</p>
      </div>
    </CookieConsent>
  );
}

export default Cookie;
