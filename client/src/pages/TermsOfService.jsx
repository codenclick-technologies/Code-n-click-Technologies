import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale } from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = "December 13, 2025";

  return (
    <>
      <Helmet>
        <title>Terms of Service | Codenclick Technologies</title>
        <meta name="description" content="Read the Terms of Service for Codenclick Technologies' IT and digital marketing services. Understand your rights and responsibilities when using our services." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-[#020205] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-2xl mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These terms govern your use of our IT and digital marketing services. Please read them carefully.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Agreement to Terms */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Agreement to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              These Terms of Service constitute a legally binding agreement between you and Codenclick Technologies ("Company", "we", "us", or "our") concerning your access to and use of our website, IT services, digital marketing services, HR management platform, and related services (collectively, the "Services").
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with all of these Terms, you are expressly prohibited from using the Services and must discontinue use immediately.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We reserve the right to change or modify these Terms at any time and in our sole discretion. If we make material changes, we will provide notice through our Services or via email.
            </p>
          </div>

          {/* Services Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Services Description</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">IT Services</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  We provide various IT services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Web development and application development</li>
                  <li>SaaS development and cloud solutions</li>
                  <li>Software consulting and technical support</li>
                  <li>HR management platform and tools</li>
                  <li>System integration and API development</li>
                  <li>IT infrastructure and maintenance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Digital Marketing Services</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  Our digital marketing services include:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Google Ads campaign management</li>
                  <li>Meta (Facebook & Instagram) advertising</li>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Social media marketing and management</li>
                  <li>Content marketing and strategy</li>
                  <li>Email marketing campaigns</li>
                  <li>Analytics and performance reporting</li>
                  <li>Graphic design and creative services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Accounts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">User Accounts and Registration</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Account Creation</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  To access certain features of our Services, you must create an account. When creating an account:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>You must provide accurate, current, and complete information</li>
                  <li>You must be at least 18 years of age</li>
                  <li>You must have legal capacity to enter into binding contracts</li>
                  <li>You are responsible for maintaining account confidentiality</li>
                  <li>You are responsible for all activities under your account</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Account Security</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  You are responsible for safeguarding your password and any other credentials used to access our Services. You must notify us immediately of any unauthorized access or security breach. We are not liable for any loss or damage arising from your failure to protect your account credentials.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Account Termination</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We reserve the right to suspend or terminate your account at any time, with or without notice, for violation of these Terms, fraudulent activity, or any other reason we deem appropriate. You may also terminate your account at any time by contacting us.
                </p>
              </div>
            </div>
          </div>

          {/* Service Agreements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Service Agreements and Contracts</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Client Contracts</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  For enterprise clients engaging our IT or digital marketing services, a separate Service Agreement or Master Services Agreement (MSA) may apply. In case of conflict between these Terms and a separate written agreement, the separate agreement shall prevail.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Scope of Work</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  For project-based services, we will provide a Statement of Work (SOW) or proposal outlining deliverables, timelines, costs, and payment terms. Both parties must agree to and sign the SOW before work commences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Service Level Agreement (SLA)</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  For certain services, we may provide SLAs specifying:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Uptime guarantees and availability targets</li>
                  <li>Response times for support requests</li>
                  <li>Performance metrics and KPIs</li>
                  <li>Remedies for service failures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Payment Terms and Billing</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Fees and Pricing</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  All fees are as specified in your service agreement, invoice, or our pricing page. We reserve the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Change our pricing with 30 days' notice</li>
                  <li>Offer promotional pricing at our discretion</li>
                  <li>Apply different pricing for different service tiers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Payment Methods</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We accept payments via credit card, debit card, bank transfer, and other methods as specified. By providing payment information, you authorize us to charge your payment method for all fees incurred.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Billing Cycle</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Subscription services are billed monthly or annually as selected. One-time projects are billed according to the payment schedule in the SOW. Late payments may incur interest charges and service suspension.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Refund Policy</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  All fees are non-refundable unless otherwise stated in writing or required by law. Custom development work and digital marketing campaigns are non-refundable once work has commenced.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Taxes</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Fees do not include applicable taxes (GST, VAT, sales tax, etc.). You are responsible for paying all applicable taxes unless you provide a valid tax exemption certificate.
                </p>
              </div>
            </div>
          </div>

          {/* Acceptable Use */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Acceptable Use Policy</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Permitted Use</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  You may use our Services only for lawful purposes and in accordance with these Terms. You agree to use the Services solely for your internal business operations or as otherwise specified in your service agreement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Prohibited Activities</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  You agree NOT to:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Engage in fraudulent, deceptive, or misleading practices</li>
                  <li>Upload malicious code, viruses, or harmful software</li>
                  <li>Attempt unauthorized access to our systems or networks</li>
                  <li>Interfere with or disrupt the Services or servers</li>
                  <li>Scrape, crawl, or data mine our platform without permission</li>
                  <li>Reverse engineer or decompile our software</li>
                  <li>Resell or redistribute our Services without authorization</li>
                  <li>Use the Services to send spam or unsolicited communications</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Impersonate any person or entity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Intellectual Property Rights</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Intellectual Property</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio, video, software, and code, are owned by Codenclick Technologies and are protected by copyright, trademark, patent, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">License to Use Services</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services in accordance with these Terms. This license does not include any right to resell, redistribute, or create derivative works.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Client Content and Data</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  You retain ownership of all data, content, and materials you provide to us ("Client Content"). By providing Client Content, you grant us a worldwide, royalty-free license to:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Use, store, and process Client Content to provide Services</li>
                  <li>Create backups and copies for operational purposes</li>
                  <li>Display Client Content as necessary for service delivery</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Work Product Ownership</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  For custom development projects, ownership of work product will be specified in the SOW. Generally, upon full payment, you receive ownership of custom deliverables, while we retain rights to our pre-existing tools, frameworks, and methodologies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Trademarks</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  "Codenclick Technologies" and related logos are trademarks of our company. You may not use our trademarks without prior written permission.
                </p>
              </div>
            </div>
          </div>

          {/* Digital Marketing Specific Terms */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Digital Marketing Services Terms</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Ad Spend and Budget</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  For paid advertising campaigns, you are responsible for all ad spend costs charged by third-party platforms (Google, Meta, etc.) in addition to our management fees. We will manage your budget as specified in the service agreement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Campaign Performance</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We do not guarantee specific results, rankings, traffic levels, or conversion rates. Marketing performance depends on many factors beyond our control. We will use best practices and reasonable efforts to achieve optimal results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Ad Platform Compliance</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  You acknowledge that:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Your campaigns must comply with platform policies (Google, Meta, etc.)</li>
                  <li>Platforms may reject, suspend, or ban ads at their discretion</li>
                  <li>We are not liable for platform policy violations or account suspensions</li>
                  <li>You must provide compliant creative assets and landing pages</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Reporting and Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We provide regular performance reports as specified in your service agreement. Data accuracy depends on third-party tracking tools and platform APIs. We are not responsible for discrepancies caused by platform data collection methods.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Content Creation</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  For content creation services (graphics, copy, videos), you receive a license to use the content for your business purposes. We may showcase work samples in our portfolio unless otherwise agreed.
                </p>
              </div>
            </div>
          </div>

          {/* Service Availability */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Service Availability and Maintenance</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Uptime and Availability</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We strive to provide reliable, uninterrupted service but do not guarantee 100% uptime. The Services may be unavailable due to maintenance, updates, technical issues, or circumstances beyond our control.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Scheduled Maintenance</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We may perform scheduled maintenance that causes temporary service disruptions. We will attempt to provide advance notice when possible and schedule maintenance during off-peak hours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Service Modifications</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any part of the Services at any time, with or without notice. We are not liable for any modifications, suspensions, or discontinuations.
                </p>
              </div>
            </div>
          </div>

          {/* Warranties and Disclaimers */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Warranties and Disclaimers</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Service Warranty</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We warrant that our Services will be performed in a professional manner consistent with industry standards. For defects in deliverables, we will re-perform the work at no additional charge if reported within 30 days.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Disclaimer of Warranties</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  EXCEPT AS EXPRESSLY STATED, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Warranties of merchantability or fitness for a particular purpose</li>
                  <li>Warranties of non-infringement</li>
                  <li>Warranties that the Services will be uninterrupted, timely, secure, or error-free</li>
                  <li>Warranties regarding the accuracy or reliability of results</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Limitation of Liability</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Liability Cap</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR ₹50,000 (FIFTY THOUSAND RUPEES), WHICHEVER IS GREATER.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Exclusion of Damages</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Loss of profits, revenue, or business opportunities</li>
                  <li>Loss of data or information</li>
                  <li>Business interruption or downtime</li>
                  <li>Cost of substitute services</li>
                  <li>Damage to reputation or goodwill</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Third-Party Platforms</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We are not liable for issues arising from third-party platforms, services, or tools (Google Ads, Meta, hosting providers, etc.). Your relationship with these platforms is governed by their respective terms.
                </p>
              </div>
            </div>
          </div>

          {/* Indemnification */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Indemnification</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              You agree to indemnify, defend, and hold harmless Codenclick Technologies, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from or related to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of third parties</li>
              <li>Your Client Content or data</li>
              <li>Your negligence or willful misconduct</li>
            </ul>
          </div>

          {/* Confidentiality */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Confidentiality</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Mutual Confidentiality</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Both parties agree to keep confidential any proprietary or sensitive information disclosed during the business relationship. Confidential information includes business plans, technical data, customer lists, pricing, and non-public information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Exceptions</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Confidentiality obligations do not apply to information that is publicly available, independently developed, or required to be disclosed by law.
                </p>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Termination</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Termination by You</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  You may terminate your account or subscription at any time by providing written notice. Termination will be effective at the end of the current billing period. No refunds will be provided for partial periods.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Termination by Us</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  We may suspend or terminate your access immediately, without notice, for:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>Violation of these Terms</li>
                  <li>Non-payment of fees</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Harm to our systems or other users</li>
                  <li>Any other reason at our sole discretion</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Effect of Termination</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Upon termination, your right to use the Services immediately ceases. We may delete your data after a reasonable period. Provisions regarding payment, intellectual property, confidentiality, indemnification, and limitation of liability survive termination.
                </p>
              </div>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Dispute Resolution</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Informal Resolution</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Before initiating formal proceedings, parties agree to attempt to resolve disputes through good-faith negotiation for at least 30 days.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Arbitration</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  If informal resolution fails, disputes shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English in India.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Class Action Waiver</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  You agree to resolve disputes on an individual basis only and waive the right to participate in class actions or representative proceedings.
                </p>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Governing Law and Jurisdiction</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Any legal action or proceeding arising from these Terms shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </div>

          {/* General Provisions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">General Provisions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Entire Agreement</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  These Terms, together with any applicable service agreements, SOWs, and our Privacy Policy, constitute the entire agreement between you and us regarding the Services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Severability</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Waiver</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other provision.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Assignment</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Force Majeure</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We are not liable for delays or failures in performance caused by events beyond our reasonable control, including natural disasters, wars, strikes, government actions, or internet failures.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Notices</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Legal notices shall be sent to the contact information you provide in your account or as otherwise specified in your service agreement. Notices to us should be sent through our contact form.
                </p>
              </div>
            </div>
          </div>

          {/* Modifications */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Modifications to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of material changes via:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4 mb-4">
              <li>Posting the updated Terms on our website</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending email notification for significant changes</li>
              <li>Displaying a prominent notice on our Services</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Your continued use of the Services after changes are posted constitutes acceptance of the modified Terms. If you do not agree to the modified Terms, you must discontinue use of the Services.
            </p>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
              <li>Through our contact form at <a href="/contact" className="text-purple-600 hover:underline">/contact</a></li>
              <li>Visit our Contact Us page for additional contact methods</li>
            </ul>
          </div>

          {/* Acknowledgment */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Acknowledgment</h3>
            <p className="leading-relaxed">
              BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE OUR SERVICES.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
