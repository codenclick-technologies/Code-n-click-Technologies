import { Providers } from './providers';
import ClientLayout from './ClientLayout';

export const metadata = {
    title: 'Codenclick Technologies | Software Development & Digital Marketing Agency in Faridabad',
    description: 'Code-n-Click Technologies - Leading software development and digital marketing agency in Faridabad. Web development, SaaS solutions, SEO, and more.',
    keywords: 'GMB Expert Delhi, GMB Consultant Faridabad, SEO Services, Digital Marketing Services, Web Development, SaaS Solutions, Software Company Faridabad',
    verification: {
        google: "6sym02100dK8ZhHJZw1edmVxzl7r_pmpIzV2p4mt2xQ",
    },
    icons: {
        icon: '/faviconimage.png',
        apple: '/faviconimage.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <head>
                {/* Iubenda Cookie Solution Config */}
                <Script id="iubenda-config" strategy="beforeInteractive">
                    {`
            var _iub = _iub || [];
            _iub.csConfiguration = {"siteId":4354650,"cookiePolicyId":11772884,"lang":"en","storage":{"useSiteId":true}};
          `}
                </Script>
                <Script src="https://cs.iubenda.com/autoblocking/4354650.js" strategy="beforeInteractive" />
                <Script src="//cdn.iubenda.com/cs/gpp/stub.js" strategy="beforeInteractive" />
                <Script src="//cdn.iubenda.com/cs/iubenda_cs.js" strategy="afterInteractive" />
            </head>
            <body>
                <Providers>
                    <ClientLayout>
                        {children}
                    </ClientLayout>

                    {/* Google Analytics */}
                    <Script src="https://www.googletagmanager.com/gtag/js?id=G-136N1MN22S" strategy="afterInteractive" />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-136N1MN22S');
            `}
                    </Script>
                </Providers>
            </body>
        </html>
    );
}
