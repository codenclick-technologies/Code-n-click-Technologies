import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "December 13, 2025";

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Codenclick Technologies</title>
        <meta name="description" content="Learn how Codenclick Technologies collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and transparency." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-[#020205] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
              Codenclick Technologies ("we", "our", or "us") is an IT services and digital marketing company committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, services, HR management platform, and digital marketing solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Personal Information</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  We may collect the following personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Company name, job title, and business information</li>
                  <li>Payment and billing information</li>
                  <li>Login credentials and account information</li>
                  <li>Resume and employment history (for job applications)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Usage and Technical Data</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  We automatically collect technical information including:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>IP address, browser type, and device information</li>
                  <li>Operating system and browser version</li>
                  <li>Pages visited, time spent, and click patterns</li>
                  <li>Referring website and exit pages</li>
                  <li>Geolocation data (with your permission)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Marketing and Analytics Data</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  As a digital marketing company, we collect:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Conversion tracking data from advertising campaigns</li>
                  <li>Behavioral data for targeted advertising</li>
                  <li>Website interaction and engagement metrics</li>
                  <li>Social media interaction data</li>
                  <li>Email open rates and click-through rates</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Cookies and Tracking Technologies</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We use cookies, web beacons, pixel tags, and similar tracking technologies to enhance user experience, analyze usage patterns, deliver targeted advertising, and measure campaign effectiveness. You can control cookie preferences through your browser settings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Client and Customer Data</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When you engage our IT or digital marketing services, we may process data on your behalf as a data processor. This includes customer lists, campaign data, and analytics information. We handle this data in accordance with our Data Processing Agreement and applicable data protection laws.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How We Use Your Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Service Delivery</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Provide, maintain, and improve our IT and digital marketing services</li>
                  <li>Process transactions and send transaction notifications</li>
                  <li>Manage user accounts and authentication</li>
                  <li>Deliver customer support and respond to inquiries</li>
                  <li>Execute digital marketing campaigns on behalf of clients</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Marketing and Advertising</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Send promotional communications and marketing materials</li>
                  <li>Deliver targeted advertisements based on interests</li>
                  <li>Measure advertising campaign performance</li>
                  <li>Conduct market research and analytics</li>
                  <li>Create custom audiences for social media advertising</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Analytics and Improvement</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Analyze website traffic and user behavior</li>
                  <li>Improve website functionality and user experience</li>
                  <li>Develop new features and services</li>
                  <li>Conduct A/B testing and optimization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Legal and Security</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Comply with legal obligations and enforce our terms</li>
                  <li>Prevent fraud, security threats, and illegal activities</li>
                  <li>Protect the rights and safety of our users and company</li>
                  <li>Resolve disputes and enforce agreements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Sharing & Third Parties */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Data Sharing & Third-Party Services</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Service Providers</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  We share data with trusted third-party service providers who assist in our operations:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Cloud hosting providers (AWS, Google Cloud, etc.)</li>
                  <li>Payment processors and billing services</li>
                  <li>Email service providers</li>
                  <li>Analytics platforms (Google Analytics, etc.)</li>
                  <li>Customer relationship management (CRM) systems</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Advertising Platforms</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  We use advertising platforms to deliver targeted ads:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Google Ads and Google Marketing Platform</li>
                  <li>Meta (Facebook and Instagram) Business Tools</li>
                  <li>LinkedIn Marketing Solutions</li>
                  <li>Other social media advertising platforms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Legal Disclosures</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We may disclose your information if required by law, court order, government request, or to protect our rights, property, safety, or that of our users and the public.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Business Transfers</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred to the acquiring entity, subject to the same privacy protections.
                </p>
              </div>
            </div>
          </div>

          {/* Data Protection & Security */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Data Protection & Security</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Security Measures</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  We implement industry-standard security measures including:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Encrypted storage of sensitive data</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication protocols</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Retention</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  We retain personal information for the following periods:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Account data: Duration of account plus 3 years</li>
                  <li>Transaction records: 7 years (for tax and legal compliance)</li>
                  <li>Marketing analytics: Up to 2 years</li>
                  <li>Website usage data: Up to 26 months</li>
                  <li>Job applications: 1 year from application date</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                  You may request deletion of your data at any time, subject to legal retention requirements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Breach Notification</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  In the event of a data breach that affects your personal information, we will notify you and relevant authorities within 72 hours of becoming aware of the breach, as required by applicable laws.
                </p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Your Privacy Rights</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">General Rights</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                  <li><strong>Right to Restriction:</strong> Limit how we process your data</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
                  <li><strong>Right to Object:</strong> Object to processing for direct marketing or legitimate interests</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">GDPR Rights (For EU Residents)</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR), including the right to lodge a complaint with a supervisory authority and protection against automated decision-making.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">CCPA Rights (For California Residents)</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  California residents have additional rights under the California Consumer Privacy Act (CCPA):
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to know if personal information is sold or disclosed</li>
                  <li>Right to opt-out of the sale of personal information</li>
                  <li>Right to deletion of personal information</li>
                  <li>Right to non-discrimination for exercising CCPA rights</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                  <strong>Note:</strong> We do not sell personal information to third parties.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Marketing Opt-Out</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  You can opt out of marketing communications by clicking the unsubscribe link in emails, adjusting your account notification settings, or contacting us directly. Note that you cannot opt out of transactional or service-related communications.
                </p>
              </div>
            </div>
          </div>

          {/* International Data Transfers */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">International Data Transfers</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Our services are operated from India. If you are located outside India, your information may be transferred to and processed in India or other countries where our service providers operate.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We ensure that international data transfers comply with applicable data protection laws through:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Adequacy decisions by relevant authorities</li>
              <li>Data Processing Agreements with third-party processors</li>
              <li>Implementing appropriate safeguards and security measures</li>
            </ul>
          </div>

          {/* Children's Privacy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Children's Privacy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18 years of age.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If we become aware that we have collected personal information from a child under 18 without parental consent, we will take steps to delete that information promptly. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </div>

          {/* Cookie Policy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Cookie Policy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              We use cookies and similar tracking technologies to track activity on our service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Essential Cookies</h4>
                <p className="text-gray-600 dark:text-gray-300">Required for basic site functionality, security, and authentication</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics Cookies</h4>
                <p className="text-gray-600 dark:text-gray-300">Google Analytics and other tools to understand visitor behavior</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Functional Cookies</h4>
                <p className="text-gray-600 dark:text-gray-300">Remember your preferences, settings, and login information</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Marketing/Advertising Cookies</h4>
                <p className="text-gray-600 dark:text-gray-300">Deliver targeted ads, track conversions, and measure campaign performance</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>Third-Party Cookies:</strong> We use cookies from Google Ads, Meta Pixel, LinkedIn Insight Tag, and other advertising platforms to deliver personalized advertising and measure campaign effectiveness.
            </p>
          </div>

          {/* Do Not Track */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Do Not Track Signals</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Some web browsers incorporate a "Do Not Track" (DNT) feature. Because there is not yet a common understanding of how to interpret DNT signals, our website does not currently respond to DNT browser signals. However, you can configure your cookie preferences and opt out of targeted advertising through our cookie consent manager.
            </p>
          </div>

          {/* Client Data Processing */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Client Data Processing</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              When we provide IT services or digital marketing services to business clients, we may process personal data on behalf of our clients as a data processor. In these cases:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4 mb-4">
              <li>Our clients remain the data controller</li>
              <li>We process data only according to client instructions</li>
              <li>We maintain appropriate Data Processing Agreements (DPAs)</li>
              <li>We implement technical and organizational security measures</li>
              <li>We assist clients in responding to data subject requests</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If you are an end-user whose data is processed by us on behalf of a client, please contact that client directly regarding your privacy rights.
            </p>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have questions about this Privacy Policy, wish to exercise your privacy rights, or have concerns about our data practices, please contact us through:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                <li>Our website contact form at <a href="/contact" className="text-blue-600 hover:underline">/contact</a></li>
                <li>Visiting our Contact Us page for additional contact methods</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                For GDPR-related inquiries or to contact our Data Protection Officer, please use the contact channels provided on our website.
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We may update our Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4 mb-4">
              <li>Posting the updated policy on this page</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending you an email notification (for significant changes)</li>
              <li>Displaying a prominent notice on our website</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              You are advised to review this Privacy Policy periodically for any changes. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Governing Law</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
