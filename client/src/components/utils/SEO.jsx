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
  author = 'code-n-click Technologies',
  children
}) => {
  const siteName = 'Code-n-Click Technologies';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const domain = 'https://codenclick.in';
  const fullCanonical = canonical ? `${domain}${canonical}` : domain;
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${domain}${imageUrl}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
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
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteName,
          "url": domain,
          "logo": `${domain}/logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-1234567890", // Placeholder
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.facebook.com/codenclick",
            "https://twitter.com/codenclick",
            "https://www.linkedin.com/company/code-n-click"
          ]
        })}
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
