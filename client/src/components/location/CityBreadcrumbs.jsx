import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import PropTypes from 'prop-types';

const CityBreadcrumbs = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-gray-400">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path || item.name} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-gray-600" />
              {isLast ? (
                <span className="text-white font-medium truncate max-w-[200px] md:max-w-none" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

CityBreadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string
    })
  ).isRequired
};

export default CityBreadcrumbs;
