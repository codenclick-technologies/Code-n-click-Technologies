import React from 'react';
import SEO from '../components/utils/SEO';

const SEOGuide = () => {
  return (
    <>
      <SEO 
        title="SEO & Marketing Guide"
        description="Complete guide for ranking Code-n-Click Technologies website"
        canonical="/seo-guide"
      />
      <div className="min-h-screen bg-gray-950 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">SEO & Marketing Implementation Guide</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">✅ Already Implemented</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>robots.txt configured</li>
              <li>SEO meta tags on all pages</li>
              <li>Sitemap.xml</li>
              <li>Schema.org structured data</li>
              <li>PWA manifest</li>
              <li>Fast loading (Vercel CDN)</li>
              <li>Mobile responsive</li>
              <li>HTTPS/SSL ready</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">📋 Next Steps After Deploy</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1. Google Search Console Setup</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Go to search.google.com/search-console</li>
              <li>Add property: codenclick.in</li>
              <li>Verify ownership (DNS method recommended)</li>
              <li>Submit sitemap: https://codenclick.in/sitemap.xml</li>
            </ol>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Google Analytics 4</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Create GA4 property at analytics.google.com</li>
              <li>Add tracking code to website</li>
              <li>Link with Search Console</li>
            </ol>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. Google My Business</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Create business profile</li>
              <li>Add your office address</li>
              <li>Add photos, services</li>
              <li>Get reviews from clients</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">📝 Content Strategy</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Blog Topics (Resources Section)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>"How to Choose the Right Software Development Company in 2025"</li>
              <li>"SaaS vs Traditional Software: Which is Right for Your Business?"</li>
              <li>"10 Digital Marketing Strategies for Indian Startups"</li>
              <li>"Complete Guide to Google Ads for Small Businesses"</li>
              <li>"Why Your Business Needs a Custom Software Solution"</li>
              <li>"ROI of Digital Marketing: Case Studies from India"</li>
              <li>"React vs Vue vs Angular: Best Framework for Your Project"</li>
              <li>"SEO Checklist for 2025: Technical + Content"</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Target Keywords</h3>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="mb-2"><strong>Primary:</strong></p>
              <ul className="list-disc pl-6 mb-4">
                <li>software development company India</li>
                <li>web development services</li>
                <li>digital marketing agency India</li>
              </ul>
              
              <p className="mb-2"><strong>Secondary:</strong></p>
              <ul className="list-disc pl-6">
                <li>SaaS development company</li>
                <li>custom software development</li>
                <li>SEO services India</li>
                <li>Google Ads management</li>
                <li>React development company</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🔗 Link Building Strategy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit to: Clutch.co, GoodFirms, TopDevelopers.co</li>
              <li>Get listed in local directories</li>
              <li>Write guest posts for tech blogs</li>
              <li>Share case studies on LinkedIn</li>
              <li>Create infographics and share</li>
              <li>Participate in Quora/Reddit tech discussions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">📱 Social Media</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">LinkedIn (Priority)</h4>
                <ul className="list-disc pl-6 text-sm">
                  <li>Company page optimization</li>
                  <li>Share case studies weekly</li>
                  <li>Engage in tech communities</li>
                  <li>Employee advocacy</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Instagram</h4>
                <ul className="list-disc pl-6 text-sm">
                  <li>Behind-the-scenes content</li>
                  <li>Team highlights</li>
                  <li>Project showcases</li>
                  <li>Tech tips & tricks</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">📊 Expected Timeline</h2>
            <div className="space-y-4">
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <p className="font-semibold">Month 1-2: Foundation</p>
                <p className="text-sm">Google indexing, basic rankings for brand name</p>
              </div>
              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4">
                <p className="font-semibold">Month 3-6: Growth</p>
                <p className="text-sm">Ranking for long-tail keywords, increasing traffic</p>
              </div>
              <div className="bg-green-900/20 border-l-4 border-green-500 p-4">
                <p className="font-semibold">Month 6-12: Authority</p>
                <p className="text-sm">Page 1 rankings for competitive keywords</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SEOGuide;
