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
      "@id": `${domain}/#organization`,
      "name": siteName,
      "url": domain,
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/logo.png`,
        "width": 180,
        "height": 60
      },
      "sameAs": [
        "https://www.facebook.com/codenclick",
        "https://twitter.com/codenclick",
        "https://www.linkedin.com/company/code-n-click",
        "https://www.instagram.com/codenclick"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-870019-8968",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${domain}/#localbusiness`,
      "name": siteName,
      "image": `${domain}/logo.png`,
      "description": "Premium Digital Agency in Delhi. We specialize in GMB Optimization, SEO, Web Development, and Paid Ads to help businesses grow globally.",
      "url": domain,
      "telephone": "+91-870019-8968",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "New Delhi",
        "addressLocality": "Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6139,
        "longitude": 77.2090
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "14:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "24"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Lucky Sharma" },
          "reviewBody": "If you’re looking for a reliable digital agency, Codenclick Technologies is a solid choice. Their SEO and website recommendations were genuinely helpful.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Surabhi Rawat" },
          "reviewBody": "Working with Codenclick Technologies was a great decision for our Dubai-based business. They understood our target audience perfectly.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        }
      ]
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
