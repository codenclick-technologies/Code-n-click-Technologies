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
  schemas = [],
  children
}) => {
  const siteName = 'Codenclick Technologies';
  const domain = 'https://codenclick.in';
  const fullTitle = title && !title.includes(siteName) ? `${title} | ${siteName}` : (title || siteName);
  const fullCanonical = canonical 
    ? (canonical.startsWith('http') ? canonical : `${domain}${canonical.startsWith('/') ? canonical : `/${canonical}`}`)
    : `${domain}${window.location.pathname}`;
  const fullImageUrl = imageUrl?.startsWith('http') ? imageUrl : `${domain}${imageUrl?.startsWith('/') ? imageUrl : `/${imageUrl}`}`;
  // Default Schemas (Organization & LocalBusiness)
  const defaultSchemas = [
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
      "description": "Leading software development and digital marketing agency in Delhi offering GMB Expert services, SEO consultation, and web solutions.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6139",
        "longitude": "77.2090"
      },
      "areaServed": [
        { "@type": "City", "name": "Delhi" },
        { "@type": "City", "name": "Delhi" },
        { "@type": "City", "name": "Noida" },
        { "@type": "City", "name": "Gurugram" }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 8700198968",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      },
      "priceRange": "$$",
      "url": domain,
      "telephone": "+91 8700198968"
    }
  ];

  // Merge passed schemas with defaults
  const allSchemas = [...defaultSchemas, ...(schemas || [])];

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || "No1 Digital Marketing Agency Delhi, Best Digital Marketing Agency Delhi, Premium Digital Marketing Services Delhi, Top Software Company Delhi, GMB Expert Delhi, GMB Consultant Delhi, SEO Services Delhi, Web Development Delhi, SaaS Solutions Delhi, Premium IT Services, Best Web Development Company Delhi"} />
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
        {JSON.stringify(allSchemas)}
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
  schemas: PropTypes.array,
  children: PropTypes.node,
};

export default SEO;
