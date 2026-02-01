import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Breadcrumbs = ({ items }) => {
  const location = useLocation();
  const baseUrl = window.location.origin;

  // Generate Schema.org JSON-LD
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `${baseUrl}${item.path}`
      }))
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <nav aria-label="Breadcrumb" className="flex items-center text-sm text-gray-400 mb-6 overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
        <ol className="flex items-center gap-2">
          <li>
            <Link 
              to="/" 
              className="flex items-center hover:text-blue-400 transition-colors"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-gray-600" />
              {index === items.length - 1 ? (
                <span className="text-blue-400 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.path}
                  className="hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
