import React, { useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getCityBySlug } from '../../data/cities';
import SEOHead from '../../components/utils/SEOHead';
import CityHero from '../../components/location/CityHero';
import CityAEOSummary from '../../components/location/CityAEOSummary';
import CityServices from '../../components/location/CityServices';
import CityLocalContext from '../../components/location/CityLocalContext';
import CityIndustries from '../../components/location/CityIndustries';
import CityProcess from '../../components/location/CityProcess';
import CityTechStack from '../../components/location/CityTechStack';
import CityFAQ from '../../components/location/CityFAQ';
import CityCTA from '../../components/location/CityCTA';
import RelatedCities from '../../components/location/RelatedCities';

const CityLandingPage = () => {
  const { citySlug } = useParams();
  const city = getCityBySlug(citySlug);

  const ctaSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);

  // If city is not found or not published, redirect to master hub
  if (!city) {
    return <Navigate to="/digital-marketing-agency" replace />;
  }

  const handleCtaClick = () => {
    ctaSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServicesClick = () => {
    servicesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Digital Marketing Agency', path: '/digital-marketing-agency' },
    { name: city.city, path: `/digital-marketing-agency/${city.slug}` }
  ];

  const serviceDetails = {
    name: `Digital Marketing Agency in ${city.city}`,
    areaServed: `${city.city}, ${city.state}`,
    description: city.metaDescription
  };

  return (
    <div className="bg-[#020205] text-white min-h-screen">
      {/* Dynamic SEO Head with canonical, Open Graph, Twitter, GEO, AEO, and valid schemas */}
      <SEOHead
        title={city.metaTitle}
        description={city.metaDescription}
        canonicalPath={`/digital-marketing-agency/${city.slug}`}
        breadcrumbs={breadcrumbs}
        faqs={city.faqs}
        serviceDetails={serviceDetails}
        geo={city.geo}
      />

      {/* Hero Section */}
      <CityHero
        city={city}
        onCtaClick={handleCtaClick}
        onServicesClick={handleServicesClick}
      />

      {/* AEO / IEO Executive Summary (Direct Answer Engine Passage) */}
      <CityAEOSummary city={city} />

      {/* Core Services Section */}
      <CityServices
        cityName={city.city}
        servicesSectionRef={servicesSectionRef}
      />

      {/* Local Relevance & Market Challenges */}
      <CityLocalContext city={city} />

      {/* Target Industries */}
      <CityIndustries
        cityName={city.city}
        industries={city.industries}
      />

      {/* Strategic Growth Process */}
      <CityProcess
        cityName={city.city}
        roadmap={city.growthRoadmap}
      />

      {/* Modern Marketing & Tech Stack */}
      <CityTechStack cityName={city.city} />

      {/* Visible FAQs with Schema Parity */}
      <CityFAQ
        cityName={city.city}
        faqs={city.faqs}
      />

      {/* High-Converting Lead Form CTA */}
      <CityCTA
        cityName={city.city}
        ctaSectionRef={ctaSectionRef}
      />

      {/* Contextual Proximity Cross-Linking */}
      <RelatedCities
        currentCity={city.city}
        nearbyCities={city.nearbyCities}
        relatedServices={city.relatedServices}
      />
    </div>
  );
};

export default CityLandingPage;
