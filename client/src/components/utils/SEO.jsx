import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  type = 'website', 
  imageUrl = '/og-image.jpg', // Default OG image path
  author = 'Codenclick Technologies',
  children
}) => {
  const siteName = 'Codenclick Technologies';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const domain = 'https://codenclick.in';
  const fullCanonical = canonical ? `${domain}${canonical}` : domain;
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${domain}${imageUrl}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || "No1 Digital Marketing Agency Delhi, No1 Digital Marketing Agency Faridabad, Best Digital Marketing Agency Delhi, Best Digital Marketing Agency Faridabad, Premium Digital Marketing Services Delhi, Premium Digital Marketing Services Faridabad, Top Software Company Delhi, Top Software Company Faridabad, GMB Expert Delhi, GMB Expert Faridabad, GMB Consultant Delhi, GMB Consultant Faridabad, SEO Services Delhi, SEO Services Faridabad, Web Development Delhi, Web Development Faridabad, SaaS Solutions Delhi, SaaS Solutions Faridabad, Premium IT Services, Best Web Development Company Delhi, Best Web Development Company Faridabad"} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={fullImageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@codenclick" /> 

      {/* Structural Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": siteName,
            "url": domain,
            "logo": `${domain}/logo.png`,
            "sameAs": [
              "https://www.facebook.com/codenclick",
              "https://twitter.com/codenclick",
              "https://www.linkedin.com/company/code-n-click"
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": siteName,
            "image": `${domain}/logo.png`,
            "description": "Leading software development and digital marketing agency in Faridabad offering GMB Expert services, SEO consultation, and web solutions.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Faridabad",
              "addressRegion": "Haryana",
              "addressCountry": "IN"
            },
            "priceRange": "$$",
            "url": domain,
            "telephone": "+91 8700198968"
          }
        ])}
      </script>
      {children}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  canonical: PropTypes.string,
  type: PropTypes.string,
  imageUrl: PropTypes.string,
  author: PropTypes.string,
  children: PropTypes.node,
};

export default SEO;
