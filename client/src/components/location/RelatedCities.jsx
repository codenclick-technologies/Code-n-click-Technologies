import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Layers } from 'lucide-react';
import PropTypes from 'prop-types';

const RelatedCities = ({ currentCity, nearbyCities = [], relatedServices = [] }) => {
  return (
    <section className="py-16 bg-[#030014]/80 relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Related Regional Hubs */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-blue-400">
              <MapPin className="w-5 h-5" />
              <h3 className="text-xl font-bold text-white">
                Nearby & Regional Growth Hubs
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              Businesses expanding across regional economic corridors can leverage our localized performance strategies in connected markets:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {nearbyCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/digital-marketing-agency/${city.slug}`}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.05] transition-all"
                >
                  <div className="space-y-0.5">
                    <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors block">
                      {city.name}
                    </span>
                    <span className="text-xs text-gray-400 block">
                      {city.state}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}

              <Link
                to="/digital-marketing-agency"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/15 transition-all sm:col-span-2"
              >
                <span className="text-sm font-semibold text-blue-300">
                  View All National Locations & Hubs
                </span>
                <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>

          {/* Related Core Growth Services */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-indigo-400">
              <Layers className="w-5 h-5" />
              <h3 className="text-xl font-bold text-white">
                Core Digital Capabilities
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              Deep-dive into our specialized growth disciplines backing every regional campaign in {currentCity}:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.05] transition-all"
                >
                  <span className="text-sm font-medium text-gray-200 group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RelatedCities.propTypes = {
  currentCity: PropTypes.string.isRequired,
  nearbyCities: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired
    })
  ),
  relatedServices: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  )
};

export default RelatedCities;
