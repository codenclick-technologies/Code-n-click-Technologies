import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

/**
 * Standardized SEO & Metadata Component
 * Enforces canonical domain parity (https://www.codenclick.in), strict trailing slashes,
 * and valid JSON-LD schemas (Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage)
 * without synthetic reviews or fabricated office locations.
 */
const SEOHead = ({
  title,
  description,
  canonicalPath,
  type = 'website',
  imageUrl = '/brand-full.png',
  breadcrumbs = [],
  faqs = [],
  serviceDetails = null,
  geo = null
}) => {
  const siteName = 'Codenclick Technologies';
  const siteDomain = 'https://www.codenclick.in';

  // Ensure canonical path begins and ends cleanly
  let cleanPath = canonicalPath || '';
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
  if (!cleanPath.endsWith('/')) cleanPath = cleanPath + '/';

  const fullCanonical = `${siteDomain}${cleanPath}`;
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${siteDomain}${imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`}`;

  // 1. Organization Schema (Valid, authentic)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteDomain}/#organization`,
    name: siteName,
    url: `${siteDomain}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${siteDomain}/brand-full.png`,
      width: 711,
      height: 351
    },
    sameAs: [
      'https://www.facebook.com/codenclick',
      'https://twitter.com/codenclick',
      'https://www.linkedin.com/company/code-n-click',
      'https://www.instagram.com/codenclick'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-870019-8968',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi']
    },
    knowsAbout: [
      'Search Engine Optimization (SEO)',
      'Performance Marketing & PPC',
      'Full-Stack Web Development',
      'AI Workflow & Lead Automation',
      'Conversion Rate Optimization (CRO)'
    ]
  };

  // 2. WebPage Schema with AEO Speakable & IEO Entity Graph
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${fullCanonical}#webpage`,
    url: fullCanonical,
    name: title,
    description: description,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteDomain}/#website`,
      name: siteName,
      url: `${siteDomain}/`
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.aeo-summary-statement', '.aeo-quick-answer']
    },
    about: [
      { '@type': 'Thing', name: 'Digital Marketing', sameAs: 'https://en.wikipedia.org/wiki/Digital_marketing' },
      { '@type': 'Thing', name: 'Search Engine Optimization', sameAs: 'https://en.wikipedia.org/wiki/Search_engine_optimization' },
      { '@type': 'Thing', name: 'Pay-per-click Advertising', sameAs: 'https://en.wikipedia.org/wiki/Pay-per-click' },
      { '@type': 'Thing', name: 'Web Development', sameAs: 'https://en.wikipedia.org/wiki/Web_development' }
    ]
  };

  // 3. BreadcrumbList Schema
  let breadcrumbSchema = null;
  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.path.startsWith('http') ? crumb.path : `${siteDomain}${crumb.path.endsWith('/') ? crumb.path : `${crumb.path}/`}`
      }))
    };
  }

  // 4. Service Schema with GEO areaServed & Coordinates
  let serviceSchema = null;
  if (serviceDetails) {
    const areaServedConfig = geo ? {
      '@type': 'City',
      name: geo.placename || serviceDetails.areaServed || 'India',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: geo.regionName || 'India'
      },
      geo: (geo.latitude && geo.longitude) ? {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude
      } : undefined
    } : (serviceDetails.areaServed ? {
      '@type': 'AdministrativeArea',
      name: serviceDetails.areaServed
    } : 'India');

    serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceDetails.name || title,
      provider: {
        '@type': 'Organization',
        name: siteName,
        url: `${siteDomain}/`
      },
      areaServed: areaServedConfig,
      description: serviceDetails.description || description,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing & Growth Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimization (SEO)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads & Paid Search' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta Ads & Social Performance' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'High-Performance Web Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Workflows & Lead Automation' } }
        ]
      }
    };
  }

  // 5. FAQPage Schema (Only when FAQs are genuinely rendered on page)
  let faqSchema = null;
  if (faqs && faqs.length > 0) {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
  }

  const structuredDataList = [
    organizationSchema,
    webPageSchema,
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ...(serviceSchema ? [serviceSchema] : []),
    ...(faqSchema ? [faqSchema] : [])
  ];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Advanced GEO Tags (Geographic Engine Optimization) */}
      {geo && geo.regionCode && <meta name="geo.region" content={geo.regionCode} />}
      {geo && geo.placename && <meta name="geo.placename" content={geo.placename} />}
      {geo && geo.latitude && geo.longitude && (
        <>
          <meta name="geo.position" content={`${geo.latitude};${geo.longitude}`} />
          <meta name="ICBM" content={`${geo.latitude}, ${geo.longitude}`} />
        </>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@codenclick" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredDataList)}
      </script>
    </Helmet>
  );
};

SEOHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonicalPath: PropTypes.string.isRequired,
  type: PropTypes.string,
  imageUrl: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ),
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    })
  ),
  serviceDetails: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    areaServed: PropTypes.string
  }),
  geo: PropTypes.shape({
    regionCode: PropTypes.string,
    regionName: PropTypes.string,
    placename: PropTypes.string,
    latitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
};

export default SEOHead;
