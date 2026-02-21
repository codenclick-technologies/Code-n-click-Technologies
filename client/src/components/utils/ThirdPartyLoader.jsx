import React, { useEffect, useState } from 'react';

const ThirdPartyLoader = () => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Delay loading by 3.5 seconds to ensure Main Thread is idle
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    // Google Tag Manager
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-136N1MN22S';
    document.head.appendChild(gtmScript);

    const gtmConfig = document.createElement('script');
    gtmConfig.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-136N1MN22S');
    `;
    document.head.appendChild(gtmConfig);

    // Iubenda Configuration
    const iubConfig = document.createElement('script');
    iubConfig.innerHTML = `
      var _iub = _iub || [];
      _iub.csConfiguration = { "siteId": 4354650, "cookiePolicyId": 11772884, "lang": "en", "storage": { "useSiteId": true } };
    `;
    document.head.appendChild(iubConfig);

    // Iubenda Core Scripts
    const iubScript1 = document.createElement('script');
    iubScript1.src = 'https://cs.iubenda.com/autoblocking/4354650.js';
    iubScript1.defer = true; 
    document.head.appendChild(iubScript1);

    const iubScript2 = document.createElement('script');
    iubScript2.src = '//cdn.iubenda.com/cs/gpp/stub.js';
    iubScript2.defer = true;
    document.head.appendChild(iubScript2);

    const iubScript3 = document.createElement('script');
    iubScript3.src = '//cdn.iubenda.com/cs/iubenda_cs.js';
    iubScript3.charset = 'UTF-8';
    iubScript3.async = true;
    iubScript3.defer = true;
    document.head.appendChild(iubScript3);

  }, [shouldLoad]);

  return null;
};

export default ThirdPartyLoader;
